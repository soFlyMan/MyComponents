import React from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'
import AddBlog from './AddBlog.js'
import Scroll from './Scroll.js'
import './BlogAdmin.scss'

const BlogAdmin = () => {
  return (
    <div className="blog-admin">
      <div className="blog-admin-nav">
        <NavLink activeClassName="blog-admin-nav-selected" to='/admin/blogadmin/all'><span>All Blogs</span></NavLink>
        <NavLink activeClassName="blog-admin-nav-selected" to='/admin/blogadmin/add'><span>Add Blog</span></NavLink>
        <NavLink activeClassName="blog-admin-nav-selected" to='/admin/blogadmin/edit'><span>Edit Blog</span></NavLink>
      </div>
      <Route path='/admin/blogadmin' render={() => (<Redirect to="/admin/blogadmin/add" />)} />
      <Route path='/admin/blogadmin/add' component={AddBlog} />
      <Route path='/admin/blogadmin/all' component={AddBlog} />

    </div>
  )
}

export default BlogAdmin
