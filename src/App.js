import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ApartmentIndex from "./pages/ApartmentIndex.js"
import ApartmentShow from "./pages/ApartmentShow.js"
import Home from "./pages/Home.js"
import NotFound from "./pages/NotFound.js"

import mockApartments from "./mockApartments.js"
import SignIn from "./pages/SignIn.js"

const App = () => {
  const [apartments, setApartments] = useState(mockApartments)
  const [user, setUser] = useState(null)
  console.log(user)

  const signIn = async (user) => {
    // send an external request in a try block
    try {
      // fetch data
      const signInResponse = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(user)
      })
      // handle error from fetch
      if (!signInResponse.ok) {
        throw new Error(signInResponse.errors)
      }
      // await arrival of payload
      const payload = await signInResponse.json()
      // set token into browser storage
      localStorage.setItem("token", signInResponse.headers.get("Authorization"))
      localStorage.setItem("user", JSON.stringify(payload))
      // set user
      setUser(payload)
      // handle failure of promise to resolve
    } catch (error) {
      console.error("Error fetching data:", error.message)
    }
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/apartments"
          element={<ApartmentIndex apartments={apartments} />}
        />
        <Route
          path="/apartment/:id"
          element={<ApartmentShow apartments={apartments} />}
        />
        <Route path="/signin" element={<SignIn signIn={signIn} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
