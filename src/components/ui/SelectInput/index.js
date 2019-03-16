import React from 'react';
import classNames from 'classnames';
import Select from 'react-select';

import SelectInputPropTypes, { SelectInputDefaultProps } from './shapes';
import styles from './styles.module.scss';

const SelectInput = (
  {
    onChange,
    options,
    placeholder,
    value,
    isDisabled,
  },
) => {
  const selectInputClassnames = classNames({
    [styles.inputContainer]: true,
  });

  return (
    <div className={selectInputClassnames}>
      <Select
        options={options}
        onChange={newValue => onChange(newValue)}
        placeholder={placeholder}
        value={value}
        isDisabled={isDisabled}
      />
    </div>
  );
};

SelectInput.propTypes = { ...SelectInputPropTypes };
SelectInput.defaultProps = { ...SelectInputDefaultProps };

export default SelectInput;
