import { combineReducers } from 'redux';
import currencies from './currencies';
import pockets from './pockets';
import selectedCurrencies from './selectedCurrencies';

const rootReducer = combineReducers({
  currencies,
  selectedCurrencies,
  pockets,
});

export default rootReducer;
