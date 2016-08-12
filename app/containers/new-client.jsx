import React, { Component } from 'react';
import ClientForm from '../components/client-form';
import auth from '../api/auth';

export default class NewClient extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: {}
        }
    }

    componentWillMount() {
        auth.getLsUser().then(user => {
            this.setState({ currentUser: user });
        });
    }

    render() {
        return (
            <section className="new-client">
                <header>New Client</header>

                <ClientForm ownerId={this.state.currentUser.id} />
            </section>
        )
    }
}