import React, { Component } from 'react'
import './BlogWorkSpace.scss'
import { connect } from 'react-redux'

import { fetchAllTags } from '../../blog/actions/fetch.js'

const doc = document
class BlogWorkSpace extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: true,
      left: 240,
      top: 80,
      dragging: false,
      x: 0,
      y:0,
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.onDragStart = this.onDragStart.bind(this)
    this.onDrag = this.onDrag.bind(this)
    this.onDragStop = this.onDragStop.bind(this)
  }
  componentDidMount() {
    const { allTags, dispatch } = this.props
    console.log(allTags)
    if(allTags.length === 0) {
      dispatch(fetchAllTags('/blog/getAllTags', {
        method: 'GET',
        credentials: 'same-origin',
      }))
    }
  }
  handleToggle() {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  onDragStart(e) {

    const self = this
    const x = e.clientX - e.currentTarget.offsetLeft
    const y = e.clientY - e.currentTarget.offsetTop
    this.setState({
      dragging: true,
      x,
      y,
    })
    doc.addEventListener('mousemove', this.onDrag)

  }
  onDrag(e) {
    if(this.state.dragging) {
      const { x, y } = this.state
      this.setState({
        top: e.clientY - y,
        left: e.clientX - x,
      })
    }
  }
  onDragStop(e) {
    e = e || window.event
    doc.removeEventListener('mousemove', this.onDrag)
    this.setState(()=>({
      dragging: false
    }))
  }
  render() {
    const { toggle, left, top } = this.state
    const { tags, handleChange, addTag, onDeleteTag, allTags } = this.props
    const ws = {
      top,
      left,
    }
    const wsBody = {
      height: toggle?'0':'300px',
    }
    return (
      <div style={ws} className="add-blog-workspace" onMouseDown={this.onDragStart} onMouseUp={this.onDragStop}>
        <div className="ws-nav noselect"><span onClick={this.handleToggle}>▼&nbsp;workspace</span></div>
        <div style={wsBody} className="ws-body">
          <div style={{margin: 12,}}>
            <input className="ws-addTag" onChange={(e) => handleChange('tag', e)}/>
            <div className="ws-button" onClick={() => addTag()}>ADD TAG</div>
            <div className="ws-dropdown">
              <div className="ws-dropdown-btn">ALL TAGS</div>
              <ul>
                {
                  allTags.map(val => (
                    <li key={val._id} onClick={() => addTag(val.name)}>{val.name}</li>
                  ))
                }
              </ul>
            </div>
          </div>
          <ul className="ws-tags">
          {tags.map(val => (
            <li key={val}>{val}<span onClick={() => onDeleteTag(val)}>✕</span></li>
          ))}
          </ul>
          <input className="ws-button ws-submit" type="submit" value="ADD BLOG"/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allTags: state.fetchingAllTags.data
})

export default connect(mapStateToProps)(BlogWorkSpace)
