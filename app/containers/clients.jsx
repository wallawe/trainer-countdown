import React, { Component } from 'react';
import { Link } from 'react-router';
import { getClients } from '../api/clients';
import auth from '../api/auth';

export default class Clients extends Component {
    constructor() {
        super();

        this.state = {
            clients: [],
            currentUser: {}
        }
    }

    componentWillMount() {
        auth.getLsUser().then(user => {
            this._getClientsForCurrentUser(user.id);
            this.setState({ currentUser: user });
        })
    }

    render() {
        let { clients } = this.state;

        return (
            <section className="clients">
                <header>Welcome, {this.state.currentUser.firstName}</header>
                <h2>
                    {clients.length} Client{ clients.length != 1 ? 's' : ''}
                </h2>
                <ul className="client-list">
                    { clients.map((client) => <Client name={client.name} sessions={client.sessionsRemaining} id={client._id} key={client._id} /> )}
                </ul>
                <Link to="/clients/new" className="purple btn">
                    <i className="fa fa-plus"></i> add a client
                </Link>
            </section>
        )
    }

    _getClientsForCurrentUser(ownerId) {
        getClients(ownerId).then((response) => {
            this.setState({ clients: response.data });
        });
    }
}

class Client extends Component {
    render() {
        return (
            <li>
                <Link to={`/clients/${this.props.id}`} className="client-info">
                    <span className="person">{ this.props.name }</span>
                    <span className="sessions">{ this.props.sessions } sessions remaining</span>
                </Link>
                <Link to={`/clients/${this.props.id}/new-session`} className="actions">
                    <i className="fa fa-bolt"></i>
                </Link>
            </li>
        )
    }
}