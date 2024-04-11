import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header"

test("renders Header component logo and appropriate links", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  const logo = screen.getByAltText(/stylized outline of house with two trees/i)
  expect(logo).toBeInTheDocument()

  const availableApartmentLink = screen.getByText(/available apartments/i)
  expect(availableApartmentLink).toBeInTheDocument()
  expect(availableApartmentLink.getAttribute("href")).toBe("/apartments")

  const signInLink = screen.getByText(/sign in/i)
  expect(signInLink).toBeInTheDocument()
  expect(signInLink.getAttribute("href")).toBe("/signin")

  const signUpButton = screen.getByText("Sign Up")
  expect(signUpButton).toBeInTheDocument()
})
