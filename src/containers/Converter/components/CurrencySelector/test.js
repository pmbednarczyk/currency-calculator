import React from 'react';
import { shallow } from 'enzyme';
import CurrencySelector from '.';

const selectedCurrencies = {
  currencyToSell: {
    label: 'USD',
    amount: 100,
  },
  currencyToBuy: {
    label: 'PLN',
    amount: 1000,
  },
};

const currencies = [{
  label: 'SEK',
  value: 60689,
}, {
  label: 'GBP',
  value: 56,
}, {
  label: 'MXN',
  value: 3200,
}, {
  label: 'THB',
  value: 269200,
}];

const defaultRequiredProps = {
  setCurrencyValue: () => {},
  checkPocketLimit: () => {},
  selectedCurrencies,
  currencies,
};

it('renders without crashing (currencyToSell type)', () => {
  shallow(<CurrencySelector
    initialCurrency="USD"
    currencyType="currencyToSell"
    {...defaultRequiredProps}
  />);
});

it('renders without crashing (currencyToBuy type)', () => {
  shallow(<CurrencySelector
    initialCurrency="PLN"
    pockets={currencies}
    currencyType="currencyToBuy"
    {...defaultRequiredProps}
  />);
});
