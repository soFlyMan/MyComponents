import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link, Redirect } from 'react-router-dom'
import './fullscreen.scss'
import './preview.scss'
import Tag from '../component/ReactVersion/Tag/Tag.js'

import BlogMainBody from './BlogMainBody.js'
import BlogMainAll from './BlogMainAll.js'
import { Spinner } from '../shared'



const BlogMain = ({ url, toggle, tags, isTag, blogs, handleTag, handleAllByTag, isFetching, isAllActive }) => {
  // const blogSide = toggle?'blog-sidebar-toggle':''
  const blogStyle = toggle ? 'fullscreen' : 'preview'
  const background = require('./images/Alice1-min.png')
  return (
    <div className={blogStyle}>
    {/* 背景 */}
      <img className="blog-background" src={toggle ? background : ''} alt="" />
      {/* 标签栏 */}
      <div className="blog-sidebar">
        <div className="blog-type blog-sidebar-public">
        {isFetching ? 
          (<Spinner />) 
          : (<ul>
          <Link to="/blog/all"><li onClick={handleAllByTag}><Tag active={isAllActive} type={blogStyle}>All</Tag></li></Link>
          {
            tags.map(val => {
              return (
                <li key={val._id} onClick={() => handleTag(val.name)}><Tag active={val.active} type={blogStyle}>{val.name}</Tag></li>
              )
            })
          }
          </ul>)
        }
        </div>
        {/* blog列表 */}
        <div className="blog-list blog-sidebar-public">
          <div className="blog-list-option"><span>DATE</span><span>TITLE</span></div>
          {isFetching ?
            (<Spinner />)
            : <ul>
              {isTag.map(val => {
                  var date = val
                    .meta
                    .updateAt
                    .toString()
                    .substring(0, 10)
                  return (
                    <li key={val._id}>
                      <span className="public-date">{date}&nbsp;&nbsp;</span>
                      <Link to={`${url}/body/${val._id}`}>{val.title}</Link>
                    </li>
                  )
                })
              }
              </ul>
          }
        </div>
        <div className="blog-mine blog-sidebar-public"></div>
      </div>
      {/* 文章主体 */}
      <div className="blog-article">
        <Route path={`${url}`} render={() => (
            <Redirect to={`${url}/all`} />
        )}/>
        <Route path={`${url}/all`} exact component={BlogMainAll}/>
        <Route path={`${url}/body/:id`} component={BlogMainBody}/>
      </div>
    </div>
  )
}

BlogMain.propTypes = {
  toogle: PropTypes.bool,
  tags: PropTypes.array,
  isTags: PropTypes.array,
  blogs: PropTypes.array,
  handleTag: PropTypes.func,
  handleAllByTAg: PropTypes.func
}

export default BlogMain
