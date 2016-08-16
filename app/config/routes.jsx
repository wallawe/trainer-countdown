import React from 'react';
import { Router, IndexRoute, Route, Link, hashHistory } from 'react-router';
import Clients from '../containers/clients';
import Main from '../containers/main';
import SignUp from '../containers/sign-up';
import Splash from '../containers/splash';
import NewClient from '../containers/new-client';
import Client from '../containers/client';
import NewSession from '../containers/new-session';
import EditClient from '../containers/edit-client';
import auth from '../api/auth';

function validateAuth(nextState, replace) {
    if (!auth.userLoggedIn()) {
        replace({
            pathname: '/',
            state: { nextPathName: nextState.location.pathname }
        });
    }
}

function requireNothAuthd(nextState, replace) {
    if (auth.userLoggedIn()) {
        replace({
            pathname: '/clients'
        });
    }
}

let routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
            <IndexRoute component={Splash} onEnter={requireNothAuthd} />
            <Route path="sign-up" component={SignUp} onEnter={requireNothAuthd} />
            <Route path="clients" component={Clients} onEnter={validateAuth} />
            <Route path="clients/new" component={NewClient} onEnter={validateAuth} />
            <Route path="clients/:id" component={Client} onEnter={validateAuth} />
            <Route path="clients/:id/edit" component={EditClient} onEnter={validateAuth} />
            <Route path="clients/:id/new-session" component={NewSession} onEnter={validateAuth} />
		</Route>
	</Router>
)

export default routes;