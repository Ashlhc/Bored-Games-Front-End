
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import '../css/index.css';
import backgroundImgDesktop from '../images/backgroundimg.png';
import backgroundImgMobile from '../images/mobilebkgimg.png';
import backgroundImgTablet from '../images/tabletbkgimg.png';

export default function HangMan() {
    const navigate = useNavigate();
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

    const bodyParts = [
        'Chest.png',
        'Glasses.png',
        'Hair.png',
        'Hat.png',
        'Head.png',
        'LeftArm.png',
        'LeftEye1.png',
        'LeftLeg.png',
        'Mustache.png',
        'RightArm.png',
        'RightEye.png',
        'RightLeg.png',
        'Rope.png',
        'Tie.png'
    ];
    const bodyPartImages = bodyParts.map((bodyPart, index) => (
        <img key={index} src={`./images/BodyParts/${bodyPart}`} alt={bodyPart} />
    ));

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letterButtons = Array.from(alphabet).map((letter) => {
        <button key ={letter} onClick={() => handleGuess(letter)} className="letter-button">
            <img src={`./images/letters/${letter}.png`} alt={letter} />
        </button>
    });

    const handleGuess = (letter) => {

    };


    return (
        <div style={styles.backgroundImage} className="background-image">
            <div style={styles.container}>
            <img src='./images/HangManAnyone.png' alt="speech bubble" className='hangmananyone' />
            <div className='container'>
                <img src="./images/Hangman.png" alt='hangman' className='hangman' />
            </div>
            <div className='row'>
                <div className='col'>
                {bodyPartImages}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {letterButtons}
                </div>
            </div>
        </div>
        </div>
    );
    }