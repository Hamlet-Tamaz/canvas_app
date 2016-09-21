import React from 'react'

export default React.createClass({
	render() {
		return (
				<div className="campbox">
					<img src='/campaign01.png'className="campbox_img"/>
					<div>
						<h1>{this.props.title}</h1>
						<p>{this.props.text}</p>
					</div>
				</div>
			)
	}
})