import React from 'react';
import OCsign from './OCsign.jsx'
import AccountSign from './AccountSign.jsx'

export default React.createClass({
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.id !== this.props.id
	},
	render() {
		let iconList = [
		    // "fa fa-user",
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
		  else {
		  	return (
			    <li key={item} className="sidenav-list-item">
			      <i className={item}></i>
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