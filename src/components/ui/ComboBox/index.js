import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SelectInput from '../SelectInput';
import Input from '../Input';
import InputPropTypes, { InputDefaultProps } from '../Input/shapes';
import SelectInputPropTypes, { SelectInputDefaultProps } from '../SelectInput/shapes';

import styles from './styles.module.scss';

const ComboBox = (
  {
    selectInput,
    input,
  },
) => {
  const comboBoxClassnames = classNames({
    [styles.comboBoxContainer]: true,
  });

  return (
    <div className={comboBoxClassnames}>
      <div className={styles.selectWrapper}>
        <SelectInput {...selectInput} />
      </div>
      <div className={styles.inputWrapper}>
        <Input {...input} />
      </div>
    </div>
  );
};

ComboBox.propTypes = {
  selectInput: PropTypes.shape(SelectInputPropTypes),
  input: PropTypes.shape(InputPropTypes),
};

ComboBox.defaultProps = {
  selectInput: SelectInputDefaultProps,
  input: InputDefaultProps,
};

export default ComboBox;
