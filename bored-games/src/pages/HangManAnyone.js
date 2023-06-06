import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/index.css';
import backgroundImgDesktop from '../images/backgroundimg.png';
import backgroundImgMobile from '../images/mobilebkgimg.png';

export default function HangManAnyone(props) {
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

        },
        joinButton: {

        },
        practiceButton: {

        },
    };

    return (
        <div style={styles.backgroundImage} className="background-image">
            <img src="./images/Hangman2.png" alt='hangman' style={styles.HangMan} />
            <img src="./images/HangManAnyone.png" alt='speech bubble' style={styles.HangManAnyone} />
            <div style={styles.container}>
                <div className="row">
                    <div className="col">
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}