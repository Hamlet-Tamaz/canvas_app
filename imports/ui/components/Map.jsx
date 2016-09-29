import React from 'react'
import Sidenav from './Sidenav.jsx'
import CentralDiv from './CentralDiv.jsx'
import Toolbar from './Toolbar.jsx'
import CampBox from './CampBox.jsx'



export default React.createClass({
 //  componentDidMount: function() {
	// map = new google.maps.Map(document.getElementById('map'), {
	//   center: {lat: -34.397, lng: 150.644},
	//   zoom: 8
	// });	
	// debugger
 //  },
	
	getInitialState: function() {
		return {
			title:'Campaign Title',
			text:'A short description goes here'
		}
	},

	
  render: function() {

	var CB_style = {
		margin: '0 auto',
		marginTop: '13px',
		marginBottom: '13px'

	}
	// var map;

	return (
			// <div id='map'></div>
		<div>

			<Toolbar /> 
			
			<CampBox title={this.state.title} text={this.state.text} img={this.state.img} style={CB_style} />

			<CentralDiv />
		</div>
	)

  }
})
