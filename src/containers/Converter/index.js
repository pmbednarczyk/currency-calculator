import React, { Component } from 'react';
import Helmet from 'react-helmet';
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
            title="Your currency pockets"
            currencies={availablePockets}
            setCurrencyValue={this.props.setCurrencyValue}
            currencyType="currencyToSell"
            initialCurrency="USD"
            selectedCurrencies={this.props.selectedCurrencies}
          />
          <RatesCompare
            selectedCurrencies={this.props.selectedCurrencies}
            convertCurrencies={this.props.convertCurrencies}
          />
          <CurrencySelector
            title="Available currencies to buy"
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
      <>
        <Helmet title="Convert it!" />
        <PageLayout content={content} />
      </>
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
