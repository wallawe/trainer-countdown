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
            error: '',
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

        let { email, password } = this.state;

        if (!email && !password) {
            this.setState({ error: 'Please enter your credentials.'});
            return;
        }

        auth.logIn({ email, password }).then(res => {
            auth.setLsUser(res);
            hashHistory.push('clients');
            auth.changeSessionStatus(true);
        }, (err) => {
            this.setState({ error: 'There was an error logging in. Please try again.' });
        });
    }

    render() {
        return (
            <section className="splash">
                <header>Sign In</header>
                <UserForm
                    register={false}
                    email={this.state.email}
                    password={this.state.password}
                    emailChange={this._emailChange.bind(this)}
                    passwordChange={this._pwChange.bind(this)}
                    onSubmit={this._logIn.bind(this)} />
                {this.state.error.length ? <div className="error-msg">{this.state.error}</div> : ''}
                <div className="t-20">
                    <span className="or">or</span>
                    <Link to="/sign-up" className="btn black">Sign Up</Link>
                </div>
            </section>
        )
    }
}