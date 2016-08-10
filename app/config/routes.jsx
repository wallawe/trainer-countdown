import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, Link, hashHistory } from 'react-router';
import Clients from '../containers/clients';
import Main from '../components/main';
import LogIn from '../components/log-in';
import SignUp from '../components/sign-up';
import Splash from '../components/splash';
import NewClient from '../containers/new-client';
import Client from '../containers/client';
import NewSession from '../containers/new-session';


let routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
            <IndexRoute component={Splash} />
            <Route path="log-in" component={LogIn} />
            <Route path="sign-up" component={SignUp} />
            <Route path="clients" component={Clients} />
            <Route path="clients/new" component={NewClient} />
            <Route path="clients/:id" component={Client} />
            <Route path="clients/:id/new-session" component={NewSession} />
		</Route>
	</Router>
)

export default routes;