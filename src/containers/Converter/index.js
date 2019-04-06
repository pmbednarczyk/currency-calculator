import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectedCurrenciesShapes } from './shapes';

import { loadCurrencies } from '../../redux/modules/currencies';
import { setCurrencyValue, convertCurrencies } from '../../redux/modules/selectedCurrencies';
import { checkPocketLimit, exchangeCurrency } from '../../redux/modules/pockets';
import PageLayout from '../../components/layout/PageLayout';
import Button from '../../components/ui/Button';
import ActionStatus from '../../components/other/ActionStatus';

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
      pockets,
    } = this.props;
    const isButtonDisabled = pockets.status.error || !selectedCurrencies.currencyToSell.amount;
    const content = (
      <div className={styles.converterContainer}>
        <div className={styles.screenContainer}>
          <CurrencySelector
            title="Your currency pockets"
            currencies={pockets.data}
            setCurrencyValue={this.props.setCurrencyValue}
            currencyType="currencyToSell"
            initialCurrency="USD"
            selectedCurrencies={selectedCurrencies}
            showValues
            checkPocketLimit={this.props.checkPocketLimit}
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
            pockets={pockets.data}
            checkPocketLimit={this.props.checkPocketLimit}
          />
          <div className={styles.buttonContainer}>
            <Button
              fullWidth
              disabled={!!isButtonDisabled}
              onClick={this.props.exchangeCurrency}
            >
              EXCHANGE IT!
            </Button>
          </div>
          <ActionStatus data={pockets.status} />
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
  pockets,
}) => ({
  currencies,
  selectedCurrencies,
  pockets,
});

const mapDispatchToProps = {
  loadCurrencies,
  setCurrencyValue,
  convertCurrencies,
  checkPocketLimit,
  exchangeCurrency,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Converter);
