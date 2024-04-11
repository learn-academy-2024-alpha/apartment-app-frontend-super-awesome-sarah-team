import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import apartments from "../assets/jan-jakub-nanista-unsplash.jpg"

test("renders Home component", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )

  const homeTitleText = screen.getByText(/Home Sweet Home/)
  expect(homeTitleText).toBeInTheDocument()

  const navButton = screen.getByText(/See Listings/)
  expect(navButton).toBeInTheDocument()

  const heroImage = screen.getByAltText(
    "tiled pattern of blue windows on a tan building"
  )
  expect(heroImage).toBeInTheDocument()
  expect(heroImage).toHaveAttribute("src", apartments)
})
