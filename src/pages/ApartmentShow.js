import NavButton from "../components/NavButton"
import { useParams, useNavigate } from "react-router-dom"
import { FaBed } from "react-icons/fa"
import { FaDog } from "react-icons/fa6"
import { FaHouse } from "react-icons/fa6"
import { ImLocation2 } from "react-icons/im"

const ApartmentShow = ({ apartments, deleteApartment, user }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const apartment = apartments.find((item) => item.id === +id)

  const handleDeleteApartment = () => {
    deleteApartment(apartment.id)
    navigate("/apartments")
  }
  return (
    <>
      <h3 className="title-header center-content">Apartment Details</h3>
      <div className="show-apartment">
        <div>
          <img
            src={apartment.image}
            alt="apartment"
            className="show-apartment-image"
          />
        </div>
        <div className="apartment-details">
          <h5>${apartment.price}</h5>
          <p>
            <span className="icon">
              <ImLocation2 />
            </span>
            {apartment.street}, {apartment.unit}, {apartment.city},{" "}
            {apartment.state}
          </p>
          <p>
            <span className="icon">
              <FaBed />
            </span>
            {apartment.bedrooms} bedrooms | {apartment.bathrooms} bathrooms
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
        </div>
      </div>
      <br />
      <div className="center-content">
        {user && (
          <NavButton
            url={`/apartment-edit/${apartment.id}`}
            buttonContent="Edit Apartment"
          />
        )}
        {user && (
          <button className="nav-button" onClick={handleDeleteApartment}>
            Delete Apartment
          </button>
        )}
        <NavButton url="/apartments" buttonContent="Back to All Apartments" />
      </div>
    </>
  )
}

export default ApartmentShow
