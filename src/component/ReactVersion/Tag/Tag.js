import React from 'react'
import './Tag.scss'

const Tag = ({ children, active, type }) => {
  const isActive = active?'RV-tag-active':'RV-tag'
  const isDefault = active?'tag-default-active':'tag-default'
  const tagType = type || isDefault
  return (
    <p className={tagType}>{children || 'tag'}</p>
  )
}

export default Tag
