import React from 'react';
import Slider from 'react-rangeslider';
import PinNumber from './pin-number';

export default class AddClient extends React.Component {

    render() {
        return (
            <section className="add-client">
                <header>New Client</header>

                <form>

                    <label className="label-text">
                        Name
                        <input type="text" className="input-text" />
                    </label>

                    <SessionsSlider labelText="Number of Sessions"/>

                    <label className="label-text">
                        Client PIN (<span className="lowercase">4 digits</span>)
                        <PinNumber />
                    </label>

                    <input type="submit" className="purple-btn bottom-btn" value="Save" />
                </form>

            </section>
        )
    }
}

class SessionsSlider extends React.Component  {
    constructor() {
        super();
        this.state = {
            sessions: 10
        }
    }

    handleChange(value) {
        this.setState({
            sessions: value
        })
    }

    render() {
        return (
            <div>
                <label className="label-text">{this.props.labelText}: {this.state.sessions}</label>
                <Slider
                    min={1}
                    max={50}
                    step={1}
                    value={this.state.sessions}
                    orientation="horizontal"
                    onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}