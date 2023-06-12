import Game from '../components/Game';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import useGameState from '../hooks/useGameState';
import '../css/index.css';

// Background Images based on screen sizes 
import backgroundImgDesktop from '../assets/backgroundimg.png';
import backgroundImgMobile from '../assets/mobilebkgimg.png';
import backgroundImgTablet from '../assets/tabletbkgimg.png';

import Accessories_image from '../assets/BodyParts/Accessories.png'
import Chest_image from '../assets/BodyParts/Chest.png'
import Hair_image from '../assets/BodyParts/Hair.png'
import Head_image from '../assets/BodyParts/Head.png'
import LeftArm_image from '../assets/BodyParts/LeftArm.png'
import LeftLeg_image from '../assets/BodyParts/LeftLeg.png'
import RightArm_image from '../assets/BodyParts/RightArm.png'
import RightLeg_image from '../assets/BodyParts/RightLeg.png'
import Rope_image from '../assets/Rope.png'
import Timer from '../components/Timer';

export default function HangMan({ duration = 120000 }) {
  const
    {
      word,
      correctGuesses,
      incorrectGuesses,
      setCorrectGuesses,
      setIncorrectGuesses,
      startGame,
      loseGame,
      winGame,
      state,
      wins,
      losses
    } = useGameState();

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

  const handleGuess = (letter) => {

    if (!word.includes(letter) && !incorrectGuesses.includes(letter)) {
      setIncorrectGuesses([...incorrectGuesses, letter]);

      // check if we lose
      if (incorrectGuesses.length + 1 >= 9) {
        loseGame()
      }
    }

    if (word.includes(letter) && !correctGuesses.includes(letter)) {
      setCorrectGuesses([...correctGuesses, letter]);
      // check if we win
      if (Array.from(new Set(word)).length === correctGuesses.length + 1) {
        winGame()
      }
    }

  };

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return (
    <div style={styles.backgroundImage} className="background-image">
      <div style={styles.container}>

        {
          (state === 'start' || state === 'win' || state === 'lose') &&

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyItems: 'center',
            alignItems: 'center',
            gap: '30px'
          }}>

            {
              state === 'win' &&
              <div>You win!</div>
            }

            {
              state === 'lose' &&
              <div>You lose!</div>
            }



            {/* win losess */}
            <div style={{
              display: 'flex'
            }}>
              {`Wins: ${wins} Losses: ${losses}`}
            </div>

            <button onClick={() => {
              startGame()
            }}>Start game</button>
            <button onClick={() => {
              navigate('/profile')
            }}>Back</button>
          </div>
        }

        {
          state === 'playing' &&
          <div style={{
            display: 'flex',

          }}>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyItems: 'center',
              alignItems: 'center',
              gap: '30px'
            }}>



              {/* game */}
              <div style={{
                display: 'flex'
              }}>


                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyItems: 'center',
                  alignItems: 'center'
                }}>
                  {/* Hangman image container */}
                  <div style={{
                    display: 'flex',
                    position: 'relative',
                    width: '300px',
                    height: '400px',
                    transform: 'translateX(140%) translateY(40%)'
                    
                  }}>
                  <img className='rope' src={Rope_image} />
                    {
                      incorrectGuesses.length > 0 &&
                      <img className='hangman-image head-image' src={Head_image} alt={'Head_image'} />
                    }
                    {
                      incorrectGuesses.length > 5 &&
                      <img className='hangman-image leftleg-image' src={LeftLeg_image} alt={'LeftArm_image'} />
                    }
                    {
                      incorrectGuesses.length > 4 &&
                      <img className='hangman-image rightleg-image' src={RightLeg_image} alt={'RightLeg_image'} />
                    }
                    {
                      incorrectGuesses.length > 1 &&
                      <img className='hangman-image chest-image' src={Chest_image} alt={'Chest_image'} />
                    }
                    {
                      incorrectGuesses.length > 2 &&
                      <img className='hangman-image leftarm-image' src={LeftArm_image} alt={'LeftArm_image'} />
                    }
                    {
                      incorrectGuesses.length > 3 &&
                      <img className='hangman-image rightarm-image' src={RightArm_image} alt={'RightArm_image'} />
                    }
                    {
                      incorrectGuesses.length > 6 &&
                      <img className='hangman-image hair-image' src={Hair_image} alt={'Hair_imsage'} />
                    }
                    {
                      incorrectGuesses.length > 7 &&
                      <img className='hangman-image accessory-image' src={Accessories_image} alt={'Accessories_image'} />
                    }
                  </div>

                  {/* Completed word */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '2px',
                    fontSize: '30px',
                    transform: 'translateX(175%) translateY(425%)',
                  }}>
                    {
                      word.split('').map((char, key) => {
                        if (correctGuesses.includes(char)) {
                          return <div key={key}>{char}</div>
                        }
                        return <div key={key}>_</div>
                      })
                    }
                  </div>
                </div>


                {/* Letter select */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyItems: 'center',
                  alignItems: 'center',
                  gap: '50px'
                }}>
                  <Timer onLoseGame={loseGame}/>

                  {/* show selectable leters */}
                  <div className='letters-container'>

                    {
                      alphabet.map((char, key) => {
                        let backgroundColor = 'none'

                        if (correctGuesses.includes(char)) {
                          backgroundColor = 'lightgreen'
                        }

                        if (incorrectGuesses.includes(char)) {
                          backgroundColor = 'red'
                        }

                        return (
                          <div
                            key={key}
                            onClick={() => {
                              handleGuess(char)
                            }}
                            className={`selectable-letter-container ${backgroundColor}`}
                          >
                            <div style={{
                              rotate: '-45deg'
                            }}>{char}</div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>

          </div>
        }
      </div>
    </div>
  );
}