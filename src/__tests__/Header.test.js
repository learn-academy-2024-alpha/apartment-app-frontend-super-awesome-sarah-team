import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header"
import mockUser from "../mockUsers"

describe("Header component", () => {
  test("renders Header component logo and links for a valid user", () => {
    render(
      <BrowserRouter>
        <Header user={mockUser[0]} />
      </BrowserRouter>
    )

    const logo = screen.getByAltText(
      /stylized outline of house with two trees/i
    )
    expect(logo).toBeInTheDocument()

    const availableApartmentLink = screen.getByText(/available apartments/i)
    expect(availableApartmentLink).toBeInTheDocument()
    expect(availableApartmentLink.getAttribute("href")).toBe("/apartments")

    const myApartmentsLink = screen.getByText(/my apartments/i)
    expect(myApartmentsLink).toBeInTheDocument()
    expect(myApartmentsLink.getAttribute("href")).toBe("/my-apartments")

    const signOutButton = screen.getByText(/sign out/i)
    expect(signOutButton).toBeInTheDocument()
  })
  test("renders Header component logo and links for no user", () => {
    render(
      <BrowserRouter>
        <Header user={null} />
      </BrowserRouter>
    )

    const logo = screen.getByAltText(
      /stylized outline of house with two trees/i
    )
    expect(logo).toBeInTheDocument()

    const availableApartmentLink = screen.getByText(/available apartments/i)
    expect(availableApartmentLink).toBeInTheDocument()
    expect(availableApartmentLink.getAttribute("href")).toBe("/apartments")

    const signInLink = screen.getByText(/sign in/i)
    expect(signInLink).toBeInTheDocument()
    expect(signInLink.getAttribute("href")).toBe("/signin")

    const signUpButton = screen.getByText(/sign up/i)
    expect(signUpButton).toBeInTheDocument()
  })
})
