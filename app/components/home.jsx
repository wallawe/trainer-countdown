import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
    render() {
        return (
            <section className="home">
                <header>Welcome, Kareem</header>
                <h2>8 Clients</h2>
                <ul className="client-list">
                    <Client />
                    <Client />
                    <Client />
                    <Client />
                </ul>
                <Link to="/add-client" className="purple btn">+ add a client</Link>
            </section>
        )
    }
}

class Client extends React.Component {
    render() {
        return (
            <li>
                <Link to="/clients/Will" className="client-info">
                    <span className="person">Trey Anastasio</span>
                    <span className="sessions">22 sessions remaining</span>
                </Link>
                <Link to="/clients/Will/new-session" className="actions">
                    <i className="fa fa-play"></i>
                </Link>
            </li>
        )
    }
}