import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NavButton from "../components/NavButton"

test("NavButton", () => {
  render(
    <BrowserRouter>
      <NavButton url="test" buttonContent="Test Button" />
    </BrowserRouter>
  )

  const navButton = screen.getByText("Test Button")
  expect(navButton).toBeInTheDocument()
  expect(screen.getByRole("link", { name: "Test Button" })).toHaveAttribute(
    "href",
    "/test"
  )
})
