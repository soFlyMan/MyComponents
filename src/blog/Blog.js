import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import './blog.scss'
import { toggleBlog } from './actions/blogStyle.js'

import ProgressLine from '../component/ReactVersion/ProcessLine/ProcessLine.js'
import BlogMain from './BlogMain.js'
import BlogList from './BlogList.js'

import { fetchAllTags, fetchAllBlogs, getBlogsByTag, getAllByTag, handleActive } from './actions/fetch.js'

import soFly from '../soFly.jpg'

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogNav: "blog-nav",
      top: 60,
      toggle: props.isBlogToggled,
      isNavToggled: false,
    }
    this.handleTag = this.handleTag.bind(this)
    this.handleAllByTag = this.handleAllByTag.bind(this)
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
  handleAllByTag() {
    const { dispatch } = this.props
    dispatch(getAllByTag())
  }
  toggleNavList() {
    const { isNavToggled } = this.state
    this.setState({
      isNavToggled: !isNavToggled
    })
  }
  render() {
    var { url } = this.props.match
    const { isNavToggled } = this.state
    const {
      isBlogToggled,
      tags,
      blogs,
      isTag,
      isFetching,
      isAllActive
    } = this.props
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
      isFetching,
      isAllActive
    }
    const listStyle = {
      height: 285,
    }
    var listStyleToggle = {
      height: 0,
      paddingTop: 0,
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
          <span className="nav-toggle" onClick={this.toggleNavList.bind(this)}>TOGGLE</span>
          <ul className="blog-nav-option" style={isNavToggled?listStyle:listStyleToggle}>
            <li><span onClick={this.handleToggle.bind(this)}>{isBlogToggled?'PREVIEW':'FULLSCREEN'}</span></li>
            <Link to="/home"><li>HOME</li></Link>
            <Link to="/blog/all"><li>ALL</li></Link>
            <Link to="/protflio"><li>PROTFLIO</li></Link>
            <Link to="/protflio"><li>TAGS</li></Link>
          </ul>
        </div>

        <ProgressLine color={"#afffc2"} top={this.state.top} transition={"top 1s"} display={isBlogToggled}/>

          <BlogMain {...blogMainProps} handleTag={this.handleTag} handleAllByTag={this.handleAllByTag}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isBlogToggled: state.isBlogToggled.toggle,
  tags: state.fetchingAllTags.data,
  blogs: state.fetchingAllBlogs.data,
  isFetching: state.fetchingAllBlogs.isFetching,
  isTag: state.fetchingAllBlogs.isTag,
  isAllActive: state.fetchingAllTags.isAllActive,
})

export default connect(mapStateToProps)(Blog)
