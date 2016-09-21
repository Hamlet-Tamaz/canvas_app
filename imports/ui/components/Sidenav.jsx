import React from 'react'
import SidenavTooltip from './SidenavTooltip.jsx'
import SidenavIcons from './SidenavIcons.jsx'

const Sidenav = React.createClass({
	getInitialState() {
		return {
			showTooltip: false,
			tooltipX: '50px',
			tooltipY: '0px'
		}
	},

	showTooltip(e) {
	  this.setState({
	    showTooltip: true,
	    tooltipY: e.nativeEvent.target.offsetTop + 
	      (e.nativeEvent.target.offsetHeight / 2) + "px"
	  })
	},

	hideTooltip(e) {
	  this.setState({
	    showTooltip: false
	  })
	},

	render() {
		
	    return (
		  <nav className="sidenav">
		  	<SidenavTooltip 
		  		showTooltip={this.state.showTooltip}
		  		tooltipX={this.state.tooltipX}
		  		tooltipY={this.state.tooltipY}/>
		    <ul className="sidenav-list">
		      <SidenavIcons 
		      	showTooltip={this.showTooltip}
		      	hideTooltip={this.hideTooltip}/>
		    </ul>
		  </nav>
		)
	}
})

export default Sidenav
// debugger
// ReactDOM.render(<Sidenav />, document.body)
