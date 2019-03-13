import convertInputValues from '../../helpers/convertCurrencies';

const SET_CURRENCY_DATA = 'selectedCurrencies/SET_CURRENCY_DATA';
const CONVERT_CURRENCIES = ' selectedCurrencies/CONVERT_CURRENCIES';
const CONVERT_CURRENCIES_SUCCESS = 'selectedCurrencies/CONVERT_CURRENCIES_SUCCESS';
const CONVERT_CURRENCIES_FAIL = 'selectedCurrencies/CONVERT_CURRENCIES_FAIL';

const CURRENCY_TO_SELL = 'currencyToSell';

const initialState = {
  currencyToSell: {
    label: '',
    amount: '',
  },
  currencyToBuy: {
    label: '',
    amount: '',
  },
  exchangeRate: {
    isProcessing: false,
    isProcessed: false,
    currencyToSell: {
      label: '',
      rate: 0,
    },
    currencyToBuy: {
      label: '',
      rate: 0,
    },
  },
};

const selectedCurrencies = (state = initialState, action = {}) => {
  const {
    exchangeRate,
    currencyToSell,
    currencyToBuy,
  } = state;

  switch (action.type) {
    case SET_CURRENCY_DATA: {
      const { label, amount = '' } = action.data;
      const isCurrencyToSellType = action.currencyType === CURRENCY_TO_SELL;
      const isCurrencyToBuyLabelChanged = !isCurrencyToSellType && currencyToBuy.label !== label;
      const formattedAmount = convertInputValues(
        exchangeRate,
        isCurrencyToSellType,
        amount,
        isCurrencyToBuyLabelChanged,
        currencyToSell.amount,
      );
      const currencyToSellAmount = isCurrencyToBuyLabelChanged
        ? currencyToSell.amount
        : formattedAmount;
      const getCurrenciesInputFormattedData = () => ({
        currencyToSell: {
          ...currencyToSell,
          label: isCurrencyToSellType ? label : currencyToSell.label,
          amount: isCurrencyToSellType ? amount : currencyToSellAmount,
        },
        currencyToBuy: {
          ...currencyToBuy,
          label: !isCurrencyToSellType ? label : currencyToBuy.label,
          amount: (!isCurrencyToSellType && !isCurrencyToBuyLabelChanged)
            ? amount
            : formattedAmount,
        },
      });

      return { ...state, ...getCurrenciesInputFormattedData() };
    }
    case CONVERT_CURRENCIES:
      return { ...state, exchangeRate: { ...exchangeRate, isProcessing: true } };
    case CONVERT_CURRENCIES_SUCCESS: {
      const { rates, base } = action.payload.data;
      const getCurrencyToBuyLabel = () => Object.keys(rates).find(el => el !== base);
      const currencyToBuyLabel = getCurrencyToBuyLabel();

      return {
        ...state,
        exchangeRate: {
          isProcessing: false,
          isProcessed: true,
          currencyToSell: {
            ...exchangeRate.currencyToSell,
            label: base,
            rate: rates[base],
          },
          currencyToBuy: {
            ...exchangeRate.currencyToBuy,
            label: currencyToBuyLabel,
            rate: rates[currencyToBuyLabel],
          },
        },
      };
    }
    case CONVERT_CURRENCIES_FAIL:
      return {
        ...state,
        exchangeRate: {
          ...initialState.exchangeRate,
          isProcessing: false,
          isProcessed: false,
        },
      };
    default:
      return state;
  }
};

export const setInputValues = (currencyType, data) => ({
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

export const setCurrencyValue = (currencyType, data) => (dispatch, getState) => {
  const state = getState();
  const { label: newLabel } = data;
  const isCurrencyToSell = currencyType === CURRENCY_TO_SELL;
  const { currencyToSell, currencyToBuy } = state.selectedCurrencies.exchangeRate;
  const currencyToCompare = isCurrencyToSell ? currencyToSell.label : currencyToBuy.label;
  const isDifferentLabel = (currencyToSell.label && currencyToBuy.label)
    && (currencyToCompare !== newLabel);

  if (isDifferentLabel) {
    const currenciesToConvert = {
      toSell: isCurrencyToSell ? newLabel : currencyToSell.label,
      toBuy: !isCurrencyToSell ? newLabel : currencyToBuy.label,
    };

    return dispatch(convertCurrencies(currenciesToConvert.toSell, currenciesToConvert.toBuy))
      .then(() => dispatch(setInputValues(currencyType, data)));
  }

  return dispatch(setInputValues(currencyType, data));
};

export default selectedCurrencies;
