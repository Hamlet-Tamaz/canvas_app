import React from 'react';
import { Router, Route, Redirect, browserHistory} from 'react-router';

import App from '/imports/ui/components/App'
import Map from '/imports/ui/components/Map'
import Login from '/imports/ui/components/Login'
import CampainList from '/imports/ui/components/CampaignList'
import Test from '/imports/ui/components/Test'



export const AppRoutes = () => (
	<Router history={browserHistory}>
		<Route component={App}>
			<Route path="/" component={Map}/>
			<Route path="/login" component={Login}/>
			<Route path="/campainList" component={CampainList}/>
			<Route path="/test" component={Test}/>
		</Route>
	</Router>
)

