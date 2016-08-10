import React from 'react';
import { Link } from 'react-router';

import PinNumber from '../components/pin-number';

export default class NewSession extends React.Component {
    render() {
        return (
            <section className="new-session">
                <header>
                    <h1>Let's get it!</h1>
                    <h2>Start a new session for {this.props.client}</h2>
                </header>

                <label className="label-text">
                    Trainer PIN
                    <PinNumber />
                </label>

                <i className="fa fa-bolt fa-5x"></i>

                <label className="label-text">
                    Client PIN
                    <PinNumber />
                </label>

                <div className="align-bottom">
                    <button className="btn purple b-5">Begin</button>
                    <Link to="/clients" className="btn gray">Cancel</Link>
                </div>
            </section>
        )
    }
}