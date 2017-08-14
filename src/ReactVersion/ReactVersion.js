import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import ToolBar from './toolbar/ToolBar.js'
import Test from './toolbar/Test.js'


export default class ReactVersion extends Component {
  render() {
    return (
    <Router>
      <div>
        <Link to="/">首页</Link>
        <h2>React Version Components</h2>
        <Link to="/toolbar">ToolBar</Link>
        <Link to="test">test</Link>
        <Route exact path="/toolbar" component={ToolBar}/>
        <Route exact path="/Test" component={Test}/>
      </div>
    </Router>
    )
  }
}
