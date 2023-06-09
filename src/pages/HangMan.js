
// import Game from '../components/Game';
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router';
// import useGameState from '../hooks/useGameState';
// import '../css/index.css';

// // Background Images based on screen sizes 
// import backgroundImgDesktop from '../assets/backgroundimg.png';
// import backgroundImgMobile from '../assets/mobilebkgimg.png';
// import backgroundImgTablet from '../assets/tabletbkgimg.png';

// // Import letter images 
// import letterA from '../assets/letters/A.png';
// import letterB from '../assets/letters/B.png';
// import letterC from '../assets/letters/C.png';
// import letterD from '../assets/letters/D.png';
// import letterE from '../assets/letters/E.png';
// import letterF from '../assets/letters/F.png';
// import letterG from '../assets/letters/G.png';
// import letterH from '../assets/letters/H.png';
// import letterI from '../assets/letters/I.png';
// import letterJ from '../assets/letters/J.png';
// import letterK from '../assets/letters/K.png';
// import letterL from '../assets/letters/L.png';
// import letterM from '../assets/letters/M.png';
// import letterN from '../assets/letters/N.png';
// import letterO from '../assets/letters/O.png';
// import letterP from '../assets/letters/P.png';
// import letterQ from '../assets/letters/Q.png';
// import letterR from '../assets/letters/R.png';
// import letterS from '../assets/letters/S.png';
// import letterT from '../assets/letters/T.png';
// import letterU from '../assets/letters/U.png';
// import letterV from '../assets/letters/V.png';
// import letterW from '../assets/letters/W.png';
// import letterX from '../assets/letters/X.png';
// import letterY from '../assets/letters/Y.png';
// import letterZ from '../assets/letters/Z.png';



// export default function HangMan({ duration = 120000 }) {
//   const 
//   { word, 
//     correctGuesses, incorrectGuesses, setCorrectGuesses, 
//     setIncorrectGuesses, startGame, endGame } = useGameState();
//  const [timeUp, setTimeUp] = useState(false);
//  const navigate = useNavigate();
//  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//  useEffect(() => {
//     startGame();
//  }, []);

//   useEffect(() => {
//     const handleWindowResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleWindowResize);

//     return () => {
//       window.removeEventListener('resize', handleWindowResize);
//     };
//   }, []);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setTimeUp(true);
//     }, duration);

//     return () => clearTimeout(timeout);
//   }, [duration]);


//   useEffect(() =>  {
//     const timeout = setTimeout(() => {
//         endGame();
//     }, duration);

//     return () => clearTimeout(timeout);
//   }, [duration]);



//   let backgroundImage;

//   if (windowWidth >= 1920) {
//     backgroundImage = backgroundImgDesktop;
//   } else if (windowWidth >= 1280) {
//     backgroundImage = backgroundImgDesktop;
//   } else if (windowWidth >= 601) {
//     backgroundImage = backgroundImgTablet;
//   } else if (windowWidth >= 360) {
//     backgroundImage = backgroundImgMobile;
//   } else {
//     backgroundImage = backgroundImgMobile;
//   }

//   const styles = {
//     container: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       height: '100vh',
//     },
//     backgroundImage: {
//       backgroundImage: `url(${backgroundImage})`,
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//       backgroundSize: 'cover',
//       height: '100vh',
//     },
//   };

//   const BodyParts = [
//     'Head.png',
//     'Chest.png',
//     'LeftArm.png',
//     'RightArm.png',
//     'LeftLeg.png',
//     'RightLeg.png',
//     'Hair.png',
//     'Accessories.png',
//   ];
//   const BodyPartImages = BodyParts.map((bodyPart, index) => (
//     <img key={index} src={`/images/BodyParts/${bodyPart}`} alt={bodyPart} />
//   ));

//   const handleGuess = (letter) => {
//     if (!word.includes(letter) && !incorrectGuesses.includes(letter)) {
//       setIncorrectGuesses([...incorrectGuesses, letter]);

//       if (correctGuesses.length === BodyParts.length - 1) {
//         setTimeUp(true);
//       }
//     } else if (word.includes(letter) && !correctGuesses.includes(letter)) {
//       setCorrectGuesses([...correctGuesses, letter]);
//     } else if (!incorrectGuesses.includes(letter)) {
//         setIncorrectGuesses([...incorrectGuesses, letter]);
//     }
//   };

//   const maskedWord = word
//     .split('')
//     .map((letter) => (correctGuesses.includes(letter) ? letter : '_'))
//     .join(' ');

//     const letterImagesMap = {
//         A: letterA,
//         B: letterB,
//         C: letterC,
//         D: letterD,
//         E: letterE,
//         F: letterF,
//         G: letterG,
//         H: letterH,
//         I: letterI,
//         J: letterJ,
//         K: letterK,
//         L: letterL,
//         M: letterM,
//         N: letterN,
//         O: letterO,
//         P: letterP,
//         Q: letterQ,
//         R: letterR,
//         S: letterS,
//         T: letterT,
//         U: letterU,
//         V: letterV,
//         W: letterW,
//         X: letterX,
//         Y: letterY,
//         Z: letterZ,
//     };
    
//     const alphabets = Object.keys(letterImagesMap).map((letter) => ({
//         letter,
//         image: letterImagesMap[letter], 
//       }));

//       const rows = [
//         { start: "A", end: "G"},
//         { start: "H", end: "M"},
//         { start: "N", end: "T"},
//         { start: "U", end: "Z"},
//       ];

//   return (
// <div style={styles.backgroundImage} className="background-image">
//   <div style={styles.container}>
//     {rows.map((row, rowIndex) => (
//       <div key={rowIndex} className="row">
//           {alphabets
//             .filter(
//               (letterObj) =>
//                 letterObj.letter >= row.start && letterObj.letter <= row.end
//             )
//             .map((letterObj) => (
//               <button
//                 key={letterObj.letter}
//                 onClick={() => handleGuess(letterObj.letter)}
//                 className="letter-button"
//               >
//                 <img src={letterObj.image} alt={letterObj.letter} />
//               </button>
//             ))}
//         </div>
//     ))}
//   </div>
// </div>
//   )}

// import Game from "../components/Game";

// export default function HangMan(){
//     return <Game />
// }

