import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ApartmentIndex from "../pages/ApartmentIndex"
import mockApartments from "../mockApartments"

describe("ApartmentIndex component", () => {
  test("renders ApartmentIndex component", () => {
    render(
      <BrowserRouter>
        <ApartmentIndex apartments={mockApartments} />
      </BrowserRouter>
    )
    const indexHeader = screen.getByText(/Apartment Listings/)
    expect(indexHeader).toBeInTheDocument()

    const apartmentImage = screen.getAllByAltText("sneak peek of the apartment")
    expect(apartmentImage).toHaveLength(mockApartments.length)

    const seeMoreButton = screen.getAllByText("See More")
    expect(seeMoreButton).toHaveLength(mockApartments.length)

    mockApartments.forEach((apartment) => {
      const apartmentCityAndState = screen.getByText(
        `${apartment.city}, ${apartment.state}`
      )
      expect(apartmentCityAndState).toBeInTheDocument()

      const apartmentBedrooms = screen.getByText(
        `${apartment.bedrooms} bedrooms`
      )
      expect(apartmentBedrooms).toBeInTheDocument()
    })
  })

  test("renders without any apartments", () => {
    render(
      <BrowserRouter>
        <ApartmentIndex apartments={[]} />
      </BrowserRouter>
    )
  })
  expect(screen.queryByTestId("apartment-card")).toBeNull()
})
