const LOAD_CURRENCIES = ' currencies/LOAD_CURRENCIES';
const LOAD_CURRENCIES_SUCCESS = 'currencies/LOAD_CURRENCIES_SUCCESS';
const LOAD_CURRENCIES_FAIL = 'currencies/LOAD_CURRENCIES_FAIL';

const initialState = {
  data: [],
  isProcessing: false,
  isProcessed: false,
  error: null,
};

const currencies = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENCIES:
      return { ...state, isProcessing: true };
    case LOAD_CURRENCIES_SUCCESS: {
      const currenciesData = Object.keys(action.payload.data)
        .map(key => ({ value: key, label: `${key} - ${action.payload.data[key]}` }));

      return {
        ...state, isProcessing: false, isProcessed: true, data: currenciesData,
      };
    }
    case LOAD_CURRENCIES_FAIL:
      return {
        ...state, isProcessing: false, isProcessed: false, error: true,
      };
    default:
      return state;
  }
};

export function loadCurrencies() {
  return {
    types: [LOAD_CURRENCIES, LOAD_CURRENCIES_SUCCESS, LOAD_CURRENCIES_FAIL],
    payload: {
      request: {
        url: '/currencies.json',
      },
    },
  };
}

export default currencies;
