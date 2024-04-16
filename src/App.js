import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentShow from "./pages/ApartmentShow"
import Home from "./pages/Home"
import MyApartments from "./pages/MyApartments"
import NotFound from "./pages/NotFound"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import "./App.css"

import mockApartments from "./mockApartments.js"

const App = () => {
  const [apartments, setApartments] = useState(mockApartments)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser))
    }
  }, [])

  const signIn = async (user) => {
    try {
      const signInResponse = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(user)
      })
      if (!signInResponse) {
        throw new Error(signInResponse.errors)
      }
      const payload = await signInResponse.json()
      localStorage.setItem("token", signInResponse.headers.get("Authorization"))
      localStorage.setItem("user", JSON.stringify(payload))
      setUser(payload)
    } catch (error) {
      console.error("Error fetching user sign in request")
    }
  }
  const signUp = async (user) => {
    try {
      const signUpResponse = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(user)
      })
      if (!signUpResponse) {
        throw new Error(signUpResponse.errors)
      }
      const payload = await signUpResponse.json()
      localStorage.setItem("token", signUpResponse.headers.get("Authorization"))
      localStorage.setItem("user", JSON.stringify(payload))
      setUser(payload)
    } catch (error) {
      console.error("Error fetching user sign up request")
    }
  }
  const signOut = async () => {
    try {
      const signOutResponse = await fetch("http://localhost:3000/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")
        }
      })
      if (!signOutResponse) {
        throw new Error(signOutResponse.errors)
      }
      await signOutResponse.json()
      setUser(null)
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    } catch (error) {
      console.error("Error fetching user sign out request")
    }
  }

  return (
    <>
      <Header user={user} signOut={signOut} />
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
        <Route path="/my-apartments" element={<MyApartments />} />
        <Route path="/signin" element={<SignIn signIn={signIn} />} />
        <Route path="/signup" element={<SignUp signIn={signIn} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
