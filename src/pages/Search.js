import React, { useState } from 'react';
import API from '../utils/api';
import backgroundImgDesktop from '../assets/backgroundimg.png';
import backgroundImgTablet from '../assets/tabletbkgimg.png';
import backgroundImgMobile from '../assets/mobilebkgimg.png';
import { useNavigate } from 'react-router';



const Search = () => {
const [query, setQuery] = useState('');
const [results, setResults] = useState([]);
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const navigate = useNavigate();

const handleSearch = async (e) => {
    e.preventDefault();
    try {
        const searchResults = await API.searchUsers(query);
        const updatedResults = searchResults.map((result) => ({
            ...result,
            isFollow: result.isFollow || false,
        }));
        setResults(updatedResults);
    } catch (error) {
        console.log('Error performing search:', error);
    }
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
      button: {
        backgroundColor: 'green',
        borderRadius: '25px',
        fontSize: '25px',
      },
      input: {
        fontSize: '25px',
      },
      follow: {
        fontSize: '35px',
      },
    };


    const handleFollow = async (id) => {
        try {
            console.log(localStorage.getItem('token'));
            await API.followUser(id);
            const updatedResults = await API.searchUsers(query);
            setResults(updatedResults);
        } catch (error) {
            console.log('Error following user:', error);
        }
    };

    const handleUnfollow = async (id) => {
        try {
            await API.deleteFollow(id);
            const updatedResults = await API.searchUsers(query);
            setResults(updatedResults);
        } catch (error) {
            console.log('Error unfollowing user:', error);
        }
    };

return (
    <div style={styles.backgroundImage}>
        <div style={styles.container}>
        <form className='searchForm'onSubmit={handleSearch}>
            <input style={styles.input} type="text" value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter search query" />
            <button style={styles.button} type="submit">Search</button>
            <button onClick={() => {
            navigate('/profile')
          }}>back</button>
        </form>

        {results.length > 0 ? (
            <ul>
                {results.map((result, index) => (
                    <li style={styles.follow} className='follow-list' key={index}>
                        {result.username}
                        {result.isFollow ? (
                            <button className='unfollow' style={styles.button} onClick={() => handleUnfollow(result.id)}>Unfollow</button>
                        ) : ( 
                            <button className='follow' style={styles.button} onClick={() => handleFollow(result.id)}>Follow</button>
                        )}
                    </li>
                ))}
            </ul>
        ) : (
            <p>No results found.</p>
        )}
    </div>
</div>
    )
};

export default Search;