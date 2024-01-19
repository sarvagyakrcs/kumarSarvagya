import React, { useState, useEffect } from 'react';
import './LoginPopup.css';
import cross from '../../assets/cross.png';
import loon from '../../assets/loon.png';
import minion from '../../assets/minion.png';
import barbarian from '../../assets/barbarian.png';
import golem from '../../assets/golem.png';
import LoginForm from '../Login/loginForm';

const LoginPopup = (props) => {
    const user = JSON.parse(localStorage.getItem('isLoggedIn'));

    const images = [loon, barbarian, minion, golem];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Switch to the next image after 5 seconds
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [images.length]);

    // If user is logged in, don't render the LoginPopup
    if (user) {
        return null;
    }

    return (
        <div className="mainLoginPopup">
            <div className="loginPopup-box">
                <div className="leftBoxLoginPopup">
                    <img src={images[currentImage]} alt="currentImage" onClick={() => props.setLoginPopup(false)} />
                </div>
                <div className="rightBoxLoginPopup">
                    <h1 className="rightBoxLoginPopup-h1">Please Sign In With Google</h1>
                    <div className="mainLogin">
                        <LoginForm setIsLoggedin={props.setIsLoggedin} />
                    </div>
                </div>
                <div className="crossButtonLoginPopup">
                    <button className='crossButton' onClick={() => props.setLoginPopup(false)}><img src={cross} alt='Hello' /></button>
                </div>
            </div>
        </div>
    );
};

export default LoginPopup;
