import React from 'react'

export default React.createClass({
	// constructor() {
	// 	super();
	// 	this.state={active: false}
	// 	console.log('this:', this)
	// }

	handleClick(e) {
		debugger
		alert('hi')
		console.log('e: ', e)
	},
	
	handleHover(e) {
		
	},

	render(){
		console.log('this: ', this)
		return (
			<div >

				<div className='S2' onMouseOver={this.props.onClick} onClick={this.handleClick}>
					<h1>{this.props.name}</h1>
				</div>
			</div>
		)
	}
})