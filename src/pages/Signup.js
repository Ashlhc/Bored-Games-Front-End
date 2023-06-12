import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/index.css';
import backgroundImgDesktop from '../assets/backgroundimg.png';
import backgroundImgMobile from '../assets/mobilebkgimg.png';
import backgroundImgTablet from '../assets/tabletbkgimg.png';

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!username || !firstName || !lastName || !password ) {
            alert('Must fill in all fields');
            return;
        }
    
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }


        // Check if the username is already taken
        const response = await fetch(`/api/user/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
        const json = await response.json();
    
        if (json !== null) {
            alert('Username already taken!');
            return;
        }
    
        // If all checks pass, proceed with signup
        try {
            const signupResponse = await fetch('/user/signup', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    firstName: firstName,
                    lastName: lastName,
                    password: password,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (signupResponse.ok) {

                navigate('/profile');

                // save user state here
                const token = response.token;
                const user = response.user;

                localStorage.setItem('token', token);
                localStorage.setItem('user', user);
``
            } else {
                // Signup failed, display error message or perform any other necessary actions
                alert('Signup failed. Please try again.');
                // Add your code here to handle the signup failure
            }
        } catch (error) {
            // Error occurred during signup request, display error message or perform any other necessary actions
            console.error('Signup error:', error);
            alert('An error occurred during signup. Please try again later.');
            // Add your code here to handle the signup error
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

        label: {
            width: '150px',
            marginRight: '100px',
            marginLeft: '-400px',
            textAlign: 'right',
            whiteSpace: 'nowrap',
            color: 'white',

        },
        input: {
            border: 'solid black 7.5px',
            borderRadius: '25px',
        },
        button: {
            border: 'transparent',
            position: 'relative',
            alignItems: 'center',
        },
    };

    return (
        <div style={styles.backgroundImage} className="background-image">
            <div id='Signup'>
                <div style={styles.container}>
                    <div className="row">
                    <div className="col">
                       
                          <label className='signup-username' htmlFor='signup-username' style={styles.label}>USERNAME</label>
                      
                        <div>
                            <input style={styles.input} id="signup-username" type="text" value={username} onChange={handleUsernameChange}></input>
                        </div>
                       
                            <label className='signup-first-name' style={styles.label} htmlFor='first-name'>FIRST-NAME</label>
                      
                        <div>
                            <input style={styles.input} id="first-name" type="text" value={firstName} onChange={handleFirstNameChange}></input>
                        </div>
                       
                            <label className='signup-last-name' style={styles.label} htmlFor='last-name'>LAST-NAME</label>
                       
                            <div>
                                <input style={styles.input} id="last-name" type="text" value={lastName} onChange={handleLastNameChange}></input>
                            </div>
                      
                            <label className='signup-password' style={styles.label} htmlFor='signup-password'>PASSWORD</label>
                       
                            <div>
                                <input style={styles.input} id='signup-password' type="password" value={password} onChange={handlePasswordChange}></input>
                            </div>
                    </div>
                  </div>                    
                    <button className="signup-signupButton"style={styles.button} type="submit" onClick={handleSignUp}>
                        <img id="signup-button" src="./images/SignupBtn.png" alt="signup" />
                    </button>
              </div>
        </div>
        </div>
    );
};

export default SignUpForm;