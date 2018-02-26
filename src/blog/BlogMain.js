import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { Route, Link, Redirect } from 'react-router-dom'
import './BlogMain.scss'
import './BlogMainToggle.scss'
import Tag from '../component/ReactVersion/Tag/Tag.js'

import BlogMainBody from './BlogMainBody.js'
import BlogMainAll from './BlogMainAll.js'
import { Spinner } from '../shared'



const BlogMain = ({ url, toggle, tags, isTag, blogs, handleTag, isFetching }) => {
  var blogSide = toggle?'blog-sidebar-toggle':'blog-sidebar'
  var blogArt = toggle?'blog-article-toggle':'blog-article'
  var input = '# This is a header\n\n## And this is a paragraph\n<blockquote>This blockquote will change based on the HTML settings above.</blockquote>'
  return (
    <div className="blog-body clearfix">
      <div className={blogSide}>
        <div className="blog-type blog-sidebar-public">
        {isFetching ? 
          (<Spinner />) 
          : (<ul>
          {
            tags.map(val => {
              return (
                <li key={val._id} onClick={() => handleTag(val.name)}><Tag active={val.active}>{val.name}</Tag></li>
              )
            })
          }
          </ul>)
        }
        </div>
        <div className="blog-list blog-sidebar-public">
          <div className="blog-list-option"><span>date</span><Link to={`${url}/all`}><span>All</span></Link><span>Technology</span></div>
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
      <div className={blogArt}>
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
}

export default BlogMain
