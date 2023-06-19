import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import API from '../utils/api';
import backgroundImgDesktop from '../assets/backgroundimg.png';
import backgroundImgMobile from '../assets/mobilebkgimg.png';
import backgroundImgTablet from '../assets/tabletbkgimg.png';

const LoginForm = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameEdit = (e) => {
        setUsername(e.target.value);
    };
    const handlePasswordEdit = (e) => {
        setPassword(e.target.value);
    };
    const loginChange = async (e) => {
        e.preventDefault();

      try {
        const response = await API.login(username, password);
        const token = response.token;

        localStorage.setItem('token', token);

        navigate('/profile');
      } catch(error) {
        console.error('Login error:', error)
      }
  };
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
          window.removeEventListener('resize', handleWindowResize);
      };
  }, []);
  
  let backgroundImage;
  
  if (windowWidth >= 1920) {
      backgroundImage = backgroundImgDesktop;
  } else if (windowWidth >= 1280) {
      backgroundImage = backgroundImgDesktop;
  } else if (windowWidth >= 601) {
      backgroundImage = backgroundImgTablet;
  } else if (windowWidth >= 360) {
      backgroundImage = backgroundImgMobile;
  } else {
      backgroundImage = backgroundImgMobile;
  }

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    backgroundImage: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
    },
  };

  return (
    <div style={styles.backgroundImage} className="background-image">
      <div style={styles.container}>
        <div id='Login'>
          <button onClick={() => {
            navigate('/')
          }}>back</button>
          <div className='row'>
            <div className='col'>
          
            <label className='login-username' htmlFor='login-username'>USERNAME</label>
            <div>
            <input id="login-username" type="text" value={username} onChange={handleUsernameEdit}/>
            </div>

            <label className='login-password' htmlFor='login-password'>PASSWORD</label>

            <div>
            <input id='login-password' type="password" value={password} onChange={handlePasswordEdit}/>
            </div>
          <button className='login-button' onClick={loginChange}>
            <img id="login-button" src="./images/SigninBtn.png" alt="signin" />
          </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginForm;
