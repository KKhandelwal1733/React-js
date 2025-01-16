import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 

  return (
    <UserContextProvider>
     <h1>Context Api project</h1>
     <Login></Login>
     <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
