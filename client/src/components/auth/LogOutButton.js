//Logout button

import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {Button} from "react-bootstrap";

function LogOutButton() {

  //get context
  const { getLoggedIn } = useContext(AuthContext);
  const { getAdmin } = useContext(AuthContext);

  //enable navigate
  const navigate = useNavigate();

  //logout function
  async function logOut() {
    await axios.get("http://localhost:5000/auth/logout");
    //checks
    await getLoggedIn();
    await getAdmin();
    //navigate to landing page
    navigate("/");
  }

  //return log out button
  return <Button variant="outline-danger" onClick={logOut}>Log out</Button>;
}

export default LogOutButton;