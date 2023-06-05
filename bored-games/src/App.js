import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";


function App() {
  const [username, setUsername] = useState("");


  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
    </Routes>
    </Router>
  );
}


export default App;