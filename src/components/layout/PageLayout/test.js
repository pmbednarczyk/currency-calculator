import React from 'react';
import { shallow } from 'enzyme';
import PageLayout from '.';

it('renders without crashing (single node passed)', () => {
  shallow(<PageLayout content={<div />} />);
});

it('renders without crashing (array of nodes passed)', () => {
  shallow(
    <PageLayout content={[
      <div key="div" />,
      <p key="p" />,
      <article key="article" />,
    ]}
    />,
  );
});

it('renders without crashing (is loading)', () => {
  shallow(<PageLayout isLoading content={<div />} />);
});
