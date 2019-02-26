import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Input = (
  {
    onChange,
    isError,
    type,
  },
) => {
  const inputClassnames = classNames({
    [styles.input]: true,
    [styles.isError]: isError,
  });

  const onInputChange = (event) => {
    const { value } = event.target;

    return onChange(value);
  };

  return (
    <input
      type={type}
      className={inputClassnames}
      onChange={onInputChange}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  isError: PropTypes.bool,
};

Input.defaultProps = {
  isError: false,
};

export default Input;
