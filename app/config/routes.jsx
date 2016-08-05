import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, Link, hashHistory } from 'react-router';
import Home from '../components/home';
import Main from '../components/main';
import LogIn from '../components/log-in';
import SignUp from '../components/sign-up';
import Splash from '../components/splash';
import AddClient from '../components/add-client';


let routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
            <IndexRoute component={Splash} />
            <Route path="log-in" component={LogIn} />
            <Route path="sign-up" component={SignUp} />
            <Route path="home" component={Home} />
            <Route path="add-client" component={AddClient} />
		</Route>
	</Router>
)

export default routes;