import React, { Component } from "react";
import SubmitButton from "../../components/button/submit-button";
import Title from "../../components/title";
import PageWrapper from "../../components/page-wrapper";
import Input from "../../components/input";
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context'

import styles from './index.module.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };

    };

    static contextType = UserContext;

    handleChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;

        this.setState(newState);
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        
        const {
            username,
            password
        } = this.state;

        await authenticate('http://localhost:3002/api/user/login', {
            username,
            password
        }, (user) => {
            this.context.logIn(user)
            this.props.history.push('/');
        }, (e) => {
            console.log("error", e);
        });
    };

    render() {
        const {
            username,
            password
        } = this.state;

        return (

            <PageWrapper>
                <form className={styles.container} onSubmit={this.handleSubmit}>
                    <Title title="Login" />
                    <Input
                        onChange={(e) => this.handleChange(e, 'username')}
                        value={username}
                        label="Username"
                        id='username'
                    />
                    <Input value={password}
                        type="password"
                        value={password}
                        onChange={(e) => this.handleChange(e, 'password')}
                        label="Password"
                        id='password'
                    />
                    <SubmitButton title="Login" />
                </form>
            </PageWrapper>
        );
    };
};

export default LoginPage;