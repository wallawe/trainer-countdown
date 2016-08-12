import React, { Component } from 'react';
import { hashHistory, Link } from 'react-router';
import auth from '../api/auth';

// one time requirement at top level component
require("../style.scss");

export default class Main extends Component {

    constructor() {
        super();

        this.state = {
            loggedIn: false,
            currentUser: {}
        }
    }

    updateAuth(loggedIn) {
        this.setState({
            loggedIn: loggedIn
        })
    }

    componentWillMount() {
        auth.changeSessionStatus = this.updateAuth.bind(this);
        auth.getCurrentUser().then(res => {
            if (res && res.user) {
                this.setState({
                    loggedIn: true,
                    currentUser: res.user,
                });
            }
        });
    }

    render() {
        return (
            <div className="container">
                <Navigation loggedIn={this.state.loggedIn} />
                { this.props.children }
            </div>
        )
    }
}

class Navigation extends Component {
    _logOut(e) {
        e.preventDefault();

        auth.logOut().then(res => {
            auth.changeSessionStatus(false);
            hashHistory.push('/')
        });
    }

    render() {
        return (
            <nav className="navigation">
                <i className="fa fa-bars"></i>
                { this.props.loggedIn
                    ?
                    <div>
                        <a href="" onClick={this._logOut.bind(this)}>Log Out</a><br/>
                        <Link to="/clients">Clients</Link>
                    </div>
                    :
                    ''
                }
            </nav>
        )
    }
}