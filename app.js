import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import test from './test.js'
import log from './src/log.js'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './src/ReactVersion/reducer.js'

import Home from './src/Home.js'



const middleware = applyMiddleware(createLogger,thunkMiddleware)
const store = createStore(reducer,middleware)

store.dispatch({type: 'ADD'})
log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>, document.getElementById('root'))
