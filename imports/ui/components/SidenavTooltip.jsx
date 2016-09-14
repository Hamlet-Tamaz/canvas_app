import React from 'react'

export default React.createClass({
	render() {
		tooltipStyle = {
			top: this.props.tooltipY,
			left: this.props.tooltipX
		}

		return (
			<div className='sidenav-tooltip' style={tooltipStyle}>
				<p>Data Layer</p>
				<div className='tail'></div>
			</div>
			)
	}
})