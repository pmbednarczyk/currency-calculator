import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Button = (
  {
    data,
    onClick,
  },
) => {
  const listItemClassnames = classNames({
    [styles.listItem]: true,
  });

  return (
    <li className={listItemClassnames} onClick={onClick}>
      {data}
    </li>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default Button;
