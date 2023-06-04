import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/Search";
import API from "./utils/api";


function App() {
  const [username, setUsername] = useState("");

  const performSearch = async (query) => {
    try {
      const searchResults = await API.search(query);
    } catch (error) {

    }
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/search">
          <SearchPage performSearch={performSearch} />
          </Route>
      </Switch>
    </Router>
  );
}


export default App;