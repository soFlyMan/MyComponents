import React from 'react'

const ProcessLine = ({ width, color }) => {
  let pl = {
        position: "fixed",
        width: width || "100%",
        backgroundColor: color || "green",
        height: 4,
        zIndex: 10001
      }
    return (
       <div style={pl}></div>
    )
}

export default ProcessLine
