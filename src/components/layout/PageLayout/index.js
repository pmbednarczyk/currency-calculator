import React, { Component } from 'react';
import styles from './styles.module.scss';

class PageLayout extends Component {
  render() {
    const { content } = this.props;

    return (
      <div className={styles.pageContainer}>
        {content}
      </div>
    );
  }
}

export default PageLayout;
