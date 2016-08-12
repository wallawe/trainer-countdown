import React, { Component } from 'react';
import SessionSlider from './session-slider';
import PinNumber from './pin-number';
import { Link, hashHistory } from 'react-router';
import { addClient } from '../api/clients';

export default class ClientForm extends Component {
    constructor() {
        super();

        this.state = {
            clientName: '',
            clientPin: '',
            sessionCount: 0
        }
    }

    _changePin(e) {
        let pin = e.target.value
        if (pin.length < 5) {
            this.setState({ clientPin: pin });
        }
    }

    _changeSessions(val) {
        this.setState({ sessionCount: val });
    }

    _changeName(e) {
        this.setState({ clientName: e.target.value });
    }

    _submitForm(e) {
        e.preventDefault();

        let { clientName, clientPin, sessionCount } = this.state;

        if (!clientName || !clientPin) {
            alert('Please enter all info');
            return;
        }

        addClient({
            name: clientName,
            pin: clientPin,
            sessionsRemaining: sessionCount,
            //user:
        }).then(res => {
            hashHistory.push('clients');
        })
    }

    render() {
        return (
            <form onSubmit={this._submitForm.bind(this)}>
                <label className="label-text">
                    Name
                    <input type="text" className="input-text" onChange={this._changeName.bind(this)} value={this.state.clientName} />
                </label>

                <SessionSlider changeSessions={this._changeSessions.bind(this)} sessions={this.state.sessionCount} />

                <label className="label-text">
                    Client PIN (<span className="lowercase">4 digits</span>)
                    <PinNumber pin={this.state.clientPin} changePin={this._changePin.bind(this)} />
                </label>

                <div className="align-bottom">
                    <input type="submit" className="btn purple bottom-btn b-5" value="Save" />
                    <Link to="/clients" className="btn gray bottom-btn">Cancel</Link>
                </div>
            </form>
        )
    }
}