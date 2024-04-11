import NavButton from "../components/NavButton"
import { NavLink } from "react-router-dom"
import apartmentLogo from "../assets/apartment-logo.png"

const Header = () => {
  return (
    <nav className="header-nav">
      <div>
        <NavLink to="/">
          <img
            src={apartmentLogo}
            alt="stylized outline of house with two trees"
            className="apartment-logo"
          />
        </NavLink>
      </div>
      <div className="nav-link-group">
        <NavLink to="/apartments" className="nav-link">
          Available Apartments
        </NavLink>
        <NavLink to="/signin" className="nav-link">
          Sign In
        </NavLink>
        <NavButton url="/signup" buttonContent="Sign Up" />
      </div>
    </nav>
  )
}

export default Header
