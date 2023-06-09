import Game from '../components/Game';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import '../css/index.css';

// Import background images using require syntax
import backgroundImgDesktop from '../assets/backgroundimg.png';
import backgroundImgMobile from '../assets/mobilebkgimg.png';
import backgroundImgTablet from '../assets/tabletbkgimg.png';

export default function HangMan({ duration = 120000 }) {
  const word = 'HangMan'.toUpperCase();
  const alphabets = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [timeUp, setTimeUp] = useState(false);
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
    const timeout = setTimeout(() => {
      setTimeUp(true);
    }, duration);

    return () => clearTimeout(timeout);
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

  const BodyParts = [
    'Head.png',
    'Chest.png',
    'LeftArm.png',
    'RightArm.png',
    'LeftLeg.png',
    'RightLeg.png',
    'Hair.png',
    'Accessories.png',
  ];
  const BodyPartImages = BodyParts.map((bodyPart, index) => (
    <img key={index} src={`/images/BodyParts/${bodyPart}`} alt={bodyPart} />
  ));

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const letterButtons = Array.from(alphabet).map((letter) => (
    <button
      key={letter}
      onClick={() => handleGuess(letter)}
      className="letter-button"
    >
      <img src={`./images/letters/${letter}.png`} alt={letter} />
    </button>
  ));

  const handleGuess = (letter) => {
   if (!word.includes(letter) && !correctGuesses.includes(letter)) {
    setCorrectGuesses([...correctGuesses, letter]);

    if (correctGuesses.length === BodyParts.length - 1) {
        setTimeUp(true);
    }
   } else if (word.includes(letter) && !correctGuesses.includes(letter)) {
    setCorrectGuesses([...correctGuesses, letter]);
   }
  };

  const maskedWord = word
    .split('')
    .map((letter) => (correctGuesses.includes(letter) ? letter : '_'))
    .join(' ');

  return (
    <div style={styles.backgroundImage} className="background-image">
      <div style={styles.container}>
        <div className="row">
          <div className="col">
            <div>
              <p>{maskedWord}</p>
              {alphabets.map((alphabet, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (word.includes(alphabet)) {
                      setCorrectGuesses([...correctGuesses, alphabet]);
                    }
                  }}
                >
                  {alphabet}
                </button>
              ))}
              {timeUp ? (
                <p>You Lost!</p>
              ) : !maskedWord.includes('_') && <p>You Won!</p>}
            </div>
            {BodyPartImages}
          </div>
        </div>
        <div className="row">
          <div className="col">{letterButtons}</div>
        </div>
      </div>
    </div>
  );
}