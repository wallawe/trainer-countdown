import React from 'react';
import { Link } from 'react-router';

export default class Splash extends React.Component {
    render() {
        return (
            <section>
                <Link to="/sign-up">Sign Up with Facebook</Link><br/><br/>
                <Link to="/log-in">Log In</Link><br/><br/>
                <Link to="/home">Home</Link><br/><br/>
            </section>
        )
    }
}