import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../components/layout/PageLayout';
import Button from '../../components/ui/Button';

const CONVERTER_URL = '/converter';

const Home = ({ history }) => {
  useEffect(() => {
    document.body.classList.add('animatedBg');

    return () => {
      document.body.classList.remove('animatedBg');
    };
  });

  const content = (
    <>
      <h1>Ladies and gentlemen...</h1>
      <p>I would like to present you the currencies converter!</p>
      <Button
        raiseOnInteraction
        primary
        onClick={() => history.push(CONVERTER_URL)}
      >
        SEE THE DEVICE
      </Button>
    </>
  );

  return (
    <PageLayout content={content} />
  );
};

Home.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Home;
