import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../css/index.css';
import backgroundImgDesktop from '../assets/backgroundimg.png';
import backgroundImgMobile from '../assets/mobilebkgimg.png';
import backgroundImgTablet from '../assets/tabletbkgimg.png';

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
        margin: '0 auto',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    backgroundImage: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '100vh',
    },
   
};

return (
<div style={styles.backgroundImage} className="background-image">
<div style={styles.container}>
    <img src="./images/Hangman.png" alt='hangman' className='home-HangMan' />
    <div className="row">
        <div className="col">
                <div>
                    <button className='home-signinButton' onClick={loginChange}>
                        <img id="login-button" src="../images/SigninBtn.png" alt="login" />
                        </button> 
                </div>
                <div>
                    <button className='home-signupButton' onClick={signupChange}>
                        <img id="signup-button" src="./images/SignupBtn.png" alt="signup" />
                        </button>
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
