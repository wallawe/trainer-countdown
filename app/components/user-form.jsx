import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import PinNumber from './pin-number';

export default class UserForm extends Component {
    constructor() {
        super();
    }

    _submitForm(e) {
        e.preventDefault();
    }

    render() {
        let registerInputs, cancelBtn;

        if (this.props.register) {
            registerInputs = (
                <div className="b-10">
                    <label className="label-text">
                        Name
                        <input type="text" value={this.props.name} onChange={this.props.nameChange} className="input-text" />
                    </label>

                    <label className="label-text">
                        Create a 4-digit PIN
                        <PinNumber pin={this.props.pin} changePin={this.props.pinChange}/>
                    </label>
                </div>
            );

            cancelBtn = <Link to="/" className="btn plain"><i className="fa fa-chevron-left"></i> Back</Link>;
        }

        return (
            <form onSubmit={this.props.onSubmit}>
                { registerInputs }

                <label className="label-text">
                    Email
                    <input type="email" value={this.props.email} onChange={this.props.emailChange} className="input-text"  />
                </label>

                <label className="label-text">
                    Password
                    <input type="password" value={this.props.password} onChange={this.props.passwordChange} className="input-text" />
                </label>

                <div className="align-bottom">
                    <button type="submit" className="btn purple bottom-btn b-5">{ this.props.register ? 'Go!' : 'Sign In' }</button>
                    { cancelBtn }
                </div>
            </form>
        )
    }
}