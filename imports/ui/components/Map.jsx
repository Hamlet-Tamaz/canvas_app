import React from 'react'
import Sidenav from './Sidenav.jsx'
import OCsign from './OCsign.jsx'
import AccountSign from './AccountSign.jsx'


export default React.createClass({
  render() {

  		var a = 'hamlet'
	 return (
		<div>
			<div >This is where the map goes: {a}</div>
			<Sidenav />
		</div>
	 	)

  }
})
