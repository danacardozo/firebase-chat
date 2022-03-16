import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import React, {useState} from "react";
import Home from "./pages/Home";
import Login from "./pages/Login"; 
import Register from './pages/Register';
import Navbar from './components/NavBar'; 

function App() {
   

   
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
