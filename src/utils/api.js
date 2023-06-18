const BASEURL = 'https://uw-bootcamp-bored-games.herokuapp.com/api';

const API = {
  login: async (username, password) => {
    const response = await fetch(`${BASEURL}/user/login`, {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  signup: async (username, firstName, lastName, password) => {
    const response = await fetch(`${BASEURL}/user/signup`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        firstName,
        lastName,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },


  getSingleUser: async (username) => {
    const response = await fetch(`${BASEURL}/user/${username}`);
    return response.json();
  },

  getUsers: async () => {
    const response = await fetch(`${BASEURL}/`);
    return response.json();
  },
  
  searchUsers: async (partialUsername) => {
    const response = await fetch(`${BASEURL}/user/search/${partialUsername}`);
    return response.json();
  },

 getCurrentUser: async () => {
  const response = await fetch(`${BASEURL}/user/current`);
  return response.json();
 },

 followUser: async (id) => {
    const response = await fetch(`${BASEURL}/user/follow/${id}`, {
      method: 'POST',
      body: '{}',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },

  deleteFollow: async (id) => {
    const response = await fetch(`${BASEURL}/user/unfollow/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    });
    return response.json();
  },

  getFollowing: async () => {
    const response = await fetch(`${BASEURL}/user/following`);
    return response.json();
  },

  createGame: async (oponentId, maxGuessCount, word) => {
    const response = await fetch(`${BASEURL}/game`, {
      method: 'POST',
      body: JSON.stringify({
        oponentId: oponentId,
        maxGuessCount: maxGuessCount,
        word: word,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json;
  },

  makeGuess: async (gameId, letter) => {
    const response = await fetch(`${BASEURL}/game/guess_letter/${gameId}`, {
      method: 'POST',
      body: JSON.stringify({
        letter: letter,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },
};

export default API;
