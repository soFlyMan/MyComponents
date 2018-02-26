import React, { Component } from 'react'
import { connect } from 'react-redux'
import './List.scss'
import Button from '../../component/ReactVersion/Button/Button.js'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [
        { key: 'All', name: 'All', active: true },
        { key: 'Necessary', name: 'Necessary', active: false },
        { key: 'Completed', name: 'Completed', active: false },
      ],
      items: [
        { key: 1, time: 'every day', content: 'I like you, but just like you' },
        { key: 2, time: '1 hour', content: 'Aerial world' },
        { key: 3, time: 'every day', content: 'I like you, but just like you' },
        { key: 4, time: '1 hour', content: 'Aerial world' },
      ],
      time: '',
      content: '',
      status: true,
      key: 5,

    }
  }
  handleActive(key) {
    console.log(key)
    const { options } = this.state
    for (var i of options) {
      i.active = false
      if(i.key == key) {
        i.active = true
      }
    }
    this.setState({
      options: options
    })
  }
  onDel(key) {
    const { items } = this.state
    var i = items.findIndex( (val, index) => {
      return val.key === key
    })
    items.splice(i, 1)
    console.log(items)
    this.setState({
      items,
    })
  }
  handleChange(name, e) {
    this.setState({
      [name]: e.target.value
    })
  }
  addItem() {
    const { time, content, status, key, items } = this.state
    const id = key + 1
    const item = { key: id, time: time, content: content }
    items.push(item)
    this.setState({
      key: id,
      items,
    })
    console.log(time, content)
  }
  render() {
    const { options, items } = this.state
    const activeClass = {
      color: "#FFF",
      backgroundColor: "#2c3643",
    }
    const normal = {}
    return (
      <div className="list-body">
        <div className="option">
          { options.map(val => (
            <span style={val.active?activeClass:normal}
                  className={val.active?"active":"none-active"}
                  key={val.key}
                  onClick={ this.handleActive.bind(this, val.key) }>
                {val.name}
              </span>
            ))
          }
        </div>
        <div className="list-content">
          <div className="list-main">
            <form>
              <input type="checkbox" id="toggle" />
              <label id="label" htmlFor="toggle"></label>
              <input className="item-time" placeholder="Time" value={this.state.time} onChange={this.handleChange.bind(this, 'time')}/>
              <input placeholder="What need to be done?" value={this.state.content} onChange={this.handleChange.bind(this, 'content')}/>
              <Button type="default" onClick={this.addItem.bind(this)}>Add</Button>
            </form>
            <ul className="list-items">
              {
                items.map( val => (
                  <li key={val.key}>
                    <input type="checkbox" className="toggle" />
                    <label className="label-time">{val.time}</label>
                    <label className="label-content">{val.content}</label>
                    <Button onClick={this.onDel.bind(this, val.key)}>Delete</Button>
                  </li>
                ))
              }


            </ul>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {}
}
export default connect(mapStateToProps)(List)
