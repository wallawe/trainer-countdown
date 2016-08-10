import React from 'react';
import { Link } from 'react-router';

export default class Splash extends React.Component {
    render() {
        return (
            <section>
                <a href="/auth/v1/facebook/connect">Sign Up with Facebook</a><br/><br/>
                <Link to="/log-in">Log In</Link><br/><br/>
                <Link to="/clients">Clients</Link><br/><br/>
            </section>
        )
    }
}