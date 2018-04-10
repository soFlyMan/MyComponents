import React from 'react'
import './Tag.scss'

const Tag = ({ children, active, type }) => {
  const tagType = {
    default: active ? 'tag-default-active' : 'tag-default',
    preview: active ? 'tag-default-active' : 'tag-default',
    fullscreen: active ? 'tag-fullscreen-active' : 'tag-fullscreen'
  }
  return (
    <p className={tagType[type]}>{children || 'tag'}</p>
  )
}

export default Tag
