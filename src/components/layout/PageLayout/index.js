import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const PageLayout = ({ content }) => (
  <div className={styles.pageContainer}>
    {content}
  </div>
);

PageLayout.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default PageLayout;
