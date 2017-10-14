import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import './blog.scss'
import { toggleBlog } from './actions/blogStyle.js'

import ProgressLine from '../ReactVersion/ProcessLine/ProcessLine.js'
import BlogMain from './BlogMain.js'
import BlogList from './BlogList.js'


import soFly from '../soFly.jpg'

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogNav: "blog-nav",
      top: 60,
      toggle: props.isBlogToggled
    }
  }
  toggleNav(e) {
    e.deltaY >= 0 ? this.setState({  blogNav: "blog-nav-none", top: 0 }) : this.setState({  blogNav: "blog-nav", top: 60 })
  }
  handleToggle() {
    const { isBlogToggled, dispatch } = this.props
    const { toggle } = this.state
    dispatch(toggleBlog(!isBlogToggled))
    this.setState({
      toggle: !toggle
    })
  }
  render() {
    var { url } = this.props.match
    const { isBlogToggled } = this.props
    var toggleStyle = isBlogToggled?{
          backgroundColor: '#FFF',
          opacity: .9
        }:{}
    return (
      <div className="blog clearfix" onWheel={this.toggleNav.bind(this)}>
        <div className={this.state.blogNav}  style={toggleStyle}>
          <Link to="/">
          <div className="blog-avater">
            <img src={soFly}/>
          </div>
          </Link>
          <Link to="/blog"><span className="blog-name">soFly's Blog</span></Link>
          <ul className="blog-nav-option">
            <li><span onClick={this.handleToggle.bind(this)}>{isBlogToggled?'LIST':'FULLSCREEN'}</span></li>
            <Link to="/home"><li>HOME</li></Link>
            <li>PROTFLIO</li>
            <li>TAGS</li>
          </ul>
        </div>

        <ProgressLine color={"#afffc2"} top={this.state.top} transition={"top 1s"} display={isBlogToggled}/>

          <Route exact path={`${url}/:id`} component={BlogList} />
          <BlogMain toggle={this.state.toggle} url={url}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isBlogToggled: state.isBlogToggled.toggle
  }
}

export default connect(mapStateToProps)(Blog)
