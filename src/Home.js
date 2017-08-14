import React from 'react'

import NativeVersion from './NativeVersion/NativeVersion.js'
import ReactVersion from './ReactVersion/ReactVersion.js'

const Home = () => {
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

export default Home
