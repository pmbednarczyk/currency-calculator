import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty'

import styles from './styles.module.scss';

const DEFAULT_REFRESH_TIME = 10000;
const BASE_CURRENCY_VALUE = 1;

class RatesCompare extends Component {
  componentDidUpdate(prevProps) {
    const { currencyToSell, currencyToBuy } = this.props.selectedCurrencies;
    const {
      currencyToSell: prevCurrencyToSell,
      currencyToBuy: prevCurrencyToBuy
    } = prevProps.selectedCurrencies;
    const isDifferentCurrency =
      (currencyToSell.label !== prevCurrencyToSell.label)
      || (currencyToBuy.label !== prevCurrencyToBuy.label);
    const isInitialLoad = (!prevCurrencyToSell.value && !prevCurrencyToBuy.label)
      || isDifferentCurrency;

    if (isDifferentCurrency) this.getCurrencyRates(isInitialLoad)
  }

  getCurrencyRates = isInitialLoad  => {
    const { currencyToSell, currencyToBuy } = this.props.selectedCurrencies;
    if (isInitialLoad) {
      this.props.convertCurrencies(currencyToSell.label, currencyToBuy.label)
    }
    if (this.interval) clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.props.convertCurrencies(currencyToSell.label, currencyToBuy.label)
    }, DEFAULT_REFRESH_TIME);
  }

  renderCurrenciesRatio = data => {
    if (isEmpty(data)) return null;
    const { currencyToSell, currencyToBuy } = this.props.selectedCurrencies;
    const currencyToBuyValue = Object.keys(data).find(key => key === currencyToBuy.label);

    return (
      <span>
        {`${BASE_CURRENCY_VALUE} ${currencyToSell.label} = ${data[currencyToBuy.label]} ${currencyToBuyValue}`}
      </span>
    )
  }

  render() {
    const ratesCompareClassnames = classNames({
      [styles.ratesCompareContainer]: true,
    });

    return (
      <div className={ratesCompareClassnames}>
        {this.renderCurrenciesRatio(this.props.selectedCurrencies.exchangeRate.rates)}
      </div>
    );
  }
}

RatesCompare.propTypes = {
  selectedCurrencies: PropTypes.shape({
    currencyToSell: PropTypes.shape({
      value: PropTypes.string,
      amount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
    currencyToBuy: PropTypes.shape({
      value: PropTypes.string,
      amount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
  }).isRequired,
};

export default RatesCompare;
