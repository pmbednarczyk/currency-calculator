import React from 'react';
import { shallow } from 'enzyme';
import LoaderAnimation from '.';

it('renders without crashing (is loading)', () => {
  shallow(<LoaderAnimation isLoading />);
});

it('renders without crashing (not loading)', () => {
  shallow(<LoaderAnimation isLoading={false} />);
});

it('renders without crashing (no props passed)', () => {
  shallow(<LoaderAnimation />);
});
