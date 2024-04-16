import NavButton from "../components/NavButton"
import { NavLink, useNavigate } from "react-router-dom"
import apartmentLogo from "../assets/apartment-logo.png"

const Header = ({ signOut, user }) => {
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut()
    navigate("/")
  }
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
        {user && (
          <NavLink to="/my-apartments" className="nav-link">
            My Apartments
          </NavLink>
        )}
        {!user && (
          <NavLink to="/signin" className="nav-link">
            Sign In
          </NavLink>
        )}
        {!user && <NavButton url="/signup" buttonContent="Sign Up" />}
        {user && (
          <button className="nav-button" onClick={handleSignOut}>
            Sign Out
          </button>
        )}
      </div>
    </nav>
  )
}

export default Header
