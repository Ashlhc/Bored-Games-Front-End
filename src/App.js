import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import SearchUser from "./pages/SearchUser.js";
import HangMan from "./pages/HangMan.js";
import HangManAnyone from "./pages/HangManAnyone.js";
import Search from "./pages/Search.js";
import Host from "./pages/Host.js";
import Join from "./pages/Join.js";
import Practice from "./pages/Practice.js";
import Navbar from './components/Navbar.js';
import API from "./utils/api.js";

function App() {
  const [userId, setUserId] = useState(-1);
  const [username, setUsername] = useState("")
  const [token, setToken] = useState("")

  useEffect(()=>{
    const storedToken = localStorage.getItem("token");
    API.getTokenData(storedToken).then(data=>{
      setToken(storedToken);
      setUserId(data.id);
      setUsername(data.username);
    }).catch(err=>{
      console.log("oh no")
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
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/searchuser" element={<SearchUser />} />

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