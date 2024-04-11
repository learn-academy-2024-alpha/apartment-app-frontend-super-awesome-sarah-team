import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home.js"
import NotFound from "./pages/NotFound.js"

import mockApartments from "./mockApartments.js"
import mockUsers from "./mockUsers.js"

const App = () => {
  const [apartments, setApartments] = useState(mockApartments)
  const [user, setUser] = useState(mockUsers[0])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
