import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.scss';

const ActionStatus = ({ data }) => {
  const { error, successMessage } = data;
  if (!error && !successMessage) return null;

  const actionStatusClassnames = classNames({
    [styles.statusContainer]: true,
    [styles.error]: error,
    [styles.success]: successMessage,
  });

  const status = error || successMessage;

  return (
    <div className={actionStatusClassnames}>
      <p>{status}</p>
    </div>
  );
};

ActionStatus.defaultProps = {
  data: {
    error: '',
    success: '',
  },
};

ActionStatus.propTypes = {
  data: PropTypes.shape({
    error: PropTypes.string,
    successMessage: PropTypes.string,
  }),
};

export default ActionStatus;
