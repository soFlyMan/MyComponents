import React from 'react'
import './BlogMain.scss'
import Tag from '../ReactVersion/Tag/Tag.js'


import ReactMarkdown from 'react-markdown'
import { Route, Link } from 'react-router-dom'

const BlogMain = ({ url, toggle }) => {
  var blogSide = toggle?'blog-sidebar-toggle':'blog-sidebar'
  var blogArt = toggle?'blog-article-toggle':'blog-article'
  var input = '# This is a header\n\n## And this is a paragraph\n<blockquote>This blockquote will change based on the HTML settings above.</blockquote>'
  return (
    <div className="blog-body clearfix">
      <div className={blogSide}>
        <div className="blog-type blog-sidebar-public">
          <Tag>All</Tag>
          <Tag>Life</Tag>
          <Tag>Design</Tag>
          <Tag>Life</Tag>
          <Tag>Others</Tag>
          <Tag>Technology</Tag>
          <Tag>Life</Tag>
          <Tag>Design</Tag>
          <Tag>Life</Tag>
          <Tag>Others</Tag>
          <Tag>Technology</Tag>
          <Tag>Life</Tag>
          <Tag>Design</Tag>
          <Tag>Life</Tag>
          <Tag>Others</Tag>
        </div>
        <div className="blog-list blog-sidebar-public">
          <div className="blog-list-option"><span>date</span><span>All</span><span>Technology</span></div>
          <ul>
            <li><span className="public-date">2017.12.2</span> Upgrading Ele.me to Progressive Web AppProgressive Web AppProgressive Web App</li>
            <li><span className="public-date">2017.12.4</span> how to change my life</li>
            <li><span className="public-date">2017.12.1</span> Upgrading Ele.me to Progressive Web AppProgressive Web AppProgressive Web App</li>
            <li><span className="public-date">2017.12.8</span> Upgrading Ele.me to Progressive Web AppProgressive Web AppProgressive Web App</li>
            <li><span className="public-date">2017.12.2</span> Upgrading Ele.me to Progressive Web AppProgressive Web AppProgressive Web App</li>
            <li><span className="public-date">2017.12.4</span> how to change my life</li>
            <li><span className="public-date">2017.12.1</span> Upgrading Ele.me to Progressive Web AppProgressive Web AppProgressive Web App</li>
            <li><span className="public-date">2017.12.8</span> Upgrading Ele.me to Progressive Web AppProgressive Web AppProgressive Web App</li>
            <li><span className="public-date">2017.12.2</span> Upgrading Ele.me to Progressive Web AppProgressive Web AppProgressive Web App</li>
            <li><span className="public-date">2017.12.4</span> how to change my life</li>
            <li><span className="public-date">2017.12.1</span> Upgrading Ele.me to Progressive Web AppProgressive Web AppProgressive Web App</li>
            <li><span className="public-date">2017.12.8</span> Upgrading Ele.me to Progressive Web AppProgressive Web AppProgressive Web App</li>
            <li><span className="public-date">2017.12.2</span> Upgrading Ele.me to Progressive Web AppProgressive Web AppProgressive Web App</li>
            <li><span className="public-date">2017.12.4</span> how to change my life</li>
            <li><span className="public-date">2017.12.1</span> Upgrading Ele.me to Progressive Web AppProgressive Web AppProgressive Web App</li>
            <li><span className="public-date">2017.12.8</span> Upgrading Ele.me to Progressive Web AppProgressive Web AppProgressive Web App</li>

          </ul>
        </div>
        <div className="blog-mine blog-sidebar-public"></div>
      </div>
      <Route path={`${url}`} render={() => (
        <div className={blogArt}>
          <div className="blog-title">
            <ul className="blog-tags">
              <li>前端开发</li>
              <li>JavaScript</li>
              <li>Life</li>
            </ul>
            <h1>Upgrading Ele.me to Progressive Web App</h1>
            <i>posted by soFly on Oct 12, 2017</i>
          </div>
          <div className="blog-body">
            <ReactMarkdown source={input} />
            <blockquote>This blockquote will change based on the HTML settings above.</blockquote>
          </div>
        </div>
        )}/>
    </div>
  )
}

export default BlogMain
