import React from 'react'
import './BlogMain.scss'
import Tag from '../ReactVersion/Tag/Tag.js'


import ReactMarkdown from 'react-markdown'
import { Route, Link, Redirect } from 'react-router-dom'

const BlogMain = ({ url, toggle, tags, isTag, blogs, handleTag }) => {
  var blogSide = toggle?'blog-sidebar-toggle':'blog-sidebar'
  var blogArt = toggle?'blog-article-toggle':'blog-article'
  var input = '# This is a header\n\n## And this is a paragraph\n<blockquote>This blockquote will change based on the HTML settings above.</blockquote>'
  return (
    <div className="blog-body clearfix">
      <div className={blogSide}>
        <div className="blog-type blog-sidebar-public">
          <ul>
          {
            tags.map(val => {
              return (
                <li key={val._id} onClick={() => handleTag(val.name)}><Tag active={val.active}>{val.name}</Tag></li>
              )
            })
          }
          </ul>
        </div>
        <div className="blog-list blog-sidebar-public">
          <div className="blog-list-option"><span>date</span><Link to={`${url}/all`}><span>All</span></Link><span>Technology</span></div>
          <ul>
            {
              isTag.map(val => {
                var date = val.meta.updateAt.toString().substring(0,10)
                return (
                  <li key={val._id}><span className="public-date">{date}&nbsp;&nbsp;</span><Link to={`${url}/body/${val._id}`}>{val.title}</Link></li>
                )
              })
            }
          </ul>
        </div>
        <div className="blog-mine blog-sidebar-public"></div>
      </div>
      <div className={blogArt}>
        <Route path={`${url}`} render={() => (
            <Redirect to={`${url}/all`} />
          )}/>
        <Route path={`${url}/all`} exact render={() => (
          <div>all</div>
          )}/>
        <Route path={`${url}/body/:id`} render={props => {
          if(blogs.length !== 0) {
            var blog = blogs.find(val => {
              return val._id == props.match.params.id
            })
            return (
              <div>
                <div className="blog-title">
                  <ul className="blog-tags">
                    <li>前端开发233</li>
                    <li>JavaScript</li>
                    <li>Life</li>
                  </ul>
                  <h1>Upgrading Ele.me to Progressive Web App</h1>
                  <i>posted by soFly on Oct 12, 2017</i>
                </div>
                <div className="blog-body">
                  <ReactMarkdown source={blog.body} />
                  <blockquote>This blockquote will change based on the HTML settings above.</blockquote>
                </div>
              </div>
            )
            }
            return (
              <Redirect to="/blog/all" />
            )
          }
        }/>
      </div>
    </div>
  )
}

export default BlogMain
