import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import test from './test.js'
import log from './src/log.js'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './src/reducer.js'
import { loadState, saveState } from './localStorage'

import './reset.scss'
import './markdown.scss'

import NoMatch from './nomatch/NoMatch'
import Home from './src/Home'
import Blog from './src/blog/Blog'
import TimeManage from './src/TM/TimeManage'
import Guide from './src/Guide/Guide'
import Admin from './src/admin/Admin'
import CoreWords from './src/words/CoreWords'



const middleware = applyMiddleware(createLogger, thunkMiddleware)
const store = createStore(reducer, middleware)

store.subscribe(() => {
  saveState(store.getState())
})

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
          <Route exact path="/tm" component={TimeManage} />
          <Route exact path="/guide" component={Guide} />
          <Route path="/admin" component={Admin} />
          <Route exact path = "/corewords" component={CoreWords} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  </Provider>, document.getElementById('root'))
