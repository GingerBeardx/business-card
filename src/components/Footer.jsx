import React from "react"
import { FaTwitterSquare } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer">
      <span className="social-icon">
        <FaTwitterSquare />
      </span>
      <span className="social-icon">
        <FaFacebookSquare />
      </span>
      <span className="social-icon">
        <FaInstagramSquare />
      </span>
      <span className="social-icon">
        <FaGithubSquare />
      </span>
    </footer>
  )
}

export default Footer
