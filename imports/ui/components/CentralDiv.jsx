import React from 'react'

export default React.createClass({
	handleClick: function() {
		console.log('this: ', this)
		alert('clicked!')
	},

	render: function() {
		return (
			<div className='centralDiv' onClick={this.handleClick}>
				<h1>Welcome to Open Canvassing</h1>
			</div>
		)
	}
})