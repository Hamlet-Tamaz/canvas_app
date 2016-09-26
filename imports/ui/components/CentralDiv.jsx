import React from 'react'

export default React.createClass({
	handleClick: function(e) {
		console.log('this: ', this, 'e: ', {...e})
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