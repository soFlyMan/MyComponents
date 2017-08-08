import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import test from './test.js'
import log from './src/log.js'

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

main()
test()
log('zhao')
log('feifeifie')

function main() {
  ReactDOM.render(<App />, document.getElementById('root'))
}
