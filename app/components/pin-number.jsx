import React, { Component } from 'react';

export default class PinNumber extends Component {

    render() {
        return (
            <div className="pin-holder">
                <input
                    type="password"
                    pattern="[0-9]*"
                    max="4"
                    min="4"
                    onChange={this.props.changePin}
                    value={this.props.pin}
                    className="pin-input" />
            </div>
        )
    }
}