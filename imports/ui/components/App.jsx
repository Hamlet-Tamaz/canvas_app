import React from 'react'
import Toolbar from './Toolbar.jsx'

export default React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})
