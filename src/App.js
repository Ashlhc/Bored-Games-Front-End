import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import API from "./utils/api.js";
import HangMan from "./pages/HangMan.js"
import Search from "./pages/Search.js";
import Navbar from './components/Navbar.js';
function App() {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(-1);
  const [token, setToken] = useState("")

  useEffect(()=>{
    const storedToken = localStorage.getItem("token");
    API.getTokenData(storedToken).then(data=>{
      setToken(storedToken);
      setUserId(data.id);
      setUsername(data.username);
    }).catch(err=>{
      console.log("oops")
      console.log(err)
     logout();
    })
  },[])

  const logout = ()=>{
    localStorage.removeItem("token")
      setToken(null);
      setUsername(null);
      setUserId(0);
  }

  return (
    <Router>
      <Navbar userId={userId} username={username} logout={logout}/>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/user/:username" element={<Profile userId={userId} token={token}q/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hangman" element={<HangMan />} />
        <Route path="/search" element={<Search />} />
    </Routes>
    </Router>
  );
}


export default App;