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
      return { ...state, loading: true };
    case LOAD_CURRENCIES_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case LOAD_CURRENCIES_FAIL:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export function loadCurrencies() {
  return {
    types: [LOAD_CURRENCIES, LOAD_CURRENCIES_SUCCESS, LOAD_CURRENCIES_FAIL],
    payload: {
      request:{
        url:'/currencies.json',
      },
    },
  };
}

export default currencies;
