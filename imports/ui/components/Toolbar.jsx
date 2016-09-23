import React from 'react'
import User from './User.jsx'
import Logo from './Logo.jsx'

export default React.createClass({
	render(){
		return(
			<div className="tool_bar">
				<User />

				<div className="menu">
					<div className="tools">
						<img src="/settings.svg"/>
						<p>SETTINGS</p>
					</div>
					<div className="tools">
						<img src="/volunteer.svg"/>
						<p>MANAGE VOLUNTEER</p>
					</div>
					<div className="tools">
						<img src="/dispatch.svg"/>
						<p>DIPATCH</p>
					</div>
					<div className="tools">
						<img src="/data_visual.svg"/>
						<p>DATA VISUAL</p>
					</div>
				</div>
				
				<Logo />
			</div>
		)
	}

})