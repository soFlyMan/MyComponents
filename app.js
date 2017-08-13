import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import test from './test.js'
import log from './src/log.js'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './src/ReactVersion/reducer.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import NativeVersion from './src/NativeVersion/NativeVersion.js'
import ReactVersion from './src/ReactVersion/ReactVersion.js'


class App extends Component {
  render() {
    return (
      <div>
        <span>It's my components library</span>
        <ul>
          <li><NativeVersion /></li>
          <li><ReactVersion /></li>
        </ul>
      </div>

    )
  }
}

const middleware = applyMiddleware(createLogger,thunkMiddleware)
const store = createStore(reducer,middleware)

store.dispatch({type: 'ADD'})
log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
