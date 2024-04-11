import React from "react"
import { NavLink } from "react-router-dom"
import footerLogo from "../assets/footer-logo.png"

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="footer-content">
        <p className="footer-text">&copy; 2024 Sarah Proctor | LEARN Academy</p>
        <NavLink to="/">
          <img
            src={footerLogo}
            alt="small apartment app logo"
            className="footer-logo"
          />
        </NavLink>
      </div>
    </footer>
  )
}

export default Footer
