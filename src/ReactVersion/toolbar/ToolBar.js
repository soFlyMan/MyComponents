import React, { Component } from 'react'
import './_mixin.scss'
import './toolbar.scss'
import { Link } from 'react-router-dom'

class ToolBar extends Component {
  render() {
    return (
        <div className="toolbar">
          <Link to="/test">test</Link>
            <a className="toolbar-item toolbar-item-weixin">
              <span className="toolbar-layer"></span>
            </a>
            <a className="toolbar-item toolbar-item-feedback"></a>
            <a className="toolbar-item toolbar-item-app">
              <span className="toolbar-layer"></span>
            </a>
            <a onClick={this.backTop} className="toolbar-item toolbar-item-top"></a>
        </div>
    )
  }
}

export default ToolBar
