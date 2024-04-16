import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import MyApartments from "../pages/MyApartments"
import mockApartments from "../mockApartments"
import mockUsers from "../mockUsers"

describe("MyApartments component", () => {
  test("renders MyApartments component", async () => {
    render(
      <BrowserRouter>
        <MyApartments apartments={mockApartments} user={mockUsers[0]} />
      </BrowserRouter>
    )

    const myApartments = mockApartments.filter(
      (apt) => apt.user_id === mockUsers[0].id
    )
    const indexHeader = screen.getByText(/My Apartments/)
    expect(indexHeader).toBeInTheDocument()

    const apartmentImage = screen.getAllByAltText("sneak peek of the apartment")
    expect(apartmentImage).toHaveLength(myApartments.length)

    const editButton = screen.getAllByText("edit")
    expect(editButton).toHaveLength(myApartments.length)

    const deleteButton = screen.getAllByText("delete")
    expect(deleteButton).toHaveLength(myApartments.length)

    myApartments.forEach((apartment) => {
      const cityAndState = screen.getByText(
        `${apartment.city}, ${apartment.state}`
      )
      expect(cityAndState).toBeInTheDocument()

      const bedroomsAndBathrooms = screen.getByText(
        `${apartment.bedrooms} bedrooms | ${apartment.bathrooms} bathrooms`
      )
      expect(bedroomsAndBathrooms).toBeInTheDocument()

      const squareFootage = screen.getByText(
        `${apartment.square_footage} square feet`
      )
      expect(squareFootage).toBeInTheDocument()

      const pets = screen.getByText(`Pet policy: ${apartment.pets}`)
      expect(pets).toBeInTheDocument()
    })
  })

  test("renders without any apartments", () => {
    render(
      <BrowserRouter>
        <MyApartments apartments={[]} />
      </BrowserRouter>
    )
    const noApartments = screen.getByText(
      /You don't have any apartments listed/
    )
    expect(noApartments).toBeInTheDocument()

    const footerLogo = screen.getByAltText(/small apartment app logo/)
    expect(footerLogo).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: "small apartment app logo" })
    ).toHaveAttribute("href", "/")

    const addApartmentButton = screen.getByText(/list an apartment/i)
    expect(addApartmentButton).toBeInTheDocument()
  })
})
