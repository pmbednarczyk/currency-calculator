import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageLayout from '../../components/layout/PageLayout';
import { loadCurrencies } from '../../redux/modules/currencies';
import styles from './styles.module.scss';

class Converter extends Component {
  componentDidMount() {
    this.props.loadCurrencies();
  }
  render () {
    const content = (
      <div className={styles.converterContainer}>
        <div className={styles.screenContainer}>
        </div>
      </div>
    )

    return (
      <PageLayout content={content} />
    )
  }
}

export default connect(({ currencies }) => ({ currencies }), {
  loadCurrencies,
})(Converter);
