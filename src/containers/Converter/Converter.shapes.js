import PropTypes from 'prop-types';

export default {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

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
