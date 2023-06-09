import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: '10px',
      background: '',
    },
  }

  return (
    <nav style={styles.navbar}>
      {props.userId>0?<Link to={`/user/${props.username}`}>My profile</Link> :<Link to="/">Home</Link>}
      {props.userId>0?<Link to="/searchuser">Search</Link> : null}
      {props.userId>0?<button onClick={props.logout}>Logout</button> :<Link to="/about">About</Link>}
    </nav>
  )
}

export default Navbar