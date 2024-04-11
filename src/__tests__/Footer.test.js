import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../components/Footer"

test("renders Footer component", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )

  const footerLogo = screen.getByAltText(/small apartment app logo/)
  expect(footerLogo).toBeInTheDocument()
  expect(
    screen.getByRole("link", { name: "small apartment app logo" })
  ).toHaveAttribute("href", "/")

  const meetTheCatsLink = screen.getByText(/2024 Sarah Proctor | LEARN Academy/)
  expect(meetTheCatsLink).toBeInTheDocument()
})
