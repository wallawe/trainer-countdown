import React, { Component } from 'react';

export default class SuccessMsg extends Component {
    render() {
        return (
            <div className={ this.props.show ? 'visible success-msg' : 'success-msg'}>
                <i className="fa fa-check"></i>
            </div>
        )
    }
}