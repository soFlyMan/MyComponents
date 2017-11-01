import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


class BlogMainBody extends Component {
  render() {
    const { blogs, match } = this.props
    console.log(this.props)
    if(blogs.length !== 0) {
      var blog = blogs.find(val => {
        return val._id == match.params.id
      })
      var date = blog.meta.updateAt.substring(0, 10)
      return (
        <div>
          <div className="blog-title">
            <ul className="blog-tags">
              {blog.tag.map(val => {
                return (
                  <li key={val._id}>{val.name}</li>
                )
              })}
            </ul>
            <h1>{blog.title}</h1>
            <i>posted by soFly on&nbsp;{date}</i>
          </div>
          <div className="blog-main-body md">
            <ReactMarkdown source={blog.body} />
          </div>
        </div>
      )
   }
   return (
              <Redirect to="/blog/all" />
            )
  }
}

const mapStateToProps = state => ({
  blogs: state.fetchingAllBlogs.data,
})

BlogMainBody.propTypes = {
    blogs: PropTypes.array
}

export default connect(mapStateToProps)(BlogMainBody)
