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
    showValues,
  },
) => {
  const selectInputClassnames = classNames({
    [styles.inputContainer]: true,
  });

  const renderOption = (option) => {
    const optionClassnames = classNames({
      [styles.optionContainer]: true,
      [styles.disabled]: option.disabled,
    });

    return (
      <div className={optionClassnames} key={option.label}>
        {option.label}
        {showValues && <span>{option.value}</span>}
      </div>
    );
  };

  return (
    <div className={selectInputClassnames}>
      <Select
        options={options}
        onChange={newValue => onChange(newValue)}
        placeholder={placeholder}
        value={value}
        isDisabled={isDisabled}
        formatOptionLabel={renderOption}
        isOptionDisabled={option => option.disabled}
      />
    </div>
  );
};

SelectInput.propTypes = { ...SelectInputPropTypes };
SelectInput.defaultProps = { ...SelectInputDefaultProps };

export default SelectInput;
