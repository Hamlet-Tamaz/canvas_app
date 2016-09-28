import React from 'react'
import Sidenav from './Sidenav.jsx'
import CentralDiv from './CentralDiv.jsx'
import Toolbar from './Toolbar.jsx'



export default React.createClass({
 //  componentDidMount: function() {
	// map = new google.maps.Map(document.getElementById('map'), {
	//   center: {lat: -34.397, lng: 150.644},
	//   zoom: 8
	// });	
	// debugger
 //  },


  render: function() {

	var a = 'hamlet'
	// var map;

	return (
			// <div id='map'></div>
		<div>
			
			<Toolbar /> 
			<div >This is where the map goes: {a}</div>
			<CentralDiv />
		</div>
	)

  }
})
