import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import { getClient, removeClient } from '../api/clients';

export default class Client extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            sessionsRemaining: ''
        }
    }

    componentWillMount() {
        this._fetchUser();
    }

    _fetchUser() {
        getClient(this.props.params.id).then((response) => {
            let {name, sessionsRemaining} = response.data[0];

            this.setState({ name, sessionsRemaining });
        })
    }

    _removeClient(e) {
        e.preventDefault();

        if (confirm('Are you sure?')) {
            removeClient(this.props.params.id).then((response) => {

                hashHistory.push('clients');
            });
        }
    }

    render() {
        return (
            <section className="client-details">
                <header>{this.state.name}</header>
                <main>
                    <div className="remaining">
                        {this.state.sessionsRemaining} <br />
                        <h4>sessions remaining</h4>
                        <Link to={`/clients/${this.props.params.id}/new-session`} className="btn purple t-20">Start New Session!</Link>
                    </div>
                </main>
                <div className="align-bottom">
                    <Link to={`clients/${this.props.params.id}/edit`} className="btn gray b-5">Edit / Add Sessions</Link>
                    <button className="btn red" onClick={this._removeClient.bind(this)}>Remove Client</button>
                </div>
            </section>
        )
    }
}