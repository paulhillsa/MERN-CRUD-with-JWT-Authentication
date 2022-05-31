//App.js will be the main file for the client side
// it provides the context to all children components
// as well as render the router

import './App.css';
import React from 'react';
import Router from './Router';
import axios from 'axios';
import {AuthContextProvider} from './context/AuthContext';

axios.defaults.withCredentials = true;

function App() {
  return <>
    {/* Import react-bootstrap */}
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    {/* Provide Context to all routes */}
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
    </>;
}


export default App;
