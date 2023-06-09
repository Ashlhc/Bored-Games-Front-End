// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../css/index.css';
// import backgroundImgDesktop from '../images/backgroundimg.png';
// import backgroundImgMobile from '../images/mobilebkgimg.png';
// import backgroundImgTablet from '../images/tabletbkgimg.png';

// export default function HangManAnyone() {
//   const navigate = useNavigate();
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleWindowResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleWindowResize);

//     return () => {
//       window.removeEventListener('resize', handleWindowResize);
//     };
//   }, []);


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
//     backgroundImage: {
//       backgroundImage: `url(${backgroundImage})`,
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//       backgroundSize: 'cover',
//       height: '100vh',
//     },
//   };

//   return (
//     <div style={styles.backgroundImage} className="background-image">
//       <img src="./images/HangManAnyone.png" alt="speech bubble" className="hangmananyone" />
//       <div className="container">
//         <div className='hangman-container'>
//         <img src="./images/Hangman.png" alt="hangman" className="hangman" />
//         </div>
//         <div className="row">
//           <div className="col">
          
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }