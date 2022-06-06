import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Components/pages/HomePage'
import Login from './Components/pages/Login'
import SignUp from './Components/pages/SignUp'
import './App.scss';
import ForgotPassword from './Components/pages/ForgotPassword'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}

export default App