const BASEURL = 'https://uw-bootcamp-bored-games.herokuapp.com/api/user';

const API = {
  getTokenData: async (token) => {
    const response = await fetch(`${BASEURL}/user/gettokendata`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

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

  createUser: async (username, firstName, lastName, password) => {
    const response = await fetch(`${BASEURL}/user/signup`, {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        firstName: firstName,
        lastName: lastName,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },


  getSingleUser: async (username) => {
    const response = await fetch(`${BASEURL}/user/search/${username}`, {
      method: 'GET',
    });
    return response.json();
  },

  getUsers: async () => {
    const response = await fetch(`${BASEURL}/user`, {
      method: 'GET',

    });
    return response.json();
  },

  addProfilePicture: async (username, photoData) => {
    const formData = new FormData();
    formData.append('photo', photoData);

    const response = await fetch(`${BASEURL}/api/users/${username}/photos`, {
      method: 'POST',
      body: formData,
    });
    return response.json();
  },

 

 followUser: async (id) => {
    const response = await fetch(`${BASEURL}/user/follow/${id}`, {
      method: 'POST',
      body: JSON.stringify({ ok: true }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },

  deleteFollow: async (id) => {
    const response = await fetch(`${BASEURL}/user/follow/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    });
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