import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../components/layout/PageLayout';
import Button from '../../components/ui/Button';

const CONVERTER_URL = '/converter';

class Home extends Component {
  componentDidMount() {
    document.body.classList.add("animatedBg")
  }

  componentWillUnmount() {
    document.body.classList.remove("animatedBg")
  }

  render () {
    const content = (
      <React.Fragment>
        <h1>Ladies and gentleman...</h1>
        <p>
          I would like to present you currencies converter!
        </p>
        <Button
          raiseOnInteraction
          primary
          onClick={() => this.props.history.push(CONVERTER_URL)}
        >
          SEE THE DEVICE
        </Button>
      </React.Fragment>
    )

    return (
      <PageLayout content={content} />
    )
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired
};

export default Home;