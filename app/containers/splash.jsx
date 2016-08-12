import React, {Component } from 'react';
import { Link, hashHistory } from 'react-router';
import auth from '../api/auth';
import UserForm from '../components/user-form';

export default class Splash extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        }
    }


    _pwChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    _emailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    _logIn(e) {
        e.preventDefault();

        if (!this.state.email && !this.state.password) {
            alert('Please enter your info');
            return;
        }

        auth.logIn(this.state).then(res => {
            auth.setLsUser(res);
            hashHistory.push('clients');
            auth.changeSessionStatus(true);
        });
    }

    render() {
        return (
            <section>
                <header>Sign In</header>
                <Link to="/sign-up">Sign Up</Link>
                <UserForm
                    register={false}
                    email={this.state.email}
                    password={this.state.password}
                    emailChange={this._emailChange.bind(this)}
                    passwordChange={this._pwChange.bind(this)}
                    onSubmit={this._logIn.bind(this)} />
            </section>
        )
    }
}