import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameEdit = (e) => {
        setUsername(e.target.value);
    };
    const handlePasswordEdit = (e) => {
        setPassword(e.target.value);
    };
    const loginChange = (e) => {
        e.preventDefault();
    };

    const styles = {
        container: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        },
        label: {
          margin: '0 -35%',
          display: 'flex',
          alignItems:'center',
          justifyContent: 'flex-end',
          width: '100px',
        },
        input: {
          border: 'solid black 5px',
          borderRadius: '25px',
          margin: '10px 0 20px',
          padding: '0',
          flex: '1',
        },
        button: {
          border: 'transparent',
          position: 'relative',
        },
        backgroundImage: {
          backgroundImage: 'url(./images/backgroundimg.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
        },
      };

return (
    <div style={styles.backgroundImage} className="background-image">
      <div style={styles.container}>
        <div id='Login'>
          <div style={styles.label}>
            <label htmlFor='login-username'>USERNAME</label>
          </div>
          <div style={styles.input}>
            <input id="login-username" type="text" value={username} onChange={handleUsernameEdit}/>
          </div>
          <div style={styles.label}>
            <label htmlFor='login-password'>PASSWORD</label>
          </div>
          <div style={styles.input}>
            <input id='login-password' type="password" value={password} onChange={handlePasswordEdit}/>
          </div>
          <button style={styles.button} onClick={loginChange}>
            <img id="login-button" src="./images/SigninBtn.png" alt="signin" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;