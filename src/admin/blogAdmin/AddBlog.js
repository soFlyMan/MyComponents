import React, { Component } from 'react'
import './AddBlog.scss'
import ReactMarkdown from 'react-markdown'

import BlogWorkSpace from './BlogWorkSpace.js'

class AddBlog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      title: '',
      tag: '',
      tags: ['Life', 'technology'],
    }
  }
  addTag(tagName) {
    const { tag, tags } = this.state
    const t = tags.slice()
    const newTag = tagName || tag

    if(tags.indexOf(newTag) >= 0 || newTag === '') {
      alert('tag is empty or existed!')
      return
    }
    t.push(newTag)
    this.setState({
      tags: t,
    })
  }
  onDeleteTag(tagName) {
    const { tags } = this.state
    const t = [...tags]
    const i = t.indexOf(tagName)
    t.splice(i, 1)
    this.setState({
      tags: t
    })
  }
  handleChange(name, e) {
    e.stopPropagation()
    this.setState({
      [name]: e.target.value
    })
  }
  handleSubmit(e) {
    const { title, body, tags } = this.state
    const tag = tags.map(val => ({
      name: val
    }))
    const blog = {
      title,
      body,
      tag,
    }
    console.log(123,blog)
    fetch('/blog/addBlog', {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
            "Content-Type": "application/json"
          },
          	body: JSON.stringify(blog)
    }).then(function(res) {
      if(res.ok) {
        res.json().then(function(data) {
          console.log(data)
        })
      }
    }).catch(function(err) {
      console.log(err)
    })
  }
  render() {
    return (
      <form className="add-blog" onSubmit={this.handleSubmit.bind(this)}>
        <div className="add-blog-title">
          <label></label>
          <input onChange={this.handleChange.bind(this, 'title')} placeholder="Enter Title"/>
          <h1>{this.state.title || 'Please Input Title!'}</h1>
        </div>
        <div className="add-blog-input">
          <div className='add-blog-body'>
            <textarea onChange={this.handleChange.bind(this, 'body')}></textarea>
          </div>
          <div className="previewer">
            <ReactMarkdown source={this.state.body}/>
          </div>
        </div>
        <BlogWorkSpace
          handleChange={this.handleChange.bind(this)}
          tags={this.state.tags}
          addTag={this.addTag.bind(this)}
          onDeleteTag={this.onDeleteTag.bind(this)}/>
      </form>
    )
  }
}


export default AddBlog
