import React from 'react'
import './Tag.scss'

const Tag = ({ children }) => {
  const tagStyle = {

  }
  return (
    <p className="RV-tag" style={tagStyle}>{children || 'tag'}</p>
  )
}

export default Tag
