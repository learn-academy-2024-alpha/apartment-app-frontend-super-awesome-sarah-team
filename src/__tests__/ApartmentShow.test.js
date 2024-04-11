import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import ApartmentShow from "../pages/ApartmentShow"
import mockApartments from "../mockApartments.js"

test("renders ApartmentShow component", () => {
  render(
    <MemoryRouter initialEntries={["/apartment/1"]}>
      <Routes>
        <Route
          path="/apartment/:id"
          element={<ApartmentShow apartments={mockApartments} />}
        />
      </Routes>
    </MemoryRouter>
  )
  const apartment = mockApartments.find((item) => item.id === 1)

  const apartmentImage = screen.getByAltText("apartment")
  expect(apartmentImage).toBeInTheDocument()
  expect(apartmentImage).toHaveAttribute("src", apartment.image)

  const apartmentPrice = screen.getByText(/1800/)
  expect(apartmentPrice).toBeInTheDocument()

  const address = screen.getByText(/101 Rimrock, 9A, Austin, TX/)
  expect(address).toBeInTheDocument()

  const bedAndBath = screen.getByText(/3 bedrooms | 2 bathrooms/)
  expect(bedAndBath).toBeInTheDocument()

  const squareFootage = screen.getByText(/500 square feet/)
  expect(squareFootage).toBeInTheDocument()

  const pets = screen.getByText(/Pet policy: pets okay with deposit/)
  expect(pets).toBeInTheDocument()
})
