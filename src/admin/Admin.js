import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from '../reducer'

import '../reset.scss'

const middleware = applyMiddleware(createLogger, thunkMiddleware)
const store = createStore(reducer, middleware)


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div style={{ width: "100%", height: "100%" }}>
                admin
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);