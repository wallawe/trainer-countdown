import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import SessionSlider from '../components/session-slider';
import { getClient, updateClient } from '../api/clients';
import SuccessMsg from '../components/success-msg';

export default class EditClient extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            sessionsRemaining: '',
            id: '',
            success: false
        }
    }

    componentWillMount() {
        getClient(this.props.params.id).then(res => {
            let { name, sessionsRemaining, _id } = res.data[0];
            this.setState({ name, sessionsRemaining, _id });
        });
    }

    _changeSessions(val) {
        this.setState({ sessionsRemaining: val });
    }

    _changeName(e) {
        this.setState({ name: e.target.value });
    }

    _submitForm(e) {
        e.preventDefault();
        let { _id, name, sessionsRemaining } = this.state;

        if (this.state.name.length) {
            updateClient(this.state._id, { _id, name, sessionsRemaining }).then(res => {
                this.setState({ success: true });

                setTimeout(function() {
                    hashHistory.push('clients');
                }, 1000);
            });
        }
    }

    render() {
        return (
            <section className="edit-client">
                <SuccessMsg show={this.state.success} />
                <header>
                    Edit / Add Sessions
                </header>

                <form onSubmit={this._submitForm.bind(this)}>
                    <label className="label-text">
                        Name
                        <input type="text" className="input-text" onChange={this._changeName.bind(this)} value={this.state.name} />
                    </label>

                    <SessionSlider changeSessions={this._changeSessions.bind(this)} sessions={parseInt(this.state.sessionsRemaining)} />

                    <div className="align-bottom">
                        <input type="submit" className="btn purple b-5" value="Save Changes" />
                        <Link to={`clients/${this.state._id}`} className="btn plain">Back</Link>
                    </div>
                </form>
            </section>
        )
    }
}
