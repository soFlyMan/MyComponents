import React from 'react'
import './Tag.scss'

const Tag = ({ children, active }) => {
  const isActive = active?'RV-tag-active':'RV-tag'
  return (
    <p className={isActive}>{children || 'tag'}</p>
  )
}

export default Tag
