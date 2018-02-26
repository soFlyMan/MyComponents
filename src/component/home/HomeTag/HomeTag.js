import React from 'react'
import "./hometag.scss"

const HomeTag = ({ name, color, fontSize }) => {
  const homeTag = {
    color: color || "#5CCEF9",
    fontSize: fontSize || "48px",
  }

  return(
    <div style={homeTag} className="hometag">
      { name || "Blog"}
    </div>
  )
}

export default HomeTag
