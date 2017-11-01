import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import test from './test.js'
import log from './src/log.js'
import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './src/reducer.js'
import './reset.scss'
import './markdown.scss'
import NoMatch from './NoMatch.js'

import Home from './src/Home.js'
import Blog from './src/blog/Blog.js'
import TimeManage from './src/TM/TimeManage.js'
import Guide from './src/Guide/Guide.js'
import Admin from './src/admin/Admin.js'



const middleware = applyMiddleware(createLogger, thunkMiddleware)
const store = createStore(reducer, middleware)


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div style={{width: "100%", height: "100%"}}>
          <Route exact path="/" render={() =>
              (<Redirect to="/home" />)
            } />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/tm" component={TimeManage} />
          <Route path="/guide" component={Guide} />
          <Route path="/admin" component={Admin} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  </Provider>, document.getElementById('root'))
