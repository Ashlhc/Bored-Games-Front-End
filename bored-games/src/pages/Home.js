import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../css/index.css';
import backgroundImgDesktop from '../images/backgroundimg.png';
import backgroundImgMobile from '../images/mobilebkgimg.png';

export default function Home() {
    let navigate = useNavigate();

    const loginChange = () => {
        let path = `/login`;
        navigate(path);
    };
    const signupChange = () => {
        let path = `/signup`;
        navigate(path);
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

const backgroundImage = windowWidth <= 770 ? backgroundImgMobile : backgroundImgDesktop;

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    backgroundImage: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
    },
    signupButton: {
        margin: '-30px -20px',
        border: 'transparent',
        position: 'relative',
      },
    signinButton: {
        margin: '100px -20px',
        marginTop: '350px',
        border: 'transparent',
        position: 'relative',
    },
    HangMan: {
        position: 'absolute',
        top: '49.5%',
        left: '50%',
        transform: 'translate(-400%, -50%) translate(300px,100px)',
        width: '200px',
        height: '720px',
    },
};

return (
<div style={styles.backgroundImage} className="background-image">
<img src="./images/Hangman2.png" alt='hangman' style={styles.HangMan} />
<div style={styles.container}>
    <div className="row">
        <div className="col">
                <div>
                    <button style={styles.signinButton} onClick={loginChange}>
                        <img id="login-button" src="../images/SigninBtn.png" alt="login" />
                        </button> 
                </div>
                <div>
                    <button style={styles.signupButton} onClick={signupChange}>
                        <img id="signup-button" src="./images/SignupBtn.png" alt="signup" />
                        </button>
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
