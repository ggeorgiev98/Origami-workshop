import React, { Component } from 'react';
import PageWrapper from '../../components/page-wrapper';
import Title from '../../components/title'
import Origamis from '../../components/origamis'
import UserContext from '../../Context';

import styles from './index.module.css';

class Publications extends Component{

  static contextType = UserContext;
  
    render(){
      console.log(this.context)
      return (         
        <PageWrapper>
            <div className={styles.container}>
                <Title title="Publications"/>
                <div className={styles['origamis-wrapper']}>
                    <Origamis length={20}/> 
                </div>
            </div>
          </PageWrapper>
        );
    }    
};

export default Publications;
