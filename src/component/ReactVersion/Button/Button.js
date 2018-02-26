import React from 'react'
import './Button.scss'

const Button = ({ bgcolor, width, height, children, onClick, type }) => {
  type = type || 'primary'
  width = typeof(width) == 'number'?width + 'px':width
  height = typeof(height) == 'number'?height + 'px':height
  const button = {

  }
  const style = {
    default: {
      width: width || 60,
      height: height || 30,
      backgroundColor: bgcolor || '#FFF',
      border: '1px solid #ccc',
      color: '#ccc',
      lineHeight: height || '30px',
    },
    primary: {
      width: width || 60,
      height: height || 30,
      backgroundColor: bgcolor || '#8abee5',
      color: '#FFF',
      lineHeight: height || '30px',
    },
  }
  return (
    <label style={style[type]} className="button" onClick={onClick}>{children}</label>
  )
}

export default Button
