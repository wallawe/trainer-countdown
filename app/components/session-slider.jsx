import React, { Component } from 'react';
import Slider from 'react-rangeslider';

export default class SessionSlider extends Component  {

    handleChange(val) {
        this.props.changeSessions(val);
    }

    render() {
        return (
            <div>
                <label className="label-text">Sessions: {this.props.sessions}</label>
                <Slider
                    min={1}
                    max={50}
                    step={1}
                    value={this.props.sessions}
                    orientation="horizontal"
                    onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}