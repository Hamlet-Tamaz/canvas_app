import React from 'react';
import OCsign from './OCsign.jsx'
import AccountSign from './AccountSign.jsx'


var HoverHandlers = {
  mouseOver: function (e) {
    this.setState({ hover: true });
  },
  mouseOut: function (e) {
    this.setState({ hover: false });
  },
};  

let style = {
	'backgroundColor': ''
}
let hovIcon;


export default React.createClass({
	// shouldComponentUpdate: function(nextProps, nextState) {
	// 	return nextProps.id !== this.props.id
	// },
	getInitialState: function() {
		return {hover: false}
	},
	handleClick: function(e) {
		active=e.target.className += ' active';
	},

	handleHover: function(e) {
 		// console.log('e: ', e)
		this.state.hover ? this.setState( {hover: false}) : this.setState({hover: true})

		!this.state.hover ? style={'backgroundColor': 'black'} : style={'backgroundColor': ''}
		hovIcon = e.target.className
	},
	render: function() {
		let iconList = [
			<AccountSign />,
		    "fa fa-cog",
		    "fa fa-users",
		    "fa fa-bicycle",
		    "fa fa-line-chart",
		    <OCsign />
		    
		    // "fa fa-database",
		    // "fa fa-user-plus",
		    // "fa fa-list-ul",
		    // "fa fa-lightbulb-o",
		    // "fa fa-list-ol",
	  	]
		
		let hover = this.state.hover



		let list = iconList.map((item,i) => {
		  if (i === 0) {
			return (
			    <li key={i}>{item}</li>
			  )
		  }
		  else if (i === iconList.length - 1) {
			return (
				<li key={i}>{item}</li>
			)
		  }
		  else if (item === hovIcon) {
			return (
			    <li key={item} style={style} className="sidenav-list-item">
			      <a href="/test"><i onClick={this.handleClick} onMouseOver={this.handleHover} onMouseOut={this.handleHover} className={item}></i></a>
			    </li>
			)
		  }

		  else {
		  	return (
			    <li key={item} className="sidenav-list-item">
			      <a href="/test"><i onMouseOver={this.handleHover} onMouseOut={this.handleHover} className={item}></i></a>
			    </li>
			)
		  }
		})

		return (
			<div>
				{list}
			</div>
		)
	}
})