// Context component (this will be sent to App.js and subsequently all children components as seen in App.js)

// Checks if logged in or not
// true or false 
// As well as, if admin or not
// true or false

//imports
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [admin, setAdmin] = useState(undefined);

  //server check for logged in
  async function getLoggedIn() {
    const loggedInRes = await axios.get("http://localhost:5000/auth/loggedIn");
    setLoggedIn(loggedInRes.data);
    console.log(loggedInRes.data + 'login');
  }
  //server check for admin
  async function getAdmin() {
    const adminRes = await axios.get("http://localhost:5000/auth/admin");
    setAdmin(adminRes.data);
    console.log(adminRes.data + 'admin');
  }

  // frontend check
  useEffect(() => {
    getLoggedIn();
    getAdmin();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn, admin, getAdmin}}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };