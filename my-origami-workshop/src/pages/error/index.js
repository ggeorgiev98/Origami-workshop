import React from 'react';
import PageWrapper from '../../components/page-wrapper';
import styles from './index.module.css';

const ErrorPage = () => {
    return (
        <PageWrapper>
            <div className={styles.container}>
                <h1>Something went wrong...</h1>
                <img src="./error.png" className={styles.errorImg}></img>
            </div>
        </PageWrapper>
    );
};

export default ErrorPage;