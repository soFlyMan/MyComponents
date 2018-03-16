import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducer'
import { loadState, saveState } from './localStorage'

import './reset.scss'
import './markdown.scss'

import NoMatch from './nomatch/NoMatch'
import Home from './Home'
import Blog from './blog/Blog'
import TimeManage from './TM/TimeManage'
import Guide from './Guide/Guide'
// import Admin from './admin/AdminLogin'
import CoreWords from './words/CoreWords'



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
          <Route exact path = "/corewords" component={CoreWords} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  </Provider>, document.getElementById('root'))
