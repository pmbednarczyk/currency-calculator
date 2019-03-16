import React from 'react';
import PropTypes from 'prop-types';

import LoaderAnimation from '../../other/LoaderAnimation';

import styles from './styles.module.scss';

const PageLayout = ({ content, isLoading }) => (
  <div className={styles.pageContainer}>
    {isLoading ? <LoaderAnimation isLoading={isLoading} /> : content}
  </div>
);

PageLayout.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  isLoading: PropTypes.bool,
};

PageLayout.defaultProps = {
  isLoading: false,
};

export default PageLayout;
