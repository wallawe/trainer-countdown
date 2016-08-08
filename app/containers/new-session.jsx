import React from 'react';
import { Link } from 'react-router';

import PinNumber from '../components/pin-number';

export default class NewSession extends React.Component {
    render() {
        return (
            <section className="new-session">
                <header>New Session</header>
                <label className="label-text">
                    Trainer PIN
                    <PinNumber />
                </label>

                <label className="label-text">
                    Client PIN
                    <PinNumber />
                </label>

                <div className="align-bottom">
                    <button className="btn purple">Start!</button>
                    <Link to="/home" className="btn gray">Cancel</Link>
                </div>
            </section>
        )
    }
}