import React from 'react';
import {useNavigate} from "react-router-dom";
import image from "../../public/images/backgroundimg.png";

export default function Home(props) {

    let navigate = useNavigate();
    const signinChange = () => {
        let path = `/login`;
        navigate(path);
    }
    const signupChange = () => {
        let path = `/signup`;
        navigate(path);
    }
}

const styles = {
    background: url("")
    }

function Component() {
    return (
        <div style={{ backgroundImage: `url(${image})`,backgroundPosition: "center", backgroundRepeat: "no-repeat",backgroundSize:"cover" }}>
        <div style={styles.component} className="component">
            
        </div>


    <div className='text-center'>
        <div className="row">
            <div className="col">
                <div>
                    <button><img src="./images/SigninBtn" alt="sign in button" onClick={signinChange}/> Sign In </button> 
                </div>
                <div>
                    <button><img src="./images/SignupBtn" alt="sign up button" onClick={signupChange}/> Signup </button>
                </div>
            </div>
        </div>
        </div>
        </div>
        );
    }

    export { Component };
