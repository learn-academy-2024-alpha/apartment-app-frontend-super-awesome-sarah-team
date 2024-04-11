import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

test("renders App component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )

  const headerElement = screen.getByRole("navigation", {
    className: "header-nav"
  })
  expect(headerElement).toBeInTheDocument()

  const footerElement = screen.getByRole("link", {
    name: "small apartment app logo"
  })
  expect(footerElement).toBeInTheDocument()
})
