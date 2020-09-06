import React from 'react';
import Header from '../header/index';
import Aside from '../aside/index';
import Footer from '../footer/index';
import styles from './index.module.css';

const PageWrapper = ( props ) => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <div className={styles['inner-container']}>
          {props.children}
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default PageWrapper;
