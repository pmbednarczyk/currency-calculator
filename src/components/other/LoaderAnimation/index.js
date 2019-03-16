import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const LoaderAnimation = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className={styles.loader}>
      <div className={styles.loaderDots} />
    </div>
  );
};

LoaderAnimation.defaultProps = {
  isLoading: true,
};

LoaderAnimation.propTypes = {
  isLoading: PropTypes.bool,
};

export default LoaderAnimation;
