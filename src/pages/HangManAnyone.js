import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/index.css';
import backgroundImgDesktop from '../images/backgroundimg.png';
import backgroundImgMobile from '../images/mobilebkgimg.png';
import backgroundImgTablet from '../images/tabletbkgimg.png';

export default function HangManAnyone() {
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

  useEffect(() => {
    const handleMediaQuery = (mediaQuery) => {
      if (mediaQuery.matches) {
        document.documentElement.style.setProperty('--button-width', '60%');
        document.documentElement.style.setProperty('--hangman-anyone-top', '20%');
        document.documentElement.style.setProperty('--hangman-left', '25%');
      } else {
        document.documentElement.style.setProperty('--button-width', '90%');
        document.documentElement.style.setProperty('--hangman-anyone-top', '-23%');
        document.documentElement.style.setProperty('--hangman-left', '50%');
      }
    };

    const mediaQuery = window.matchMedia('(max-width: 600px)');
    mediaQuery.addListener(handleMediaQuery);
    handleMediaQuery(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQuery);
    };
  }, []);

  const hostChange = () => {
    navigate('/host');
  };

  const joinChange = () => {
    navigate('/join');
  };

  const practiceChange = () => {
    navigate('/practice');
  };

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
      <img src="./images/HangManAnyone.png" alt="speech bubble" className="hangmananyone" />
      <div className="container">
        <div className='hangman-container'>
        <img src="./images/Hangman2.png" alt="hangman" className="hangman" />
        </div>
        <div className="row">
          <div className="col">
          <button className="practiceButton" onClick={practiceChange}>
              <img id="practice-button" src="./images/PracticeBtn.png" alt="practice" />
            </button>
            <button className="hostButton" onClick={hostChange}>
              <img id="host-button" src="./images/HostBtn.png" alt="host" />
            </button>
            <button className="joinButton" onClick={joinChange}>
              <img id="join-button" src="./images/JoinBtn.png" alt="join" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}