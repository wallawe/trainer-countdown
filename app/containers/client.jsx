import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Client extends Component {
    render() {
        return (
            <section className="client-details">
                <header>{this.props.params.id}</header>
                <main>
                    <div className="remaining">
                        12 <br />
                        <h4>sessions remaining</h4>
                        <Link to={`/clients/${this.props.params.id}/new-session`} className="btn purple top-20">Start New Session!</Link>
                    </div>
                </main>
                <div className="align-bottom">
                    <Link to={`clients/${this.props.params.id}/edit`} className="btn gray">Edit / Add Sessions</Link>
                    <button className="btn red">Remove Client</button>
                </div>
            </section>
        )
    }
}