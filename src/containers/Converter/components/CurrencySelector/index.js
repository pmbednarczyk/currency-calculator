import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { selectedCurrenciesShapes } from '../.././Converter.shapes';
import formatCurrencyValue from '../../../../helpers/formatCurrencyValue';
import ComboBox from '../../../../components/ui/ComboBox';

import styles from './styles.module.scss';

class CurrencySelector extends Component {
  constructor(props) {
    super(props);
    this.currencies = this.getAvailableCurrencies();
    this.state = {
      selectedCurrency: props.initialCurrency,
      currencyData: {
        label: props.initialCurrency,
        amount: '',
      },
    };
  }

  componentDidMount() {
    this.props.setCurrencyValue(this.props.currencyType, this.state.currencyData);
  }

  componentDidUpdate(prevProps) {
    const { currencyToSell, currencyToBuy } = this.props.selectedCurrencies;
    const {
      currencyToSell: prevCurrencyToSell,
      currencyToBuy: prevCurrencyToBuy
    } = prevProps.selectedCurrencies;
    if (currencyToSell.label !== prevCurrencyToSell.label
      || currencyToBuy.label !== prevCurrencyToBuy.label) {
      this.currencies = this.getAvailableCurrencies();
    }
  }

  onCurrencySelect = selectedCurrency => {
    const { selectedCurrencies, currencyType } = this.props;
    const updatedCurrencyData = {
      amount: selectedCurrencies[currencyType].amount,
      label: selectedCurrency.label
    }

    this.updateCurrencyData(updatedCurrencyData);
  }

  onAmountChange = currencyAmount => {
    const formattedAmount = formatCurrencyValue(currencyAmount);
    const updatedCurrencyData = { ...this.state.currencyData, amount: formattedAmount }

    this.updateCurrencyData(updatedCurrencyData);
  }

  updateCurrencyData = updatedCurrencyData => {
    this.setState({
      currencyData: updatedCurrencyData,
      selectedCurrency: updatedCurrencyData.label,
    });

    this.props.setCurrencyValue(this.props.currencyType, updatedCurrencyData);
  }

  getSelectedCurrencyValue = () => (
    this.props.currencies.find(currency => currency.label === this.state.selectedCurrency)
  )

  getAvailableCurrencies = () => {
    const { currencies, selectedCurrencies } = this.props;
    const currencyTypeToFilter = this.props.currencyType === 'currencyToSell'
      ? 'currencyToBuy'
      : 'currencyToSell';

    return this.currencies = currencies.filter(currency => currency.label !== selectedCurrencies[currencyTypeToFilter].label);
  }

  render() {
    const { isProcessing } = this.props.selectedCurrencies.exchangeRate;
    const isDisabled = this.state.selectedCurrency.length === 0 || isProcessing;
    const currencySelectorClassnames = classNames({
      [styles.currencySelectorContainer]: true,
    });

    return (
      <div className={currencySelectorClassnames}>
        {this.props.title && <p>{this.props.title}:</p>}
        <ComboBox
          selectInput={{
            options: this.currencies,
            onChange: this.onCurrencySelect,
            placeholder: 'Select currency...',
            value: this.getSelectedCurrencyValue(),
            isDisabled,
          }}
          input={{
            onChange: this.onAmountChange,
            type: "number",
            value: this.props.selectedCurrencies[this.props.currencyType].amount,
            isDisabled,
            placeholder: 'Currency amount...',
          }}
        />
      </div>
    );
  }
}

CurrencySelector.propTypes = {
  selectedCurrencies: PropTypes.shape({
    ...selectedCurrenciesShapes,
  }).isRequired,
  currencies: PropTypes.array.isRequired,
  setCurrencyValue: PropTypes.func.isRequired,
  initialCurrency: PropTypes.string,
  currencyType: PropTypes.string,
};

export default CurrencySelector;
