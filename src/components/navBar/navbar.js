import { React, useState, useEffect } from 'react'
import './navbar.css'
import logo from './images/logo.png'
import invertedLogo from './images/logo-inverted.png'
import lightMode from './images/lightMode.png'
import darkMode from './images/darkMode.png'
import NavMenu from '../NavMenu/navMenu'
import {menuOptions} from '../../data'
import LogOut from '../Login/logOut'
import LoginForm from '../Login/loginForm'



const NavBar = (props) => {
    const [fontMode, setFontMode] = useState('darkModeFont');
    const [logoMode, setLogoMode] = useState(logo);
    const [userDetails, setUserDetails] = useState({});
    const [modeIcon, setModeIcon] = useState(darkMode);
    const [userProfileDropDown, setUserProfileDropDown] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem('isLoggedin') === 'true' ? true : false);
    useEffect(() => {
        if (localStorage.getItem('isLoggedin') === 'true') {
            setUserDetails(JSON.parse(localStorage.getItem('userDetails')));
        }
    }, []);

    const toggleMode = () => {
        if (modeIcon === lightMode) {
            setModeIcon(darkMode);
            props.setMode('darkMode')
            setFontMode('darkModeFont')
            setLogoMode(logo)
        }
        else {
            setModeIcon(lightMode)
            props.setMode('lightMode')
            setFontMode('lightModeFont')
            setLogoMode(invertedLogo)
        }
    }

    const scroll = (destination) => {
        const personalBlogSection = document.getElementById(destination);
        if (personalBlogSection) {
            personalBlogSection.scrollIntoView({
                behavior: 'smooth',
                boundary: { top: 15 }
            });
        }
    };

    const userProfileDropDownMenu = (
        <div className="userProfileDropDownMenu">
            <LogOut setIsLoggedin={props.setIsLoggedin} />
        </div>
    );

    const userProfile = (
        <div className="userProfile">
            <button onClick={() => setUserProfileDropDown(true)}>
                <img src={userDetails['photoURL']} alt="" />
            </button>
            {userProfileDropDown && userProfileDropDownMenu}
        </div>
    );

    return (
        <>
            {/* main nav bar */}
            <nav id='nav-bar' className={`nav-bar ${props.mode}`}>
                <div className="nav-image">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <img src={logoMode} alt="" />
                    </a>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li className="list-items"><button onClick={() => scroll('home-101')} className={`anchor-links ${fontMode}`}>Home</button></li>
                        <li className="list-items"><button onClick={() => scroll('personal-blog')} className={`anchor-links ${fontMode}`}>Personal Blog</button></li>
                        <li className="list-items"><button onClick={() => scroll('projects')} className={`anchor-links ${fontMode}`}>Projects</button></li>
                        <li className="list-items"><button onClick={() => scroll('past-experiences')} className={`anchor-links ${fontMode}`}>Past Experiences</button></li>
                        <li className="list-items"><button onClick={() => scroll('past-experiences')} className={`anchor-links ${fontMode}`}>Certifications</button></li>
                        <li className="list-items"><button onClick={() => scroll('contact')} className={`anchor-links ${fontMode}`}>Contact Me</button></li>
                    </ul>
                </div>
                {/* darkModeButton */}
                <div className="darkModeButton">
                    <h3 className={`${fontMode}`}>{props.mode}</h3>
                    <button className={`${fontMode}`} onClick={toggleMode}><img src={modeIcon} alt="" /></button>
                    {isLoggedin ? userProfile : <LoginForm setIsLoggedin={props.setIsLoggedin} />}
                </div>
                {/* nav-menu */}
                <div className="navMenu">
                        <NavMenu MenuOptions={menuOptions}/>
                </div>
            </nav>
        </>
    )
}

export default NavBar