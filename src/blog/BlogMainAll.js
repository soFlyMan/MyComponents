import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


class BlogMainAll extends Component {
  render() {
     const { blogs } = this.props
     return (
         <ul className="blog-all blog-all-public">
           <li className="blog-all-desc">
             soFly's Blog
             <p>Fight for breaking the cocoon.</p>
           </li>
           {
             blogs.map(val => {
             var body = val.body.substring(0, 240)
             var date = val.meta.updateAt.substring(0, 10)
             return (
                 <Link to={`/blog/body/${val._id}`}  key={val._id}>
                   <li className="blog-all-single">
                       <p className="blog-all-title">{val.title}</p>
                       <p className="blog-all-body">{`${body}...`}</p>
                       <p className="blog-all-date">posted by&nbsp;{val.author} on&nbsp;{date}</p>
                       <hr/>
                   </li>
                 </Link>
             )
           })}
         </ul>
      )
  }
}

const mapStateToProps = state => ({
  blogs: state.fetchingAllBlogs.data,
})

BlogMainAll.propTypes = {
  blogs: PropTypes.array
}

export default connect(mapStateToProps)(BlogMainAll)
