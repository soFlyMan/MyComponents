import React from 'react'

const ProcessLine = ({ width, color, top, transition, display }) => {
  var show = display?'none':'block'
  let pl = {
        position: "fixed",
        width: width || "100%",
        backgroundColor: color || "green",
        height: 4,
        zIndex: 10001,
        top: top || 0,
        transition: transition || "none",
        display: show || 'block',
      }
    return (
       <div style={pl}></div>
    )
}

export default ProcessLine
