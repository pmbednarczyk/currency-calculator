import React from 'react';
import { shallow } from 'enzyme';
import Input from '.';

it('renders without crashing (none of props passed)', () => {
  shallow(<Input />);
});

it('renders without crashing (all props passed)', () => {
  shallow(
    <Input
      onChange={() => {}}
      isError
      type="text"
      value="Value"
      placeholder="Placeholder text..."
      isDisabled
    />,
  );
});
