import React, { Component } from 'react'

export default class Scroll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit(e) {
    console.log(e.target.value)
  }
  handleClick(val) {
    var t = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
    var { letters } = this.state
    var index = letters.indexOf(val)
    var h = 0
    console.log(index, val, '123', h)
    var top = 270 + 400*index
    var speed = Math.ceil(top / 5)
    var timer = window.setInterval(function() {
      if(h>=top) {
        window.clearInterval(timer)
      } else {
        h = h + speed
        window.scrollTo(0, h)
        console.log(h)
      }
    }, 20)
  }
  render() {
    const { letters } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="submit"/>
        </form>
        <div>
          { letters.map(val => (
          <span key={val} style={{marginRight: 40}} onTouchStart={this.handleClick.bind(this, val)}>{val}</span>
          ))}
        </div>
        <div>
          { letters.map(val => (
          <div style={{width:200, height: 400}}>{val}</div>
          ))}
        </div>
      </div>
    )
  }
}
