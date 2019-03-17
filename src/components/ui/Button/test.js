import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

it('renders without crashing (only required props passed)', () => {
  shallow(<Button onClick={() => {}}><span>Click me!</span></Button>);
});

it('renders without crashing (all props passed)', () => {
  shallow(
    <Button
      onClick={() => {}}
      disabled
      fullWidth
      primary
      raiseOnInteraction
    >
      <span>Click me!</span>
    </Button>,
  );
});
