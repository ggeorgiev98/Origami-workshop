import React, { Component } from "react";
import SubmitButton from "../../components/button/submit-button";
import Title from "../../components/title";
import PageWrapper from "../../components/page-wrapper";
import Input from "../../components/input";
import WarningMessage from "../../components/warning";
import authenticate from '../../utils/authenticate';
import styles from './index.module.css';
import UserContext from "../../Context";

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: "",
            password: "",
            rePassword: ""
        };

    };

    static contextType = UserContext;
    
    handleSubmit = async (e) => {
        e.preventDefault();

        const {
            username,
            password,
            rePassword
        } = this.state;

        await authenticate('http://localhost:3002/api/user/register', {
            username,
            password
        }, (user) => {

            this.context.logIn(user)
            this.props.history.push('/');
        }, (e) => {
            console.log("error", e);
        });
    };

    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;

        this.setState(newState);
    };

    render() {
        const {
            username,
            password,
            rePassword
        } = this.state;

        return (
            <PageWrapper>
                <form className={styles.container} onSubmit={this.handleSubmit}>
                    
                    <Title title="Register" />
                    <Input value={username}
                        onChange={(e) => this.onChange(e, 'username')}
                        label="Username"
                        id='username'
                    />
                    <Input value={password}
                        onChange={(e) => this.onChange(e, 'password')}
                        label="Password"
                        id='password'
                        type="password"
                    />
                    <Input value={rePassword}
                        onChange={(e) => this.onChange(e, 'rePassword')}
                        label="Re-Password"
                        id='re-password'
                        type="password"
                    />
                    <SubmitButton title="Register" />
                </form>
            </PageWrapper>
        );
    };
};

export default RegisterPage;