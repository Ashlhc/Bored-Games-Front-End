import React from 'react';
import {useNavigate} from "react-router-dom";


export default function Home(props) {

    let navigate = useNavigate();
    const signinConvert = () => {
        let path = `/login`;
        navigate(path);
    }
    const signupConvert = () => {
        let path = `/signup`;
        navigate(path);
    }
}

    return (
        <div>
        <img style={{ backgroundImage: "url(/images/backgroundimg.png"}}></img>
        <div style={StyleSheet.component} className="component">
            
        </div>


    <div className='text-center'>
        <div className="row">
            <div className="col">
                <div>
                    <button><img src="./images/SigninBtn" alt="sign in button" onClick={signinConvert}/> Sign In </button> 
                </div>
                <div>
                    <button><img src="./images/SignupBtn" alt="sign up button" onClick={signupConvert}/> Signup </button>
                </div>
            </div>
        </div>
        </div>
        </div>
        );
