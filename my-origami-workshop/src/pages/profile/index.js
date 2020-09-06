import React, { Component } from 'react';
import PageWrapper from '../../components/page-wrapper';
import Origamis from '../../components/origamis';
import UserContext from '../../Context';

//import styles from './index.module.css';

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            posts: null
        }
    };

    static contextType = UserContext;

    componentDidMount() {
        this.getUser(this.props.match.params.userId);
    };

    getUser = async (id) => {
        const response = await fetch(`http://localhost:3002/api/user?id=${id}`);
        if(!response.ok) {
            this.props.history.push('/error')
        }

        const user = await response.json();

        this.setState({
            username: user.username,
            posts: user.posts && user.posts.length
        });
    };

    logOut = () => {
        this.context.logOut();
        
        this.props.history.push('/');
    }

    render() {
        const {
            username,
            posts
        } = this.state;
        
        if(!username) {
            return (
                <PageWrapper>
                    <h1>Loading...</h1>
                </PageWrapper>
            );
        };

        return (
            <PageWrapper>
                <p>User: {username}</p>
                <p>Posts: {posts}</p>
                <button onClick={this.logOut}>Logout</button>
                <Origamis length={3} />
            </PageWrapper>
        );
    };
};

export default ProfilePage;