import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/index.css';
import backgroundImage from '../images/backgroundimg.png';

export default function HangManAnyone() {
    let navigate = useNavigate();

    const hostChange = () => {
        let path = `/host`;
        navigate(path);
    };
    const joinChange = () => {
        let path = `/join`;
        navigate(path);
    };
    const practiceChange = () => {
        let path = `/practice`;
        navigate(path);
    };


    const styles = {
        container: {
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'center',
            height: '100vh',
        },
        backgroundImage: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
            backgroundRepeate: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
        },
        hostButton: {
        border: 'transparent',
        },
        joinButton: {
        border: 'transparent',
        },
        practiceButton: {
        border: 'transparent',    
        },
        hangman: {
            position: 'absolute',
            top: '49.5%',
            left: '50%',
            transform: 'translate(-400%, -50%) translate(300px,100px)',
            width: '200px',
            height: '720px',
        },
        hangmananyone: {

        },
    };

    return (
        <div style={styles.backgroundImage} className="background-image">
            <img src="./images/Hangman2.png" alt='hangman' style={styles.hangman} />
            <img src="./images/HangManAnyone.png" alt='speech bubble' style={styles.hangmananyone} />
            <div style={styles.container}>
                <div className="row">
                    <div className="col">
                        <div>
                            <button style={styles.hostButton} onClick={hostChange}>
                                <img id="host-button" src="./images/HostBtn.png" alt="host" />
                            </button>
                        </div>
                        <div>
                            <button style={styles.joinButton} onClick={joinChange}>
                                <img id="join-button" src="./images/JoinBtn.png" alt="join" />
                            </button>
                        </div>
                        <div>
                            <button style={styles.practiceButton} onClick={practiceChange}>
                                <img id="practice-button" src="./images/PracticeBtn.png" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}