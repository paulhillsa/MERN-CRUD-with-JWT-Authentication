// imports
import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import LogOutButton from "../auth/LogOutButton";
import {Nav, NavLink} from "react-bootstrap";

//Navbar component

function Navbar() {
// checks if logged in or not and then conditional rendering
  const { loggedIn } = useContext(AuthContext);

  return (
    <Nav className="navbar">
      {/* if not logged in show register and login  */}
      {loggedIn === false && (
        <div className='login-false-navbar'>
          <NavLink href="/"> Home </NavLink>
          <div className='register-button-navbar'>
            <NavLink href="/register" >Register</NavLink>
          </div>
          <div className='login-button-navbar'>
            <NavLink href="/login">Log in</NavLink>
          </div>
        </div>
      )}
      {/* if logged in show blogs and logout button */}
      {loggedIn === true && (
        <div className='login-true-navbar'>
          <NavLink href="/"> Home </NavLink>
          <NavLink href="/blogs">Blogs</NavLink>
          <div className='logout-button-navbar'>
            <LogOutButton id='logout-right' />
          </div>
        </div>
      )}
    </Nav>
  );
}

export default Navbar;