import React from 'react'

export default React.createClass({
	handleClick: function() {
		console.log('logo clicked')
	},

	render() {
		return (
			<div className='logo' onClick={this.handleClick}>
				<img src="/logo.png"/>
			</div>
		)
	}
})
