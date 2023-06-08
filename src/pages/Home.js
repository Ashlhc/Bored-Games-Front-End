import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../css/index.css';
import backgroundImgDesktop from '../images/backgroundimg.png';
import backgroundImgMobile from '../images/mobilebkgimg.png';
import backgroundImgTablet from '../images/tabletbkgimg.png';

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
   
};

return (
<div style={styles.backgroundImage} className="background-image">
<div style={styles.container}>
    <div className='hangman-container'>
    <img src="./images/Hangman2.png" alt='hangman' className='HangMan' />
    </div>
    <div className="row">
        <div className="col">
                <div>
                    <button className='signinButton' onClick={loginChange}>
                        <img id="login-button" src="../images/SigninBtn.png" alt="login" />
                        </button> 
                </div>
                <div>
                    <button className='signupButton' onClick={signupChange}>
                        <img id="signup-button" src="./images/SignupBtn.png" alt="signup" />
                        </button>
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
