import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ApartmentNew from "../pages/ApartmentNew"

test("renders ApartmentNew component", () => {
  render(
    <BrowserRouter>
      <ApartmentNew />
    </BrowserRouter>
  )

  const signInTitle = screen.getByText(/Add a New Listing/)
  expect(signInTitle).toBeInTheDocument()

  const username = screen.getByLabelText(/Street Address/)
  expect(username).toBeInTheDocument()

  const unit = screen.getByLabelText(/Unit/)
  expect(unit).toBeInTheDocument()

  const city = screen.getByLabelText(/City/)
  expect(city).toBeInTheDocument()

  const state = screen.getByLabelText(/State/)
  expect(state).toBeInTheDocument()

  const squareFootage = screen.getByLabelText(/Square Footage/)
  expect(squareFootage).toBeInTheDocument()

  const price = screen.getByLabelText(/Monthly Rental Price/)
  expect(price).toBeInTheDocument()

  const bedrooms = screen.getByLabelText(/Bedrooms/)
  expect(bedrooms).toBeInTheDocument()

  const bathrooms = screen.getByLabelText(/Bathrooms/)
  expect(bathrooms).toBeInTheDocument()

  const pets = screen.getByLabelText(/Pet Policy/)
  expect(pets).toBeInTheDocument()

  const image = screen.getByLabelText(/Image URL/)
  expect(image).toBeInTheDocument()

  const submitButton = screen.getByText("Submit")
  expect(submitButton).toBeInTheDocument()
})
