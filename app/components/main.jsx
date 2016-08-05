import React, { Component } from 'react';
import { Link } from 'react-router';

// one time requirement at top level component
require("../style.scss");

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                {this.props.children}
            </div>
        )
    }
}

class Navigation extends Component {
    render() {
        return (
            <nav className="navigation">
                <h1 className="logo">
                    <Link to="/">KREEM</Link></h1>
                <i className="fa fa-bars"></i>
            </nav>
        )
    }
}