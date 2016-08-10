import React, { Component } from 'react';
import ClientForm from '../components/client-form';

export default class NewClient extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section className="new-client">
                <header>New Client</header>

                <ClientForm />
            </section>
        )
    }
}