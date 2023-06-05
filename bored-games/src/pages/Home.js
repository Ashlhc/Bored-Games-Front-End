import React from 'react';
import { useNavigate } from "react-router-dom";


export default function Home(props) {
    let navigate = useNavigate();

    const loginChange = () => {
        let path = `/login`;
        navigate(path);
    };
    const signupChange = () => {
        let path = `/signup`;
        navigate(path);
    };

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    backgroundImage: {
        backgroundImage: 'url(./images/backgroundimg.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
    },
    button : {
        marginBottom: '50px',
        marginTop: '50px',
        border: 'transparent',
        position: 'relative',
    },
    HangMan: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-400%, -50%) translate(300px,100px)',
        width: '200px',
        height: '700px',
    },
};

return (
<div style={styles.backgroundImage} className="background-image">
<img src="./images/Hangman2.png" alt='hangman' style={styles.HangMan} />
<div style={styles.container}>
    <div className="row">
        <div className="col">
                <div>
                    <button style={styles.button} onClick={loginChange}>
                        <img id="login-button" src="./images/SigninBtn.png" alt="login" />
                        </button> 
                </div>
                <div>
                    <button style={styles.button} onClick={signupChange}>
                        <img id="signup-button" src="./images/SignupBtn.png" alt="signup" />
                        </button>
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
