import React, { Component } from 'react';
import Link from '../link'
import getNavigation from '../../utils/navigation'
import UserContext from '../../Context';

import styles from './index.module.css';

class Footer extends Component {

    static contextType = UserContext;
    render() {
        const {
            loggedIn,
            user
        } = this.context;
        const links = getNavigation(loggedIn, user);

        return (
            <footer className={styles.footer}>
                <div >
                    {
                        links.map((foot, index) => {
                            return (
                                <Link 
                                    href={foot.link} 
                                    title={foot.title} 
                                    type='footer' 
                                    key={index} 
                                />
                            )})
                    }
                </div>
                <p className={styles.paragraph}>Software University 2020</p>
            </footer>
        );
    }
};

export default Footer; 