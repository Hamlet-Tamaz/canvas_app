import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))