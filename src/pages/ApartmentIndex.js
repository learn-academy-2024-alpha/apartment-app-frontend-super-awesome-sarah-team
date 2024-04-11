import React from "react"
import NavButton from "../components/NavButton"

const ApartmentIndex = ({ apartments }) => {
  return (
    <div className="page-body center-content">
      <h3 className="title-header">Apartment Listings</h3>
      <div className="index-cards-set">
        {apartments.map((apartment) => {
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
                <h6>
                  {apartment.city}, {apartment.state}
                </h6>
                <h6>{apartment.bedrooms} bedrooms</h6>
                <NavButton
                  url={`/apartment/${apartment.id}`}
                  buttonContent="See More"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ApartmentIndex
