const BASEURL = 'https://stirring-semifreddo-28e858.netlify.app/';

const API = {
  getTokenData: async (token) => {
    const response = await fetch(`${BASEURL}/gettokendata`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  login: async (username, password) => {
    const response = await fetch(`${BASEURL}/login`, {
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

  createUser: async (username, firstName, lastName, password, confirmPassword) => {
    const response = await fetch(`${BASEURL}/api/users/signup`, {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        firstName: firstName,
        lastName: lastName,
        password: password,
        confirmPassword: confirmPassword,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  editProfile: async (username, newProfile) => {
    const formData = new FormData();
    if (newProfile.photo) {
      formData.append('photo', newProfile.photo);
    }
    if (newProfile.username) {
      formData.append('username', newProfile.username);
    }

    const response = await fetch(`${BASEURL}/api/users/${username}/editProfile`, {
      method: 'PUT',
      body: formData,
    });
    return response.json();
  },

  getSingleUser: async (username) => {
    const response = await fetch(`${BASEURL}/api/users/${username}`);
    return response.json();
  },

  getUsers: async () => {
    const response = await fetch(`${BASEURL}/api/users`);
    return response.json();
  },

  addProfilePicture: async (username, photoData) => {
    const formData = new FormData();
    formData.append('photo', photoData);

    const response = await fetch(`${BASEURL}/api/users/${username}/addPhoto`, {
      method: 'POST',
      body: formData,
    });
    return response.json();
  },

  followUser: async (follower, following) => {
    const response = await fetch(`${BASEURL}/api/users/${follower}/follows/${following}`, {
      method: 'POST',
      body: JSON.stringify({ ok: true }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  deleteFollow: async (follower, following) => {
    const response = await fetch(`${BASEURL}/api/users/${follower}/follows/${following}`, {
      method: 'DELETE',
    });
    return response.json();
  },
};

export default API;