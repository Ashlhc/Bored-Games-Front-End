import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/index.css';
import backgroundImgDesktop from '../images/backgroundimg.png';
import backgroundImgMobile from '../images/mobilebkgimg.png';

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };
    const navigate = useNavigate();

    const signupChange = () => {
        navigate("/signup");
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!username || !firstName || !lastName || !password || !confirmPassword) {
            alert('Must fill in all fields');
            return;
        }
    
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }
    
        if (password !== confirmPassword) {
            alert('Password and Confirm Password must match');
            return;
        }
    
        // Check if the username is already taken
        const response = await fetch(`/api/users/user/${username}`, {
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
            const signupResponse = await fetch('/api/users/signup', {
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
                // Signup successful, redirect to login page or perform any other necessary actions
                alert('Signup successful! Redirect to login page.');
                // Add your code here to redirect or perform other actions
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

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        backgroundImage: {
            backgroundImage: `url(${backgroundImgDesktop})`,
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
                        <div>
                          <label htmlFor='signup-username' style={styles.label}>USERNAME</label>
                        </div>
                        <div>
                            <input style={styles.input} id="signup-username" type="text" value={username} onChange={handleUsernameChange}></input>
                        </div>
                        <div>
                            <label style={styles.label} htmlFor='first-name'>FIRST-NAME</label>
                        </div>
                        <div>
                            <input style={styles.input} id="first-name" type="text" value={firstName} onChange={handleFirstNameChange}></input>
                        </div>
                        <div>
                            <label style={styles.label} htmlFor='last-name'>LAST-NAME</label>
                        </div>
                            <div>
                                <input style={styles.input} id="last-name" type="text" value={lastName} onChange={handleLastNameChange}></input>
                            </div>
                        <div>
                            <label style={styles.label} htmlFor='signup-password'>PASSWORD</label>
                        </div>
                            <div>
                                <input style={styles.input} id='signup-password' type="password" value={password} onChange={handlePasswordChange}></input>
                            </div>
                        <div>
                            <label style={styles.label} htmlFor='confirm-password'>CONFIRM-PASSWORD</label>
                        </div>
                            <div>
                                <input style={styles.input} id='confirm-password' type="password" value={confirmPassword} onChange={handleConfirmPasswordChange}></input>
                            </div>
                    </div>
                  </div>                    
                    <button style={styles.button} type="submit" onClick={signupChange}>
                        <img id="signup-button" src="./images/SignupBtn.png" alt="signup" />
                    </button>
              </div>
        </div>
        </div>
    );
};

export default SignUpForm;