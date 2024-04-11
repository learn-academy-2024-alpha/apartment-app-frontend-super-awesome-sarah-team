import React from "react"
import { Link } from "react-router-dom"

const NavButton = ({ url, buttonContent }) => {
  return (
    <Link to={url}>
      <button className="nav-button">{buttonContent}</button>
    </Link>
  )
}

export default NavButton
