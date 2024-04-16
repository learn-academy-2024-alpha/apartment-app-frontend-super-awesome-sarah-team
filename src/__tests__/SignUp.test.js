import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import SignUp from "../pages/SignUp"

test("renders SignUp component", () => {
  render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  )

  const signInTitle = screen.getByText(/Create an Account/)
  expect(signInTitle).toBeInTheDocument()

  const username = screen.getByLabelText(/Enter Your Email/)
  expect(username).toBeInTheDocument()

  const password = screen.getByLabelText(/Enter Your Password/)
  expect(password).toBeInTheDocument()

  const passwordConfirmation = screen.getByLabelText(/Password Confirmation/)
  expect(passwordConfirmation).toBeInTheDocument()

  const submitButton = screen.getByText("Submit")
  expect(submitButton).toBeInTheDocument()
})
