import React from 'react';
import { Link, hashHistory } from 'react-router';
import auth from '../api/auth';
import PinNumber from '../components/pin-number';
import { getClient, updateClient } from '../api/clients';

export default class NewSession extends React.Component {
    constructor() {
        super();

        this.state = {
            trainerPinCorrect: false,
            clientPinCorrect: false,
            currentUser: {},
            client: {},
            loading: false,
            success: false
        }
    }

    componentWillMount() {
        auth.getLsUser().then(user => {
            this.setState({ currentUser: user });
        });

        getClient(this.props.params.id).then(client => {
            this.setState({client: client.data[0] });
        });

    }

    _trainerPinChange(e) {
        let enteredPin = parseInt(e.target.value);
        let trainerPin = parseInt(this.state.currentUser.pinNumber);//2342

        if (enteredPin === trainerPin) {
            this.setState({ trainerPinCorrect: true });
        } else {
            this.setState({ trainerPinCorrect: false });
        }
    }

    _clientPinChange(e) {
        let enteredPin = parseInt(e.target.value);
        let clientPin = parseInt(this.state.client.pin);//7948

        if (enteredPin === clientPin) {
            this.setState({ clientPinCorrect: true });
        } else {
            this.setState({ clientPinCorrect: false });
        }
    }

    _submitForm(e) {
        if (this.state.clientPinCorrect && this.state.trainerPinCorrect) {
            this.setState({ loading: true });
            let sessionsRemaining = this.state.client.sessionsRemaining - 1;

            updateClient(this.state.client.id, { sessionsRemaining }).then(res => {
                this.setState({success: true, loading: false });
                setTimeout(() => {
                    hashHistory.push('clients');
                }, 1000)
            });

        } else {
            alert('Both PINs must be entered correctly.');
        }
    }


    render() {
        return (
            <section className="new-session">
                <header>
                    <h1>Let's get it!</h1>
                    <h2>Start a new session for {this.state.client.name }</h2>
                </header>

                <label className="label-text">
                    Trainer PIN
                    <PinNumber changePin={this._trainerPinChange.bind(this)} greenlight={this.state.trainerPinCorrect} />
                </label>

                <div className="center-items">
                    <i className={(this.state.clientPinCorrect && this.state.trainerPinCorrect) ? 'fa fa-bolt fa-5x green' : 'fa fa-bolt fa-5x'}></i>
                </div>

                <label className="label-text">
                    Client PIN
                    <PinNumber changePin={this._clientPinChange.bind(this)} greenlight={this.state.clientPinCorrect} />
                </label>


                <div className="align-bottom">
                    <button className="btn purple b-5" onClick={this._submitForm.bind(this)}>
                        { this.state.success
                            ?
                            <i className="fa fa-check"></i>
                            :
                            'Begin'
                        }

                        { this.state.loading ? <i className="fa fa-spinner fa-spin"></i> : '' }
                    </button>
                    <Link to="/clients" className="btn plain">
                        <i className="fa fa-chevron-left"></i> Back
                    </Link>
                </div>
            </section>
        )
    }
}