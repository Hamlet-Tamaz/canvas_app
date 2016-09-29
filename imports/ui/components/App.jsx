import React from 'react'
import Toolbar from './Toolbar.jsx'

export default React.createClass({
  handleClick(e) {
	console.log('e: ', e)
  },
  
  componentDidMount() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.7749, lng: -122.4194},
    zoom: 12
  }); 
  },


  render() {   
    return (
      <div>
        <div id="map"></div>
        {this.props.children}
      </div>
    )
  }
})
      	// <Toolbar onClick={this.handleClick} />
