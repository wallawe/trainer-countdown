import React from 'react';
import { Link } from 'react-router';
import { logOut, getCurrentUser } from '../api/user';
import UserForm from '../components/user-form';

export default class Splash extends React.Component {
    constructor() {
        super();

        this.state = {
            loggedIn: false,
            currentUser: {}
        }
    }

    componentWillMount() {
        getCurrentUser().then(res => {
            if (res && res.user) {
                this.setState({
                    loggedIn: true,
                    currentUser: res.user
                })
            }
        });
    }

    _logOut(e) {
        e.preventDefault();
        logOut().then(res => {
            this.setState({
                loggedIn: false,
                currentUser: {}
            })
        })
    }


    render() {
        return (
            <section>
                <header>Sign In</header>
                {this.state.loggedIn
                    ?
                    <div>
                        <a href="" onClick={this._logOut.bind(this)}>Log Out</a><br/>
                        <Link to="/clients">Clients</Link>
                    </div>
                    :
                    <div>
                        <Link to="/sign-up">Sign Up</Link>
                        <UserForm />
                    </div>
                }
            </section>
        )
    }
}