import { combineReducers } from 'redux';
import currencies from './currencies';
import selectedCurrencies from './selectedCurrencies';

const rootReducer = combineReducers({
  currencies,
  selectedCurrencies,
});

export default rootReducer;
