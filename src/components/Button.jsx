import React from "react"

const Button = ({ text, color, bgColor, icon }) => {
  return (
    <button className="btn" style={{ color: color, backgroundColor: bgColor }}>
      <span className="btn-icon">{icon}</span>
      <span className="btn-text">{text}</span>
    </button>
  )
}

export default Button
