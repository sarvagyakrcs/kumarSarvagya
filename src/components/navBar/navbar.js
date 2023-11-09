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

    return (
        <>
            {/* main nav bar */}
            <nav className={`nav-bar ${props.mode}`}>
                <div className="nav-image">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <img src={logoMode} alt="" />
                    </a>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li className="list-items"><a href="index.html" className={`anchor-links ${fontMode}`}>Home</a></li>
                        <li className="list-items"><a href="index.html" className={`anchor-links ${fontMode}`}>Personal Blog</a></li>
                        <li className="list-items"><a href="#/" className={`anchor-links ${fontMode}`}>Projects</a></li>
                        <li className="list-items"><a href="#/" className={`anchor-links ${fontMode}`}>Past Experiences</a></li>
                        <li className="list-items"><a href="skills.html" className={`anchor-links ${fontMode}`}>Certifications</a></li>
                        <li className="list-items"><a href="#/" className={`anchor-links ${fontMode}`}>Contact Me</a></li>
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