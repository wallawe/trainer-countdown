import React from 'react';

// one time requirement at top level component
require("../style.scss");

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to Main</h1>
                {this.props.children}
            </div>
        )
    }
}