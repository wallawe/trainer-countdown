import React, {Component} from 'react';
import UserForm from '../components/user-form';
import auth from '../api/auth';
import { hashHistory } from 'react-router';

export default class SignUp extends Component {

    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            pinNumber: ''
        }
    }

    _nameChange(e) {
        this.setState({
            displayName: e.target.value
        });
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

    _pinChange(e) {
        let pin = e.target.value

        if (pin.length < 5) {
            this.setState({
                pinNumber: pin
            });
        }
    }

    _submitForm(e) {
        e.preventDefault();

        let { displayName, email, password, pinNumber} = this.state;

        if (!displayName || !email || !password || !pinNumber ) {
            alert('Please enter all fields');
            return;
        }

        let firstName = this._getFirstName(displayName);
        console.log(firstName);

        let data = {
            displayName,
            email,
            password,
            pinNumber,
            firstName
        }

        auth.signUp(data).then(res => {
            auth.setLsUser(res);
            hashHistory.push('clients');
            auth.changeSessionStatus(true);
        });

    }

    _getFirstName(str) {
        if (str.indexOf(' ') === -1) {
            return str;
        } else {
            return str.substr(0, str.indexOf(' '));
        }
    }

    render() {
        return (
            <section>
                <header>Sign up</header>
                <UserForm
                    register={true}
                    name={this.state.displayName}
                    email={this.state.email}
                    password={this.state.password}
                    pin={this.state.pinNumber}
                    emailChange={this._emailChange.bind(this)}
                    passwordChange={this._pwChange.bind(this)}
                    nameChange={this._nameChange.bind(this)}
                    pinChange={this._pinChange.bind(this)}
                    onSubmit={this._submitForm.bind(this)} />
            </section>
        )
    }
}