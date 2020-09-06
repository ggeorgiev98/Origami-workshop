import React from 'react';
import styles from './index.module.css';

const WarningMessage = ({ message }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.message}>{ message }</h1>
        </div>
    );
};

export default WarningMessage;