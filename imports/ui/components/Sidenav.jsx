import React from 'react'

export default React.createClass({
	render() {
		let iconList = [
		    "fa fa-database",
		    "fa fa-user-plus",
		    "fa fa-users",
		    "fa fa-bicycle",
		    "fa fa-list-ul",
		    "fa fa-lightbulb-o",
		    "fa fa-list-ol",
		    "fa fa-line-chart",
		    "fa fa-cog"
	  	]

		let list = iconList.map((item) => {
		  return (
		    <li key={item} className="sidenav-list-item">
		      <i className={item}></i>
		    </li>
		  )
		})
		
	    return (
		  <nav className="sidenav">
		    <ul className="sidenav-list">
		      {list}
		    </ul>
		  </nav>
		)
	}
})