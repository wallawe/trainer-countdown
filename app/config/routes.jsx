import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, Link, hashHistory } from 'react-router';
import Home from '../components/home';
import Main from '../components/main';
import LogIn from '../components/log-in';
import SignUp from '../components/sign-up';
import Splash from '../components/splash';
import AlterClient from '../components/alter-client';
import Client from '../containers/client';
import NewSession from '../containers/new-session';


let routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
            <IndexRoute component={Splash} />
            <Route path="log-in" component={LogIn} />
            <Route path="sign-up" component={SignUp} />
            <Route path="home" component={Home} />
            <Route path="clients/:id" component={Client} />
            <Route path="clients/:id/edit" component={AlterClient} />
            <Route path="clients/:id/new-session" component={NewSession} />
            <Route path="add-client" component={AlterClient} />
		</Route>
	</Router>
)

export default routes;