import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api'
import backgroundImgDesktop from '../images/backgroundimg.png';
import backgroundImgMobile from '../images/mobilepfbkg.png';
import backgroundImgTablet from '../images/tabletpfbkg.png';

  const SearchUser = (props) => {
  const [searhData, setSearchData] = useState([])
  const [searchField, setSearchField] = useState('')
  const navigate = useNavigate()

  const handleInput = (e) => {
    const {name, value} = e.target
    console.log(handleInput)
    if (name === 'searchField'){
      return setSearchField(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    search(searchField)
    .then(data => {
      console.log(data)
      setSearchData(data)
    })
  }

  const search = async (query) => {
    return await API.search(query)
  }
  
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
      backgroundImage: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
      },
      bar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      },
      btn: {
        padding: '5px',
        borderRadius: '5px',
        marginBottom: '350px',
        backgroundColor: '#EF4423'
      }
  }

  return (
    <div style={styles.backgroundImage} className='background-image'>
      <div style={styles.bar} >
        <form>
          <input name='searchField' type='text' value={searchField} 
          onChange={handleInput} placeholder='Search username' />
          <button style={styles.btn} onClick={handleSubmit}>Search</button>
        </form>
        {searhData.map(user => {
          return <a href={`/api/users/${username}`} key={user.id}></a>
        })}
      </div>
    </div>
  )
}

export default SearchUser