import React, { Component } from 'react';
import Link from '../link';
import getNavigation from '../../utils/navigation'
import UserContext from '../../Context';

import styles from './index.module.css';

class Aside extends Component{


    static contextType = UserContext;

    render () {
        const {
            loggedIn,
            user
        } = this.context;
        const links = getNavigation(loggedIn, user);
        
        return (
            <aside className={styles.container}>
                {
                    links.map((aside, index) => {
                        return (
                            <Link 
                                href={aside.link} 
                                title={aside.title} 
                                type='aside' 
                                key={index} 
                            />
                        )})
                }
            </aside>
        );
    }
};

export default Aside;