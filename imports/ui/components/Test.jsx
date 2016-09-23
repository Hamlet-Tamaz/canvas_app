import React from 'react'
import AccountSign from './AccountSign'
import Sidenav from './Sidenav.jsx'
import Sidenav2 from './Sidenav2.jsx'

export default class Test extends React.Component{
	handleClick(e) {
		console.log('test click handle', e)
	}

	render() {
		var me = 'Hamlet'
		console.log('Test.jsx THIS: ', this)
		return (
			<div>
				<Sidenav2 name={me} onClick={this.handleClick}/>
				<h5>AccountSign</h5>
			

			</div>
		)
	}
}