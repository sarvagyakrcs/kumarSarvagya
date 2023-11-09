import { React, useState } from 'react'
import './navbar.css'
import logo from './images/logo.png'
import invertedLogo from './images/logo-inverted.png'
import lightMode from './images/lightMode.png'
import darkMode from './images/darkMode.png'


const NavBar = (props) => {

    const [fontMode, setFontMode] = useState('darkModeFont')
    const [logoMode, setLogoMode] = useState(logo)

    const [modeIcon, setModeIcon] = useState(darkMode)
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
                </div>
            </nav>
        </>
    )
}

export default NavBar