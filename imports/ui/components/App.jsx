import React from 'react'
import Toolbar from './Toolbar.jsx'

export default React.createClass({
  handleClick(e) {
	console.log('e: ', e)
  },
  
  componentDidMount() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  }); 
  debugger
  },


  render() {
    
    var map;

    // function initMap() {
    //   map = new google.maps.Map(document.getElementById('map1'), {
    //     center: {lat: -34.397, lng: 150.644},
    //     zoom: 8
    //   }); 
    // }
      // debugger
    
    return (
      <div>
        <div id="map"></div>
        {this.props.children}
      </div>
    )
  }
})
      	// <Toolbar onClick={this.handleClick} />
