import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadCurrencies } from '../../redux/modules/currencies';
import { setCurrencyValue, convertCurrencies } from '../../redux/modules/selectedCurrencies';
import PageLayout from '../../components/layout/PageLayout';
import availablePockets from './pocketsMockup';

import CurrencySelector from './components/CurrencySelector';
import RatesCompare from './components/RatesCompare';

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
            currencies={availablePockets}
            setCurrencyValue={this.props.setCurrencyValue}
            currencyType="currencyToSell"
            initialCurrency="USD"
            // availablePockets={availablePockets}
            selectedCurrencies={this.props.selectedCurrencies}
          />
          <RatesCompare
            selectedCurrencies={this.props.selectedCurrencies}
            convertCurrencies={this.props.convertCurrencies}
          />
          <CurrencySelector
            currencies={this.props.currencies.data}
            setCurrencyValue={this.props.setCurrencyValue}
            currencyType="currencyToBuy"
            initialCurrency="PLN"
            selectedCurrencies={this.props.selectedCurrencies}
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

const mapStateToProps = ({
  currencies,
  selectedCurrencies,
}) => ({
  currencies,
  selectedCurrencies,
});

const mapDispatchToProps = {
  loadCurrencies,
  setCurrencyValue,
  convertCurrencies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Converter);
