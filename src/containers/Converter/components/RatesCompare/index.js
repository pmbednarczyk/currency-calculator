import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty'

import LoaderAnimation from '../../../../components/other/LoaderAnimation'
import { selectedCurrenciesShapes } from '../.././Converter.shapes';

import styles from './styles.module.scss';

const DEFAULT_REFRESH_TIME = 10000;

class RatesCompare extends Component {
  componentDidUpdate(prevProps) {
    const { currencyToSell, currencyToBuy } = this.props.selectedCurrencies;
    const {
      currencyToSell: prevCurrencyToSell,
      currencyToBuy: prevCurrencyToBuy
    } = prevProps.selectedCurrencies;
    const isDifferentCurrency = (currencyToSell.label !== prevCurrencyToSell.label)
      || (currencyToBuy.label !== prevCurrencyToBuy.label);

    const isInitialConvert = !prevCurrencyToSell.label
      && !prevCurrencyToBuy.label
      && currencyToSell.label
      && currencyToBuy.label;

    if (isDifferentCurrency) this.getCurrencyRates(isInitialConvert)
  }

  getCurrencyRates = isInitialConvert  => {
    const {
      convertCurrencies,
      selectedCurrencies: {
        currencyToSell,
        currencyToBuy,
    }} = this.props;

    if (isInitialConvert) {
      convertCurrencies(currencyToSell.label, currencyToBuy.label)
    }
    if (this.interval) clearInterval(this.interval);

    this.interval = setInterval(() => {
      convertCurrencies(currencyToSell.label, currencyToBuy.label)
    }, DEFAULT_REFRESH_TIME);
  }

  renderCurrenciesRatio = data => {
    if (isEmpty(data)) return null;
    const { currencyToSell, currencyToBuy, isProcessing } = data;

    if (isProcessing) {
      return <LoaderAnimation isLoading={isProcessing} />
    }

    return (
      <span>
        {`${currencyToSell.rate} ${currencyToSell.label} = ${currencyToBuy.rate} ${currencyToBuy.label}`}
      </span>
    )
  }

  render() {
    const ratesCompareClassnames = classNames({
      [styles.ratesCompareContainer]: true,
    });

    return (
      <div className={ratesCompareClassnames}>
        {this.renderCurrenciesRatio(this.props.selectedCurrencies.exchangeRate)}
      </div>
    );
  }
}

RatesCompare.propTypes = {
  selectedCurrencies: PropTypes.shape({
    ...selectedCurrenciesShapes,
    exchangeRate: PropTypes.shape({
      isProcessing: false,
      isProcessed: false,
      ...selectedCurrenciesShapes
    }),
  }).isRequired,
};

export default RatesCompare;