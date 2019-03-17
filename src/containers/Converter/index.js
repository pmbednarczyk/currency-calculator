import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectedCurrenciesShapes } from './shapes';

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
    const {
      selectedCurrencies,
      currencies,
    } = this.props;
    const content = (
      <div className={styles.converterContainer}>
        <div className={styles.screenContainer}>
          <CurrencySelector
            title="Your currency pockets"
            currencies={availablePockets}
            setCurrencyValue={this.props.setCurrencyValue}
            currencyType="currencyToSell"
            initialCurrency="USD"
            selectedCurrencies={selectedCurrencies}
          />
          <RatesCompare
            selectedCurrencies={selectedCurrencies}
            convertCurrencies={this.props.convertCurrencies}
          />
          <CurrencySelector
            title="Available currencies to buy"
            currencies={currencies.data}
            setCurrencyValue={this.props.setCurrencyValue}
            currencyType="currencyToBuy"
            initialCurrency="PLN"
            selectedCurrencies={selectedCurrencies}
          />
        </div>
      </div>
    );

    if (!currencies.isProcessing && !currencies.isProcessed) {
      return null;
    }

    return (
      <>
        <Helmet title="Convert it!" />
        <PageLayout content={content} isLoading={currencies.isProcessing} />
      </>
    );
  }
}

Converter.propTypes = {
  setCurrencyValue: PropTypes.func.isRequired,
  convertCurrencies: PropTypes.func.isRequired,
  loadCurrencies: PropTypes.func.isRequired,
  selectedCurrencies: PropTypes.shape({
    ...selectedCurrenciesShapes,
  }).isRequired,
  currencies: PropTypes.shape({
    data: PropTypes.array,
    isProcessing: PropTypes.bool,
    isProcessed: PropTypes.bool,
  }).isRequired,
};

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
