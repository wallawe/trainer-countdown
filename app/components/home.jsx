import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
    render() {
        return (
            <section className="home">
                <header>Welcome, Kareem</header>    
                <h2>Clients</h2>
                <ul>
                    <li>Jane Doe</li>
                    <li>Jimmy Doe</li>
                    <li>John Doe</li>
                </ul>
            </section>
        )
    }
}