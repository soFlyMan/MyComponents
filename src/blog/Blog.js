import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import './blog.scss'
import { toggleBlog } from './actions/blogStyle.js'

import ProgressLine from '../ReactVersion/ProcessLine/ProcessLine.js'
import BlogMain from './BlogMain.js'
import BlogList from './BlogList.js'

import { fetchAllTags, fetchAllBlogs, getBlogsByTag, handleActive } from './actions/fetch.js'

import soFly from '../soFly.jpg'

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogNav: "blog-nav",
      top: 60,
      toggle: props.isBlogToggled,
    }
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAllTags('/blog/getAllTags', {
      method: 'GET',
      credentials: 'same-origin',
    }))
    dispatch(fetchAllBlogs('/blog/getAllBlogs', {
      method: 'GET',
      credentials: 'same-origin',
    }))
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
  handleTag(tagName) {
    const { dispatch, } = this.props
    dispatch(getBlogsByTag(tagName))
    dispatch(handleActive(tagName))
  }
  render() {
    var { url } = this.props.match
    const { isBlogToggled, tags, blogs, isTag} = this.props
    var toggleStyle = isBlogToggled?{
          backgroundColor: '#FFF',
          opacity: .9
        }:{}
    const blogMainProps = {
      toggle: this.state.toggle,
      url,
      tags,
      isTag: isTag,
      blogs,
    }
    return (
      <div className="blog clearfix" onWheel={this.toggleNav.bind(this)}>
        <div className={this.state.blogNav}  style={toggleStyle}>
          <Link to="/">
          <div className="blog-avater">
            <img src={soFly}/>
          </div>
          </Link>
          <Link to="/blog/all"><span className="blog-name">soFly's Blog</span></Link>
          <ul className="blog-nav-option">
            <li><span onClick={this.handleToggle.bind(this)}>{isBlogToggled?'LIST':'FULLSCREEN'}</span></li>
            <Link to="/home"><li>HOME</li></Link>
            <Link to="/blog/all"><li>ALL</li></Link>
            <Link to="/protflio"><li>PROTFLIO</li></Link>
            <Link to="/protflio"><li>TAGS</li></Link>
          </ul>
        </div>

        <ProgressLine color={"#afffc2"} top={this.state.top} transition={"top 1s"} display={isBlogToggled}/>

          <BlogMain {...blogMainProps} handleTag={this.handleTag.bind(this)}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isBlogToggled: state.isBlogToggled.toggle,
  tags: state.fetchingAllTags.data,
  blogs: state.fetchingAllBlogs.data,
  isTag: state.fetchingAllBlogs.isTag,
})

export default connect(mapStateToProps)(Blog)
