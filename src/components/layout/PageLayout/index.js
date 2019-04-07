import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LoaderAnimation from '../../other/LoaderAnimation';

import styles from './styles.module.scss';

const PageLayout = ({ content, isLoading }) => {
  const pageLayoutClassnames = classNames({
    [styles.pageContainer]: true,
    [styles.fadeInContent]: !isLoading,
  });

  return (
    <div className={pageLayoutClassnames}>
      {isLoading ? <LoaderAnimation isLoading={isLoading} /> : content }
    </div>
  );
};

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
