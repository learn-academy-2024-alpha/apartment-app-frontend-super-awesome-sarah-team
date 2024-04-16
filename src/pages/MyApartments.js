import NavButton from "../components/NavButton"
import footerLogo from "../assets/footer-logo.png"
import { NavLink, useNavigate } from "react-router-dom"
import { FaBed } from "react-icons/fa"
import { FaDog } from "react-icons/fa6"
import { FaHouse } from "react-icons/fa6"
import { ImLocation2 } from "react-icons/im"

const MyApartments = ({ apartments, user, deleteApartment }) => {
  const navigate = useNavigate()
  const myApartments = apartments.filter((apt) => apt.user_id === user.id)

  const handleDeleteApartment = (id) => {
    alert("Are you sure you want to delete this apartment?")
    deleteApartment(id)
    navigate("/my-apartments")
  }
  return (
    <div className="page-body center-content">
      <h3 className="title-header">My Apartments</h3>
      {apartments.length === 0 && (
        <div className="blank-page-height">
          <NavLink to="/">
            <img
              src={footerLogo}
              alt="small apartment app logo"
              className="footer-logo"
            />
          </NavLink>
          <h5>You don't have any apartments listed.</h5>
        </div>
      )}
      <NavButton url="/apartment-new" buttonContent="add an apartment" />
      <div className="index-cards-set">
        {myApartments?.map((apartment) => {
          return (
            <div key={apartment.id} className="card">
              <div className="index-profile-image">
                <img
                  alt="sneak peek of the apartment"
                  src={apartment.image}
                  className="index-apartment-image"
                />
              </div>
              <div>
                <div>
                  <span className="icon">
                    <ImLocation2 />
                  </span>
                  {apartment.street}, {apartment.unit}
                </div>
                <p>
                  {apartment.city}, {apartment.state}
                </p>
                <p>
                  <span className="icon">
                    <FaBed />
                  </span>
                  {apartment.bedrooms} bedrooms | {apartment.bathrooms}{" "}
                  bathrooms
                </p>
                <p>
                  <span className="icon">
                    <FaHouse />
                  </span>
                  {apartment.square_footage} square feet
                </p>
                <p>
                  <span className="icon">
                    <FaDog />
                  </span>
                  Pet policy: {apartment.pets}
                </p>
                <NavButton
                  url={`/apartment-edit/${apartment.id}`}
                  buttonContent="edit"
                />
                <button
                  className="nav-button"
                  onClick={() => handleDeleteApartment(apartment.id)}
                >
                  delete
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyApartments
