import React from 'react';
import classNames from 'classnames';
import Select from 'react-select';

import SelectInputPropTypes, { SelectInputDefaultProps } from './SelectInput.shapes';
import styles from './styles.module.scss';

const SelectInput = (
  {
    onChange,
    options,
    placeholder,
  },
) => {
  const selectInputClassnames = classNames({
    [styles.inputContainer]: true,
  });

  return (
    <div className={selectInputClassnames}>
      <Select
        options={options}
        onChange={value => onChange(value)}
        placeholder={placeholder}
      />
    </div>
  );
};

SelectInput.propTypes = { ...SelectInputPropTypes };
SelectInput.defaultProps = { ...SelectInputDefaultProps };

export default SelectInput;
