import React from 'react';
import { shallow } from 'enzyme';

import { createClientStore } from '../../redux/store';
import Converter from '.';

const currenciesNotLoaded = {
  isProcessing: true,
  isProcessed: false,
};

const currenciesLoaded = {
  isProcessing: false,
  isProcessed: true,
};

const defaultRequiredProps = {
  loadCurrencies: () => {},
  setCurrencyValue: () => {},
  convertCurrencies: () => {},
  selectedCurrencies: {},
};

const store = createClientStore();

it('renders without crashing (currencies not loaded)', () => {
  shallow(
    <Converter currencies={currenciesNotLoaded} {...defaultRequiredProps} />,
    { context: { store } },
  );
});

it('renders without crashing (currencies loaded)', () => {
  shallow(
    <Converter currencies={currenciesLoaded} {...defaultRequiredProps} />,
    { context: { store } },
  );
});
