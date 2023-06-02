import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../utils/api';
import Button from 'react-router-dom';

export default function Profile({ loginInfo, username }) {
    const [friends, setFriends] = useState([])
    const [wins, setWins] = useState(0)
    const [loses, setLoses] = useState(0)
    const [friendSearch, setFriendSearch] = useState('')
    useEffect(() => {

        API.getSingleUser(username).then(data => {
            setFriends(data.user?.friends)
            setWins(data.user?.wins)
            setLoses(data.user?.loses)    
        })
    })

    let navigate = useNavigate();

    const loginChange = () => {
        let path = `/login`;
        navigate(path);
    }

    const handleFriendSearch = function (e) {
        setFriendSearch(e.target.value)
    }
    const handleAddFriend = function (e) {
        API.addFriend(username, friendSearch).then((data) => {
            console.log(data)
            setFriendSearch('')
        })
    }

    const handleRemoveFriend = async function (e) {
        const name = e.target.getAttribute("name")
        console.log(name)
        await API.removeFriend(username,name).then(data => {
            console.log(data)
        })
    }
}