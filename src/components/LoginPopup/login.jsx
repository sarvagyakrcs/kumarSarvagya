import React, { useState, useEffect } from 'react';
import './LoginPopup.css';
import cross from '../../assets/cross.png'
import loon from '../../assets/loon.png'
import minion from '../../assets/minion.png'
import barbarian from '../../assets/barbarian.png'
import golem from '../../assets/golem.png'
import LoginForm from '../Login/loginForm';

const LoginPopup = (props) => {
    const user = JSON.parse(localStorage.getItem('userDetails'));

    const images = [loon, barbarian, minion, golem];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Switch to the next image after 2 seconds
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [currentImageIndex, images.length]);
    

    return (
        <div className="mainLoginPopup">
            <div className="loginPopup-box">
                <div className="leftBoxLoginPopup">
                    <img src={images[currentImageIndex]} alt="currentImage" onClick={() => props.setLoginPopup(false)} />
                </div>
                <div className="rightBoxLoginPopup">
                    <h1 className="rightBoxLoginPopup-h1">Please Sign In With Google</h1>
                    <div className="mainLogin">
                        <LoginForm setIsLoggedin={props.setIsLoggedin}/>  
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
