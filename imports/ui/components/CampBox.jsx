import React from 'react'

export default React.createClass({
	render() {
		return (
				<div style={this.props.style} className="campbox">
					<img src={this.props.img}className="campbox_img"/>
					<div>
						<h1>{this.props.title}</h1>
						<p>{this.props.text}</p>
					</div>
				</div>
			)
	}
})