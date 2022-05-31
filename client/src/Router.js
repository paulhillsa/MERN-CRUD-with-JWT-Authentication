// My Router file which holds all my routes to components

import React, {useContext} from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Navbar from './components/layout/Navbar'
import AuthContext from "./context/AuthContext";
import Blogs from './components/blogs/Blogs'
import LandingPage from './components/landingPage/LandingPage'

function Router() {
  // require loggedIn context to see if user is logged in or not 
  // and then display conditional rendering due to the fact
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {/* Always Navbar */} 
      <Navbar />
      <Routes>

          {/* Always show Landing Page and let it have a / route*/}
          <Route path='/' element={<LandingPage />} />

          {/* If user is not logged in, show register and login components */} 
          {loggedIn === false && (
            <>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </>
          )}

          {/* Only show Blogs component if user is logged in */}
          {loggedIn === true && (
            <Route path='/blogs' element={<Blogs />} />
          )}

        </Routes>
    </BrowserRouter>
  )
}

export default Router
