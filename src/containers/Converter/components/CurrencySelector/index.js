import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import formatCurrencyValue from '../../../../helpers/formatCurrencyValue';

import ComboBox from '../../../../components/ui/ComboBox';

import styles from './styles.module.scss';

class CurrencySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCurrency: props.initialCurrency,
      currencyData: {
        propertyName: props.propertyName,
        label: props.initialCurrency,
        amount: '',
      },
    };
  }

  componentDidMount() {
    this.props.setCurrencyValue(this.props.currencyType, this.state.currencyData);
  }

  onCurrencySelect = selectedCurrency => {
    // TODO: Load currency exchange ratio if both currencies are chosen
    const updatedCurrencyData = { ...this.state.currencyData, label: selectedCurrency.label }

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

  render() {
    const currencySelectorClassnames = classNames({
      [styles.currencySelectorContainer]: true,
    });

    return (
      <div className={currencySelectorClassnames}>
        <ComboBox
          selectInput={{
            options: this.props.currencies,
            onChange: this.onCurrencySelect,
            placeholder: 'Select currency...',
            value: this.getSelectedCurrencyValue()
          }}
          input={{
            onChange: this.onAmountChange,
            type: "number",
            value: this.state.currencyData.amount,
            isDisabled: this.state.selectedCurrency.length === 0,
            placeholder: 'Currency amount...',
          }}
        />
      </div>
    );
  }
}

CurrencySelector.propTypes = {
  setCurrencyValue: PropTypes.func.isRequired,
  initialCurrency: PropTypes.string,
};

export default CurrencySelector;
