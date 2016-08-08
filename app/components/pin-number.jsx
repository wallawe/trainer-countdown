import React, { Component } from 'react';

export default class PinNumber extends Component {
    constructor() {
        super();

        this.state = { pin: '' }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let pinLength = e.target.value.length;

        if (pinLength < 5) {
            this.setState({ 
                pin: e.target.value
            })
        }
    }

    render() {
        return (
            <div className="pin-holder">
                <input 
                    type="password" 
                    max="4" 
                    min="4" 
                    onChange={this.handleChange} 
                    value={this.state.pin}
                    className="pin-input" />
            </div>
        )
    }
}