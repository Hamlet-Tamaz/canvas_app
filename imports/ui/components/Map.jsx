import React from 'react'
import Sidenav from './Sidenav.jsx'
import CentralDiv from './CentralDiv.jsx'



export default React.createClass({
  render() {

  		var a = 'hamlet'
	 return (
		<div>
			<div >This is where the map goes: {a}</div>
			<Sidenav />
			<CentralDiv />
		</div>
	 	)

  }
})
