import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/index.css';

const ProfilePage = () => {
  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [following, setFollow] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [achievements, setAchievements] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
    // Fetch data from API or perform any other necessary initialization
  }, []);

  const fetchUserData = async () => {
    const response = await fetch('/user');
    const data = await response.json();

    setUsername(data.username);
    setProfilePicture(data.profilePicture);
    setWins(data.wins);
    setLosses(data.losses);
    setFollow(data.following);
    setAchievements(data.achievements);
  };

  const handleUsernameEdit = () => {
    const newUsername = prompt('Enter your new username:');
    setUsername(newUsername);
  };

  const handleSearch = () => {
    navigate.push(`/search?q=${searchInput}`);
  };
  const hangManAnyone = () => {
    let path = `/hangmananyone`;
    navigate(path);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > 250) {
              height *= 200 / width;
              width = 250;
            }
          } else {
            if (height > 200) {
              width *= 250 / height;
              height = 200;
            }
          }

          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          const resizedDataUrl = canvas.toDataURL('image/jpeg');

          setProfilePicture(resizedDataUrl);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

      const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          },
          backgroundImage: {
            backgroundImage: 'url(./images/backgroundimg.png)',
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
            top: '75px',
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
          button: {
            border: 'transparent',
          }
      };


      return (
        <div style={styles.backgroundImage} className='background-image'>
            <div style={styles.container}>
            <h1>Welcome {username}!</h1>
            {profilePicture && (
                <div style={styles.polaroid}>
                <img src={profilePicture} alt='profile picture' />
                </div>
            )}
            {!profilePicture && (
                <div>
                    <p>No Profile Picture Selected</p>
                    <input type='file' accept="image/*" onChange={handleProfilePictureChange} />
                </div>
            )}
            <div>
                <h2>{following} Following List</h2>
            </div>
            <div>
                <h2>{achievements} Achievements Earned</h2>
            </div>
            <div>
                <h3>{wins} AND {losses}</h3>
            </div>
            <div>
                <button style={styles.button} onClick={hangManAnyone}>
                    <img id="hangman-button" src="./images/HangManBtn.png" alt="play hangman" />
                </button>
            </div>

        </div>
        </div>
      );
};
export default ProfilePage;