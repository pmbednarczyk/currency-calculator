import PropTypes from 'prop-types';

export default {
  options: PropTypes.array,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export const SelectInputDefaultProps = {
  options: [],
  onChange: () => {},
  placeholder: '',
};
