import React from 'react'
import Sidenav from './Sidenav.jsx'
import CentralDiv from './CentralDiv.jsx'
import Toolbar from './Toolbar.jsx'



export default React.createClass({
  render: function() {

	var a = 'hamlet'
	
	return (
		<div>
			<Toolbar /> 
			<div >This is where the map goes: {a}</div>
			<CentralDiv />
		</div>
	)

  }
})
			// <Sidenav />
