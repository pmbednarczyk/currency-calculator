import cloneDeep from 'lodash/cloneDeep';
import { resetSelectedValues } from './selectedCurrencies';

const IS_OVER_LIMIT = 'pockets/IS_OVER_LIMIT';
const UPDATE_POCKET_CURRENCY = 'pockets/UPDATE_POCKET_CURRENCY';

const DEFAULT_SUCCESS_MESSAGE = 'Currencies have been successfully exchanged!';
const DEFAULT_ERROR_MESSAGE = 'Insufficient funds!';

const initialState = {
  status: {
    error: '',
    successMessage: '',
  },
  data: [{
    label: 'USD',
    value: 1210,
  }, {
    label: 'PLN',
    value: 5000,
  }, {
    label: 'GBP',
    value: 156,
  }, {
    label: 'THB',
    value: 29200,
  }],
};

const pockets = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_OVER_LIMIT: {
      return { ...state, status: { successMessage: '', error: action.data ? DEFAULT_ERROR_MESSAGE : '' } };
    }
    case UPDATE_POCKET_CURRENCY: {
      const currentPockets = cloneDeep(state.data);
      const newPocket = action.data.find(el => el.newPocket);

      if (newPocket) {
        currentPockets.push({ label: newPocket.label, value: newPocket.value });
      }

      currentPockets.forEach((element, index) => {
        const isExistingCurrency = action.data.find(el => el.label === element.label);

        if (isExistingCurrency) {
          currentPockets[index].value = isExistingCurrency.value;
        }
        return null;
      });
      return { ...state, data: currentPockets, status: { error: '', successMessage: DEFAULT_SUCCESS_MESSAGE } };
    }
    default:
      return state;
  }
};

export const checkPocketLimit = data => ({
  type: IS_OVER_LIMIT,
  data,
});

export const updatePocketCurrency = data => ({
  type: UPDATE_POCKET_CURRENCY,
  data,
});

export const exchangeCurrency = () => (dispatch, getState) => {
  const state = getState();
  const { currencyToSell, currencyToBuy } = state.selectedCurrencies;
  const findCurrencyToExchange = currencyTypeLabel => (
    state.pockets.data.find(currency => currency.label === currencyTypeLabel)
  );
  const newPocketCurrency = {
    label: currencyToBuy.label,
    value: currencyToBuy.amount,
    newPocket: true,
  };
  const pocketCurrencyToSell = findCurrencyToExchange(currencyToSell.label);
  const pocketCurrencyToBuy = findCurrencyToExchange(currencyToBuy.label) || newPocketCurrency;
  const getNewValue = (pocketCurrencyValue, selectedCurrencyValue, sum = false) => {
    const value = sum
      ? pocketCurrencyValue + selectedCurrencyValue
      : pocketCurrencyValue - selectedCurrencyValue;

    return Math.round(value * 100) / 100;
  };

  const updatedCurrencies = [{
    ...pocketCurrencyToSell,
    value: getNewValue(pocketCurrencyToSell.value, currencyToSell.amount),
  }, {
    ...pocketCurrencyToBuy,
    value: getNewValue(pocketCurrencyToBuy.value, currencyToBuy.amount, true),
  }];

  dispatch(updatePocketCurrency(updatedCurrencies));
  dispatch(resetSelectedValues());
};

export default pockets;
