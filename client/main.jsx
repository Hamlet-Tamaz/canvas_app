import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';


// import App from '/imports/ui/components/App.jsx'
import {AppRoutes} from '/imports/startup/client/router'


// var AppRoutes = ({
// 	render: <div>
// 		Hello World
// 	</div>
// 	})

// var AppRoutes = React.createClass({
//   render: function () {
//     return <h1>Hello world</h1>;
//   }
// });


Meteor.startup(() => {
  render(AppRoutes(), document.getElementById('app'));
});
 
// import App from '../imports/ui/components/App.jsx';
// import Map from '../imports/ui/components/Map.jsx';
// import Login from '../imports/ui/components/Login.jsx';


 
// Meteor.startup(() => {
//   render(<App />, document.getElementById('app'));
// });
