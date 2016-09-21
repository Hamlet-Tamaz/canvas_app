import React from 'react'
import Toolbar from './Toolbar.jsx'

export default React.createClass({
  render() {
    return (
      <div>
      	<Toolbar />
        {this.props.children}
      </div>
    )
  }
})
