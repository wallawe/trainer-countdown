import React, { Component } from 'react';

export default class PinNumber extends Component {

    handleChange(e) {
        let pin = e.target.value;

        if (pin.length < 5) {
            this.props.changePin(pin);
        }
    }

    render() {
        return (
            <div className="pin-holder">
                <input
                    type="password"
                    pattern="[0-9]*"
                    max="4"
                    min="4"
                    onChange={this.handleChange.bind(this)}
                    value={this.props.pin}
                    className="pin-input" />
            </div>
        )
    }
}