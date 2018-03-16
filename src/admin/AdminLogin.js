import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, Route, Redirect } from 'react-router-dom'
import  BlogAdmin  from './blogAdmin/BlogAdmin.js'
import './Admin.scss'

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      admin: [
        { key: 'blog', path: '/admin/blogadmin', name: 'Blog Admin' },
        { key: 'user', path: '/admin/useradmin', name: 'User Admin' },
      ]
    }
  }
  render() {
    return (
      <div className="admin">
        <div className="admin-sidebar">
          {
            this.state.admin.map(val => (
              <NavLink activeClassName="admin-selected"
                       key={val.key}
                      to={val.path}>
                      <div className="admin-option">
                        <span className="sidebar-name">{val.name}</span>
                      </div>
             </NavLink>
            ))
          }

        </div>
        <div className="admin-content">
          <Route path='/admin' render={() => (<Redirect to="/admin/blogadmin/add" />)} />
          <Route path='/admin/blogadmin' render={() =>
              (<BlogAdmin />)}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(Admin)
