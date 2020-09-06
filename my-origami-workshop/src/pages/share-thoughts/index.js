import React from 'react'
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import PageWrapper from '../../components/page-wrapper';
import Origamis from '../../components/origamis'
import styles from './index.module.css';
const ShareThoughtsPage = () => {
    return (
        <PageWrapper>
            <div className={styles.container}>
                <Title title="Share your thought's!" />
                <div>
                    <textarea className={styles.text} defaultValue="Publication..." />
                    <SubmitButton title='Post' />
                </div>
                <div>
                    <h2 className={styles['title-post']}>Last 3 post's on your wall</h2>
                </div>
                <div>
                    <Origamis length={3} />
                </div>
            </div>
        </PageWrapper>

    );
}

export default ShareThoughtsPage;