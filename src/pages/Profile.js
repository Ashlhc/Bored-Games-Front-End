import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api';
import '../css/index.css';
import backgroundImgDesktop from '../assets/backgroundimg.png';
import backgroundImgMobile from '../assets/mobilepfbkg.png';
import backgroundImgTablet from '../assets/tabletpfbkg.png';

// import avatars
import avatar1 from '../assets/Avatars/gal1.png';
import avatar2 from '../assets/Avatars/dude1.png';
import avatar3 from '../assets/Avatars/gal2.png';
import avatar4 from '../assets/Avatars/dude2.png';
import avatar5 from '../assets/Avatars/gal3.png';
import avatar6 from '../assets/Avatars/dude3.png';
import avatar7 from '../assets/Avatars/gal4.png';
import avatar8 from '../assets/Avatars/dude4.png';
import avatar9 from '../assets/Avatars/gal5.png';
import avatar10 from '../assets/Avatars/dude5.png';
import avatar11 from '../assets/Avatars/gal6.png';
import avatar12 from '../assets/Avatars/dude6.png';
import avatar13 from '../assets/Avatars/gal7.png';
import avatar14 from '../assets/Avatars/dude7.png';
import avatar15 from '../assets/Avatars/gal8.png';
import avatar16 from '../assets/Avatars/dude8.png';
import avatar17 from '../assets/Avatars/gal9.png';
import avatar18 from '../assets/Avatars/dude9.png';
import avatar19 from '../assets/Avatars/gal10.png';
import avatar20 from '../assets/Avatars/dude10.png';

const ProfilePage = () => {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [following, setFollowing] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [avatarOptions, setAvatarOptions] = useState([]);
  const [showAvatarChoices, setShowAvatarChoices] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const fetchUserData = async () => {
    const response = await fetch('/user');
    const data = await response.json();

    const { username, avatar, wins, losses, following } = data;

    setUsername(username);
    setAvatar(avatar);
    setWins(wins);
    setLosses(losses);
    setFollowing(following);
    setAvatarOptions([avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9,
    avatar10, avatar11, avatar12, avatar13, avatar14, avatar15, avatar16, avatar17, avatar18, avatar19, avatar20 ]);
  };

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleSearch = () => {
    navigate(`/search?q=${searchInput}`);
  };

  const hangmanChange = () => {
    navigate('/hangman');
  };

  const handleAvatarChange = (option) => {
    setAvatar(option);
    setShowAvatarChoices(false);
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
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            color: 'white',
          },
          backgroundImage: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
          },
          polaroid: {
            border: '10px solid white',
            borderBottomWidth: '75px',
            borderRadius: '0',
            padding: '0',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transform: 'rotate(-20deg)',
            position: 'relative',
            top: '150px',
            left: '-400px',
          },
          h1: {
            textAlign: 'center',
          },
          h2: {
            textAlign: 'center',
          },
          h3: {
            textAlign: 'center',
          },
          hangmanButton: {
            border: 'transparent',
          }
      };


      return (
        <div style={styles.backgroundImage} className='background-image'>
          <div className="search">
            <input type='text' placeholder='find users...' />
            <button onClick={handleSearch}>Search</button>
          </div>
            <div style={styles.container}>

            {avatar && (
                <div style={styles.polaroid}>
                <img src={avatar} alt='avatar' />
                </div>
            )}
            {!avatar && (
                <div className='no-avatar'>
                    <p>No Avatar Selected</p>
                </div>
            )}
            
            <div className="welcome">
            <h1>Welcome {username}!</h1>
            </div>
            <div>
                <h2>{following}</h2>
                <img className="gallows-gang" id="gallows-gang" src="./images/GallowsGang.png" />
            </div>
            <div>
                <button className='hangman-button' style={styles.hangmanButton} onClick={hangmanChange}>
                    <img id="hangman-button" src="./images/HangManBtn.png" alt="play hangman" />
                </button>
            </div>
              <div>
                <button className="choose-avatar" onClick={() => setShowAvatarChoices(!showAvatarChoices)}>
                <h3>Choose Avatar:</h3>
                </button>
                {showAvatarChoices && (
  <div>
    {avatarOptions.map((option, index) => {
      return (
        <img
          key={index}
          src={option}
          alt={`Avatar ${index + 1}`}
          onClick={() => handleAvatarChange(option)}
        />
      );
    })}
  </div>
)}
              </div>
        </div>
        </div>
      );
};
export default ProfilePage;