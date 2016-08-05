import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, Link, hashHistory } from 'react-router';
import Home from '../components/Home';
import Main from '../components/Main';


let routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
            <IndexRoute component={Home} />
		</Route>
	</Router>
)

export default routes;