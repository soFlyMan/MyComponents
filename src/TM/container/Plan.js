import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Plan.scss'

class Plan extends Component {
  render() {
    return (
      <div className="plan-body">plan</div>
    )
  }
}


const mapStateToProps = state => {
  return {}
}
export default connect(mapStateToProps)(Plan)
