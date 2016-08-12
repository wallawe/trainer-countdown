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
    constructor() {
        super();

        this.state = {
            showMenu: false
        }

        this._toggleMenu = this._toggleMenu.bind(this);
    }

    _toggleMenu() {
        this.setState({ showMenu: !this.state.showMenu });
    }

    _logOut(e) {
        e.preventDefault();

        auth.logOut().then(res => {
            auth.changeSessionStatus(false);
            this.setState({ showMenu: false });
            hashHistory.push('/')
        });
    }

    render() {
        return (
            <nav className="navigation">
                <i className="fa fa-bars" onClick={this._toggleMenu}></i>
                { (this.props.loggedIn && this.state.showMenu)
                    ?
                    <div className="nav-menu">
                        <i className="fa fa-times" onClick={this._toggleMenu}></i>
                        <Link to="/clients" onClick={this._toggleMenu}>Home</Link>
                        <a href="" onClick={this._logOut.bind(this)}>Log Out</a><br/>
                    </div>
                    :
                    ''
                }
            </nav>
        )
    }
}