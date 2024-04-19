import React, { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ApartmentEdit from "./pages/ApartmentEdit.js"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew.js"
import ApartmentShow from "./pages/ApartmentShow"
import Home from "./pages/Home"
import MyApartments from "./pages/MyApartments"
import NotFound from "./pages/NotFound"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import "./App.css"

import mockApartments from "./mockApartments.js"

const App = () => {
  const navigate = useNavigate()
  const [apartments, setApartments] = useState(mockApartments)
  const [user, setUser] = useState(null)
  console.log(user)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser))
    }
    getApartments()
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
      if (payload.error === "Invalid Email or password.") {
        setUser("invalid")
        navigate("/signin")
      } else {
        localStorage.setItem(
          "token",
          signInResponse.headers.get("Authorization")
        )
        localStorage.setItem("user", JSON.stringify(payload))
        setUser(payload)
        navigate("/")
      }
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
  const getApartments = async () => {
    try {
      const getResponse = await fetch("http://localhost:3000/apartments")
      if (!getResponse.ok) {
        throw new Error(getResponse.errors)
      }
      const getResult = await getResponse.json()
      setApartments(getResult)
    } catch (error) {
      console.error("Error fetching apartment get request")
    }
  }
  const createApartment = async (apartment) => {
    try {
      const postResponse = await fetch("http://localhost:3000/apartments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apartment)
      })
      if (!postResponse.ok) {
        throw new Error(postResponse.errors)
      }
      await postResponse.json()
      getApartments()
    } catch (error) {
      console.error("Error fetching post data")
    }
  }
  const updateApartment = async (apartment, id) => {
    try {
      const editResponse = await fetch(
        `http://localhost:3000/apartments/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(apartment)
        }
      )
      if (!editResponse.ok) {
        throw new Error(editResponse.errors)
      }
      await editResponse.json()
      getApartments()
    } catch (error) {
      console.error("Error fetching apartment update request")
    }
  }
  const deleteApartment = async (id) => {
    try {
      const deleteResponse = await fetch(
        `http://localhost:3000/apartments/${id}`,
        {
          method: "DELETE"
        }
      )
      if (!deleteResponse.ok) {
        throw new Error(deleteResponse.errors)
      }
      getApartments()
    } catch (error) {
      console.error("Error fetching apartment delete request")
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
        {user && (
          <Route
            path="/my-apartments"
            element={
              <MyApartments
                apartments={apartments}
                deleteApartment={deleteApartment}
                user={user}
              />
            }
          />
        )}
        {user && (
          <Route
            path="/apartment-new"
            element={
              <ApartmentNew createApartment={createApartment} user={user} />
            }
          />
        )}
        {user && (
          <Route
            path="/apartment-edit/:id"
            element={
              <ApartmentEdit
                apartments={apartments}
                updateApartment={updateApartment}
                user={user}
              />
            }
          />
        )}
        <Route
          path="/signin"
          element={<SignIn signIn={signIn} user={user} />}
        />
        <Route path="/signup" element={<SignUp signUp={signUp} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
