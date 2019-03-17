import React from 'react';
import { shallow } from 'enzyme';
import ComboBox from '.';

it('renders without crashing', () => {
  shallow(<ComboBox
    selectInput={{}}
    input={{}}
  />);
});
