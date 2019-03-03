import PropTypes from 'prop-types';

export default {
  onChange: PropTypes.func,
  value: PropTypes.string,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

export const InputDefaultProps = {
  onChange: () => {},
  value: '',
  isDisabled: true,
  placeholder: '',
};
