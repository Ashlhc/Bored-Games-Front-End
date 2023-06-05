import React, { useState } from 'react';

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
// Checks if all the inputs have text
        if (!username || !firstName || !lastName || !password || !confirmPassword) {
            alert('Must fill in all fields');
            return;
        }
// Checks if the password is above minimum length 
        if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }
// Checks if the entered passwords are the same 
        if (password !== confirmPassword) {
            alert('Password and Confirm Password must match');
            return;
        }
//  Checks if the username is already taken
    const response = await fetch(`/api/users/user/${username}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const json = await response.json();
    console.log(json);

    if(json !== null) {
        alert('Username already taken!');
        return;
    }

// If all successful, adds user into the database 
    const signup = await fetch('api/users', {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            first_name: firstName,
            last_name:lastName,
            password: password,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    if (signup.ok) {
        const loginResponse = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        if(loginResponse.ok) {
            window.location.href = `/profile/${username}`;
        } else {
            console.log('oops');
        }
    }
}


return (
    <form style={{ backgroundImage: 'url(images/backgroundimg.png)',backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <label htmlFor="create-username">USERNAME</label>
        <input id="create-username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <label htmlFor='create-firstname'>FIRST NAME</label>
        <input id="create-firstname" type="text"value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <label htmlFor='create-lastname'>LAST NAME</label>
        <input id="create-lastname" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        <label htmlFor='create-password'>PASSWORD</label>
        <input id="create-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <label htmlFor='confirm-password'>CONFIRM PASSWORD</label>
        <input id="confirm-password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>

<a href="" target="_blank">
        <button id="sign-up" style={{backgroundImage: 'url(public/images/SignupBtn.png)',
        backgroundSize: '', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
        width: '200px', 
        height: '50px', 
        border: 'none',
        cursor: 'pointer'
    }}onClick={handleSignUp}>

    </button>
</a>
</form>
)
};
export default SignUpForm;