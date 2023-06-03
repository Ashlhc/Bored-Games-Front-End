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

      return (
        <div>
            <nav>
                <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
            </nav>

            <h2>Profile Page</h2>
            <div>
                <h3> Username: {username}</h3>
                <button onClick={handleUsernameEdit}>Edit Username</button>
            </div>
            <div>
                <img src={profilePicture} alt="Profile" />
                </div>
            <div>
                <h3>Wins: {wins}</h3>
                <h3>Losses: {losses}</h3>
            </div>
            <div>
                <h3>Friends</h3>
                {friends.map((friend) => (
                    <div key={friend.id}>
                        <img src={friend.profilePicture} alt={friend.name}/>
                        <span>{friend.name}</span>
                        </div>
                ))}

            </div> 
        </div>
      );
}

export default ProfilePage;