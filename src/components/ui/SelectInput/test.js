import React from 'react';
import { shallow } from 'enzyme';
import SelectInput from '.';

const options = [{
  label: 'USD',
  value: 1210,
}, {
  label: 'SEK',
  value: 60689,
}, {
  label: 'GBP',
  value: 56,
}, {
  label: 'MXN',
  value: 3200,
}, {
  label: 'THB',
  value: 269200,
  disabled: true,
}];

const renderCustomOption = option => (
  <div key={option.label}>
    {option.label}
  </div>
);


it('renders without crashing (none of props passed)', () => {
  shallow(<SelectInput />);
});

it('renders without crashing (all props passed)', () => {
  shallow(
    <SelectInput
      options={options}
      onChange={() => {}}
      placeholder="Currency"
      isDisabled={false}
      value={options[0]}
      isOptionDisabled={option => option.disabled}
    />,
  );
});

it('renders without crashing (custom option render passed)', () => {
  shallow(
    <SelectInput
      options={options}
      onChange={() => {}}
      placeholder="Currency"
      isDisabled={false}
      value={options[0]}
      isOptionDisabled={option => option.disabled}
      formatOptionLabel={renderCustomOption}
    />,
  );
});
