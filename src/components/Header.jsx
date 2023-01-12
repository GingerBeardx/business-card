import React from "react"
import self from "../resources/me.jpg"

const Header = () => {
  return (
    <div className="header">
      <img src={self} alt="Eric Greenhalgh" className="card-image" />
      <h1 className="name">Eric Greenhalgh</h1>
      <h3 className="position">Software Engineer</h3>
      <small className="website">gingerbeard.tech</small>
    </div>
  )
}

export default Header
