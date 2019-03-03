import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadCurrencies } from '../../redux/modules/currencies';
import { setCurrencyValue } from '../../redux/modules/selectedCurrencies';
import PageLayout from '../../components/layout/PageLayout';
import CurrencySelector from './components/CurrencySelector';

import styles from './styles.module.scss';

class Converter extends Component {
  componentDidMount() {
    this.props.loadCurrencies();
  }

  render() {
    const content = (
      <div className={styles.converterContainer}>
        <div className={styles.screenContainer}>
          <CurrencySelector
            currencies={this.props.currencies.data}
            setCurrencyValue={this.props.setCurrencyValue}
            currencyType="currencyToSell"
          />
          <CurrencySelector
            currencies={this.props.currencies.data}
            setCurrencyValue={this.props.setCurrencyValue}
            currencyType="currencyToBuy"
          />
        </div>
      </div>
    );

    if (this.props.currencies.isProcessing || !this.props.currencies.isProcessed) {
      return null;
    }

    return (
      <PageLayout content={content} />
    );
  }
}

export default connect(({ currencies, selectedCurrencies }) => ({ currencies, selectedCurrencies }), {
  loadCurrencies,
  setCurrencyValue,
})(Converter);
