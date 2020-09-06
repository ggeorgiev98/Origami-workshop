import React, { Component } from 'react';
import Link from '../link/index.js';
import getNavigation from '../../utils/navigation.js'
import logo from '../images/white-origami-bird.png';
import UserContext from '../../Context.js';

import styles from './index.module.css';

class Header extends Component {

    static contextType = UserContext;
    render() {

        const {
            loggedIn,
            user
        } = this.context;
        const links = getNavigation(loggedIn, user);
        return (
            <header className={styles.navigation}>
                <img src={logo} className={styles.logo} />
                {
                    links.map((nav, index) => {
                        return (
                            <Link href={nav.link} title={nav.title} type='header' key={index} />
                        );
                    })
                }
            </header>
        );
    }
};

export default Header;