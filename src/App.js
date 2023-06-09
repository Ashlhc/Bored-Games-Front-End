import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import HangMan from "./pages/HangMan.js";
import HangManAnyone from "./pages/HangManAnyone.js";
import Search from "./pages/Search.js";
import Navbar from './components/Navbar.js';

function App() {
  const [username, setUsername] = useState("");


  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/hangman" element={<HangMan />} /> */}
        <Route path="/hangmananyone" element={<HangManAnyone />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/host" element={<Host />} /> */}
        {/* <Route path="/join" element={<Join />} /> */}
        {/* <Route path="/practice" element={<Practice />} /> */}
    </Routes>
    </Router>
  );
}


export default App;