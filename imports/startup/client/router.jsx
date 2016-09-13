import React from 'react';
import { Router, Route, Redirect, browserHistory} from 'react-router';

import App from '/imports/ui/components/App'
import Map from '/imports/ui/components/Map'
import Login from '/imports/ui/components/Login'



export const AppRoutes = () => (
	<Router history={browserHistory}>
		<Route path='app' component={App}>
			<Route path="/" component={Map}/>
			<Route path="login" component={Login}/>
		</Route>
	</Router>
)

