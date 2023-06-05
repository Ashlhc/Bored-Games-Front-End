import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const [username, setUsername] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    const [friends, setFriends] = useState([]);
    const [searchInput, setSearchInput] = useState('');
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
        setFriends(data.friends);
      };

      const handleUsernameEdit = () => {
        const newUsername = prompt('Enter your new username:');
        setUsername(newUsername);
      };
     
      const handleSearch = () => {
        navigate.push(`/search?q=${searchInput}`);
      };

      const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfilePicture(reader.result);
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
          profilePicture: {
            marginBottom: '50px',
          },
      }


      return (
        <div style={styles.backgroundImage} className='background-image'>
            <div style={styles.container}>
            <h1>Welcome, {username}!</h1>
            {profilePicture && (
                <img src={profilePicture} alt='profile picture' style={styles.profilePicture} />
            )}
            {!profilePicture && (
                <div>
                    <p>No Profile Picture Selected</p>
                    <input type='file' accept="image/*" onChange={handleProfilePictureChange} />
                </div>
            )}

        </div>
        </div>
      );
};
export default ProfilePage;