import PropTypes from 'prop-types';

export default {
  options: PropTypes.array,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  showValues: PropTypes.bool,
  value: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
};

export const SelectInputDefaultProps = {
  options: [],
  onChange: () => {},
  placeholder: '',
  isDisabled: true,
  showValues: false,
  value: {
    label: '',
    value: '',
  },
};
