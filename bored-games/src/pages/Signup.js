import React, { useState } from 'react';

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
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
        formGroup: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
        },
        label: {
            width: '120px',
            marginRight: '90px',
            textAlign: 'right',
        },
        input: {
            border: 'solid black 5px',
            borderRadius: '25px',
            padding: '10px',
            flex: '1',
        },
        button: {
            border: 'transparent',
            position: 'relative',
            alignItems: 'center',
        },
    };


return (
    <div style={styles.backgroundImage} className="background-image">
        <div style={styles.container}>
            <form id='Signup' onSubmit={handleSignUp}>
                <div style={styles.formGroup}>
                    <label htmlFor='signup-username' style={styles.label}>
                        USERNAME
                    </label>
                    <input
                        id="signup-username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor='first-name' style={styles.label}>
                        FIRST NAME
                    </label>
                    <input
                        id="first-name"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor='last-name' style={styles.label}>
                        LAST NAME
                    </label>
                    <input
                        id="last-name"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor='signup-password' style={styles.label}>
                        PASSWORD
                    </label>
                    <input
                        id="signup-password"
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor='confirm-password' style={styles.label}>
                        CONFIRM PASSWORD
                    </label>
                    <input
                        id="confirm-password"
                        type="text"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <button style={styles.button} type="submit">
                    <img id="signup-button" src="./images/SignupBtn.png" alt="signup" />
                </button>
            </form>
        </div>
    </div>
);
};

export default SignUpForm;