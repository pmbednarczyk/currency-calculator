import PropTypes from 'prop-types';

export const selectedCurrenciesShapes = {
  currencyToSell: PropTypes.shape({
    label: PropTypes.string,
    amount: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
  currencyToBuy: PropTypes.shape({
    label: PropTypes.string,
    amount: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
};
