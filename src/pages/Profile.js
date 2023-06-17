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

const AvatarSelection = ({ avatars, onSelectAvatar }) => {
  const handleAvatarClick = (avatar) => {
    onSelectAvatar(avatar);
  };

  return (
    <div className='avatar-list'>
      {avatars.map((avatar) => (
        <img key={avatar.id} src={avatar.url} alt={avatar.name} onClick={() => handleAvatarClick(avatar)} />
      ))}
    </div>
  );
};

const AvatarBox = ({ avatars, onSelectAvatar }) => {
  return (
    <div className='avatar-box'>
      <AvatarSelection avatars={avatars} onSelectAvatar={onSelectAvatar} />
    </div>
  );
};

const ProfilePage = () => {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [avatarSelected, setAvatarSelected] = useState(false);
  const [following, setFollowing] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [showAvatarBox, setShowAvatarBox] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const avatars = [
    { id: 1, url:avatar1, name:'Avatar 1'},
    { id: 2, url:avatar2, name:'Avatar 2'},
    { id: 3, url:avatar3, name:'Avatar 3'},
    { id: 4, url:avatar4, name:'Avatar 4'},
    { id: 5, url:avatar5 ,name:'Avatar 5'},
    { id: 6, url:avatar6 ,name:'Avatar 6'},
    { id: 7, url:avatar7 ,name:'Avatar 7'},
    { id: 8, url:avatar8 ,name:'Avatar 8'},
    { id: 9, url:avatar9 ,name:'Avatar 9'},
    { id: 10, url:avatar10 ,name:'Avatar 10'},
    { id: 11, url:avatar11 ,name:'Avatar 11'},
    { id: 12, url:avatar12 ,name:'Avatar 12'},
    { id: 13, url:avatar13 ,name:'Avatar 13'},
    { id: 14, url:avatar14 ,name:'Avatar 14'},
    { id: 15, url:avatar15 ,name:'Avatar 15'},
    { id: 16, url:avatar16 ,name:'Avatar 16'},
    { id: 17, url:avatar17 ,name:'Avatar 17'},
    { id: 18, url:avatar18 ,name:'Avatar 18'},
    { id: 19, url:avatar19 ,name:'Avatar 19'},
    { id: 20, url:avatar20 ,name:'Avatar 20'},
  ];

  const handleAvatarClick = (avatar) => {
    setAvatar(avatar.url);
    setShowAvatarBox(false);
    setAvatarSelected(true);
  };

  const handleChooseAvatar = () => {
    setShowAvatarBox(true);
  };

  const fetchUserData = async () => {
    const response = await fetch('/user');
    const data = await response.json();

    const { username, avatar, wins, losses, following } = data;

    setUsername(username);
    setAvatar(avatar);
    setFollowing(following.map((user) => user.username));
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
            position: 'fixed',
            border: '10px solid white',
            borderBottomWidth: '75px',
            borderRadius: '0',
            padding: '0',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transform: 'rotate(-20deg)',
            top: '28%',
            left: '20%',
          },
          h2: {
            textAlign: 'center',
          },
          h3: {
            position: 'relative',
            top: '25%',
          },
          hangmanButton: {
            border: 'transparent',
            position: 'static',
          },
          avatarList: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: '2%',
          },
          avatarBox: {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.7)',
            zIndex: 999,
          },
          avatarContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: '2%',
          },
          avatarImage: {
            width: '80px',
            height: '80px',
            margin: '10px',
            cursor: 'pointer',
          },
      };


      return (
        <div style={styles.backgroundImage} className='background-image'>
          <div className='search'>
            <button onClick={handleSearch}>Find Friends</button>
          </div>
          <div style={styles.container}>
            {avatar && (
              <div style={styles.polaroid}>
                <img className='avatar' src={avatar} alt='avatar' />
              </div>
            )}
            {!avatar && (
              <div className='no-avatar'>
                <p>No Avatar Selected</p>
              </div>
            )}
            <div className='welcome'>
              <h1>Welcome {username}!</h1>
            </div>
            <div>
              <h2>{following}</h2>
              <img className='gallows-gang' id='gallows-gang' src='./images/GallowsGang.png' />
            </div>
            <div>
              <button className='hangman-button' style={styles.hangmanButton} onClick={hangmanChange}>
                <img id='hangman-button' src='./images/HangManBtn.png' alt='play hangman' />
              </button>
            </div>
            {!avatarSelected && !showAvatarBox && (
            <div>
              <button className='choose-avatar' onClick={handleChooseAvatar}>
                <h3>Choose Avatar:</h3>
              </button>
            </div>
            )}

            {showAvatarBox && (
              <div style={styles.avatarBox}>
                <div style={styles.avatarContainer}>
                <AvatarSelection avatars={avatars} style={styles.avatarImage} onSelectAvatar={handleAvatarClick} />
                </div>
              </div>
            )}
            </div>
            </div>
      );
    };
    
    export default ProfilePage;