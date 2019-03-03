const SET_CURRENCY_DATA = 'selectedCurrencies/SET_CURRENCY_DATA';
const CONVERT_CURRENCIES = ' selectedCurrencies/CONVERT_CURRENCIES';
const CONVERT_CURRENCIES_SUCCESS = 'selectedCurrencies/CONVERT_CURRENCIES_SUCCESS';
const CONVERT_CURRENCIES_FAIL = 'selectedCurrencies/CONVERT_CURRENCIES_FAIL';

const initialState = {
  currencyToSell: {
    label: '',
    amount: 0,
  },
  currencyToBuy: {
    label: '',
    amount: 0,
  },
  exchangeRate: {
    isProcessing: false,
    isProcessed: false,
    rates: {},
  },
};

const selectedCurrencies = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENCY_DATA:
      return { ...state, [action.currencyType]: { ...action.data } };
    case CONVERT_CURRENCIES:
      return { ...state, exchangeRate: { isProcessing: true } };
    case CONVERT_CURRENCIES_SUCCESS:
      return {
        ...state,
        exchangeRate: {
          isProcessing: false,
          isProcessed: true,
          rates: action.payload.data.rates,
        },
      };
    case CONVERT_CURRENCIES_FAIL:
      return {
        ...state, exchangeRate: { isProcessing: false, isProcessed: false },
      };
    default:
      return state;
  }
};

export const setCurrencyValue = (currencyType, data) => ({
  type: SET_CURRENCY_DATA,
  currencyType,
  data,
});

export function convertCurrencies(currencyToSell, currencyToBuy) {
  return {
    types: [CONVERT_CURRENCIES, CONVERT_CURRENCIES_SUCCESS, CONVERT_CURRENCIES_FAIL],
    payload: {
      request: {
        url: '/latest',
        params: {
          symbols: `${currencyToSell},${currencyToBuy}`,
          base: currencyToSell,
        },
      },
    },
  };
}

export default selectedCurrencies;
