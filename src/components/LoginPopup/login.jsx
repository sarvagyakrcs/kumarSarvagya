import React from 'react';
import './LoginPopup.css';
import { useNavigate } from 'react-router-dom';
import cross from '../../assets/cross.png'
import spaceman from '../../assets/spaceman.jpeg'
import LoginForm from '../Login/loginForm';

const LoginPopup = (props) => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('userDetails'));

    const notLogin = (
        <div className="rightBoxLoginPopup">
            <h1>Please Sign In With Google</h1>
            <LoginForm setLoginPopup={props.setLoginPopup} setIsLoggedin={props.setIsLoggedin}/>   
        </div>
    );

    const loggedIn = (
        <div className="rightBoxLoginPopup">
            <h1>Please Sign In With Google</h1>
            <LoginForm setLoginPopup={props.setLoginPopup} setIsLoggedin={props.setIsLoggedin}/>   
        </div>
    );

    return (
        <div className="mainLoginPopup">
            <div className="loginPopup-box">
                <div className="leftBoxLoginPopup">
                    <img src={spaceman} alt="" />
                </div>
                <div className="rightBoxLoginPopup">
                    <h1>Please Sign In With Google</h1>
                    <div className="mainLogin">
                        <LoginForm setIsLoggedin={props.setIsLoggedin}/>  
                    </div> 
                </div>
                <div className="crossButtonLoginPopup">
                    <button className='crossButton' onClick={() => props.setLoginPopup(false)}><img src={cross} /></button>
                </div>
            </div>
        </div>
    );
};

export default LoginPopup;
