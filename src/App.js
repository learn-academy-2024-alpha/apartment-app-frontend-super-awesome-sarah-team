import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import mockApartments from "./mockApartments.js"
import mockUsers from "./mockUsers.js"

const App = () => {
  const [apartments, setApartments] = useState(mockApartments)
  const [user, setUser] = useState(mockUsers[0])

  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App
