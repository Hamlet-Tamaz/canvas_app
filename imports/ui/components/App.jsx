import React from 'react'
import Toolbar from './Toolbar.jsx'

export default React.createClass({
  handleClick(e) {
	console.log('e: ', e)
  },

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})
      	// <Toolbar onClick={this.handleClick} />
