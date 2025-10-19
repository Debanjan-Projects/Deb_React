import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'


//hum logo ko dekhna hain ,jaishe hi app  load ho raha hain , user login hain eya nahi hain .dekh lenge hum logo ka state she .

//loading state create .

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

//dispatch() = “Send this action to the store to update the state.”
//dispatch jho hain combersure hain redux ko react ke sath kam karneke liye .




  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })

    //loading ka kam khatam karneke liye .
    .finally(() => setLoading(false))
  }, [])
  

//conditional rendering .
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        {/* TODO:  <Outlet /> // ehh ayegaa react router dom she . */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App