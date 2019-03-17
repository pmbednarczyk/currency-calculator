import React from 'react';
import { shallow } from 'enzyme';
import RatesCompare from '.';

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

it('renders without crashing (currencies are converting)', () => {
  shallow(
    <RatesCompare
      selectedCurrencies={{
        ...selectedCurrencies,
        exchangeRate: {
          isProcessing: true,
          isProcessed: false,
          ...selectedCurrencies,
        },
      }}
    />,
  );
});

it('renders without crashing (currencies converted)', () => {
  shallow(
    <RatesCompare
      selectedCurrencies={{
        ...selectedCurrencies,
        exchangeRate: {
          isProcessing: false,
          isProcessed: true,
          ...selectedCurrencies,
        },
      }}
    />,
  );
});
