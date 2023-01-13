import React from "react"

const Button = ({ text, color, bgColor, icon }) => {
  return (
    <button className="btn" style={{ color: color, backgroundColor: bgColor }}>
      {icon ? <span className="btn-icon">{icon}</span> : null}
      {text ? <span className="btn-text">{text}</span> : null}
    </button>
  )
}

export default Button
