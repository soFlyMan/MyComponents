import React from 'react'
import { Link } from 'react-router-dom'
import './NoMatch.scss'

const NoMatch = () => {
  return (
    <div className="nomatch">
      <img src={require('./02.jpg')} className="nomatch-bg"/>
        <div className="nomatch-text">
          <p>Welcome to soFly's home page,</p> 
          <p> it 's test version now, and more functions are on the way,</p>
          <p>you can read my {' '}<Link to="/blog"><span className="nomatch-link">blogs</span></Link> {' '}first.</p>
          <p>or click{' '}<Link to="/"><span className="nomatch-link">here</span></Link>{' '}to back.</p>
        </div>
    </div>
  )
}

export default NoMatch
