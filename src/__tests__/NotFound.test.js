import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound"
import key from "../assets/key.png"

test("renders NotFound component", () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  )

  const titleText = screen.getByText(/Oops, Wrong Address/)
  expect(titleText).toBeInTheDocument()

  const navButton = screen.getByText(/Back to Listings/)
  expect(navButton).toBeInTheDocument()

  const keyImage = screen.getByAltText("gold skeleton key")
  expect(keyImage).toBeInTheDocument()
  expect(keyImage).toHaveAttribute("src", key)
})
