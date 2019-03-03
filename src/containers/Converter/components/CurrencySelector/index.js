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
      searchValue: '',
      currencies: props.currencies,
      filteredCurrencies: [],
      currencyData: {
        propertyName: props.propertyName,
        value: '',
        amount: '',
      },
    };
  }

  onCurrencySelect = selectedCurrency => {
    // TODO: Load currency exchange ratio if both currencies are chosen
    const updatedCurrencyData = { ...this.state.currencyData, value: selectedCurrency.value }

    this.updateCurrencyData(updatedCurrencyData);
  }

  onAmountChange = currencyAmount => {
    const formattedAmount = formatCurrencyValue(currencyAmount);
    const updatedCurrencyData = { ...this.state.currencyData, amount: formattedAmount }

    this.updateCurrencyData(updatedCurrencyData);
  }

  updateCurrencyData = updatedCurrencyData => {
    this.setState({
      currencyData: updatedCurrencyData
    });

    this.props.setCurrencyValue(this.props.currencyType, updatedCurrencyData);
  }


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
          }}
          input={{
            onChange: this.onAmountChange,
            value: this.state.currencyData.amount,
            isDisabled: this.state.currencyData.value.length === 0,
            placeholder: 'Currency amount...',
          }}
        />
      </div>
    );
  }
}

CurrencySelector.propTypes = {
  setCurrencyValue: PropTypes.func.isRequired,
};

export default CurrencySelector;
