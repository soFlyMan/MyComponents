import React, { Component } from 'react'
import Button from '../ReactVersion/Button/Button.js'

class Guide extends Component {
  render() {
    return(
      <div className="guide">
        Button
        <Button>primary</Button><label>'color: #8abee5'</label>
        <Button type="default">default</Button>
      </div>
    )
  }
}

export default Guide
