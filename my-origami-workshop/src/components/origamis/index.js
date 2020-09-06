import React from 'react';
import Origami from '../../components/origami/index';

import styles from './index.module.css';

class Origamis extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            origamis: []
        };
    };
//There is a bug about indexes of origamis - indexes are not original but mutated, must be fixed at the rest api!!!!
    getOrigamis = async () => {
        const { length } = this.props;
        const promise = await fetch(`http://localhost:3002/api/origami?length=${length}`);
        const origamis = await promise.json();
        
        this.setState({
            origamis
        });
    };

    renderOrigamis() {
        const {
            origamis
        } = this.state;

        return origamis.map((origami, index) => {
            return (
               <Origami  key={origami._id} index={index + 1} {...origami}/>
            )
        });
    };

    componentDidMount() {
        this.getOrigamis();
    };

    render() {
        return (
            <div className={styles.container}>
                <div className={styles['origamis-wrapper']}>
                    {this.renderOrigamis()}
                </div>
            </div>
        );
    };
};

export default Origamis;