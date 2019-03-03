const SET_CURRENCY_DATA = 'selectedCurrencies/SET_CURRENCY_DATA';

const initialState = {
  currencyToSell: {
    value: '',
    amount: 0,
  },
  currencyToBuy: {
    value: '',
    amount: 0,
  },
};

const selectedCurrencies = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENCY_DATA:
      return { ...state, [action.currencyType]: { ...action.data } };
    default:
      return state;
  }
};

export const setCurrencyValue = (currencyType, data) => ({
  type: SET_CURRENCY_DATA,
  currencyType,
  data,
});

export default selectedCurrencies;
