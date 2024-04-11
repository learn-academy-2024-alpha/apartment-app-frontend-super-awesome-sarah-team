import React from "react"
import NavButton from "../components/NavButton"
import key from "../assets/key.png"

const NotFound = () => {
  return (
    <div className="center-content page-height">
      <h2 className="title-header">Oops, Wrong Address!</h2>
      <NavButton url="/apartments" buttonContent="Back to Listings" />
      <div>
        <img
          src={key}
          alt="gold skeleton key"
          className="not-found-key-image"
        />
      </div>
    </div>
  )
}

export default NotFound
