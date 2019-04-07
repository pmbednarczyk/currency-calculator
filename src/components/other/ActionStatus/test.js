import React from 'react';
import { shallow } from 'enzyme';
import ActionStatus from '.';

const successMsg = {
  error: '',
  successMessage: 'Success!',
};

const errorMsg = {
  error: 'Error! ;(',
  successMessage: '',
};

const noneMsg = {
  error: '',
  successMessage: '',
};

it('renders without crashing (successMsg)', () => {
  shallow(<ActionStatus data={successMsg} />);
});

it('renders without crashing (errorMsg)', () => {
  shallow(<ActionStatus data={errorMsg} />);
});

it('renders without crashing (noneMsg)', () => {
  shallow(<ActionStatus data={noneMsg} />);
});
