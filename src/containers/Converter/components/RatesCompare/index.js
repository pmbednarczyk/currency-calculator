import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LoaderAnimation from '../../../../components/other/LoaderAnimation';
import { selectedCurrenciesShapes } from '../../shapes';

import styles from './styles.module.scss';

const DEFAULT_REFRESH_TIME = 10000;

class RatesCompare extends Component {
  componentDidMount() {
    const {
      selectedCurrencies: {
        currencyToSell,
        currencyToBuy,
      },
    } = this.props;
    if (currencyToSell.label && currencyToBuy.label) {
      this.getCurrencyRates(true);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      selectedCurrencies: {
        currencyToSell,
        currencyToBuy,
      },
    } = this.props;
    const {
      currencyToSell: prevCurrencyToSell,
      currencyToBuy: prevCurrencyToBuy,
    } = prevProps.selectedCurrencies;
    const isDifferentCurrency = (currencyToSell.label !== prevCurrencyToSell.label)
      || (currencyToBuy.label !== prevCurrencyToBuy.label);
    const isInitialConvert = (!prevCurrencyToSell.label
      && !prevCurrencyToBuy.label)
      || !this.interval;

    if (isDifferentCurrency) this.getCurrencyRates(isInitialConvert);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getCurrencyRates = (isInitialConvert) => {
    const {
      convertCurrencies,
      selectedCurrencies: {
        currencyToSell,
        currencyToBuy,
      },
    } = this.props;

    if (isInitialConvert) {
      convertCurrencies(currencyToSell.label, currencyToBuy.label);
    }
    if (this.interval) clearInterval(this.interval);

    this.interval = setInterval(() => {
      convertCurrencies(currencyToSell.label, currencyToBuy.label);
    }, DEFAULT_REFRESH_TIME);
  }

  renderCurrenciesRatio = (data) => {
    const {
      currencyToSell,
      currencyToBuy,
      isProcessing,
      isProcessed,
    } = data;
    if (!isProcessing && !isProcessed) return null;
    if (isProcessing  && !isProcessed) return <LoaderAnimation isLoading />;

    return (
      <span>
        {`${currencyToSell.rate} ${currencyToSell.label} = ${currencyToBuy.rate} ${currencyToBuy.label}`}
      </span>
    );
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
      ...selectedCurrenciesShapes,
    }),
  }).isRequired,
  convertCurrencies: PropTypes.func.isRequired,
};

export default RatesCompare;
