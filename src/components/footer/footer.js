import {React, useState, useEffect} from 'react'
import './footer.css'

const Footer = (props) => {

    const [bgColor, setBgColor] = useState('darkModeBgFooter');
    const [fontColor, setFontColor] = useState('darkModeFont');

    useEffect(() => {
        // Change the mode based on the 'mode' prop
        if (props.mode === 'lightMode') {
            setBgColor('lightModeBgFooter');
            setFontColor('lightModeFont');
        } else {
            setBgColor('darkModeBgFooter');
            setFontColor('darkModeFont');
        }
    }, [props.mode]); // Re-run when props.mode changes

    return (
        <>
            <footer className="footer-container">
                <div className={`f-mainContent ${bgColor} ${fontColor}`}>
                    <div className="f-navigation-links f-main">
                        <h2 className={`f-main-headings shift-left ${fontColor}`}>Navigate</h2>
                        <a href="#home" className={`anchor-links-footer ${fontColor}`}>Home</a>
                        <a href="#/" className={`anchor-links-footer ${fontColor}`}>Certifications</a>
                        <a href="#/" className={`anchor-links-footer ${fontColor}`}>Projects</a>
                        <a href="#/" className={`anchor-links-footer ${fontColor}`}>Experience</a>
                        <a href="#/" className={`anchor-links-footer ${fontColor}`}>Contacts</a>
                    </div>
                    <div className="vl"></div>
                    <div className="f-social-links f-main">
                        <h2 className={`f-main-headings shift-left ${fontColor}`}>Social Media</h2>
                        {
                            Object.keys(props.links).map((linkKey) => (
                                <a
                                    key={linkKey}
                                    href={props.links[linkKey].url}
                                    className={`anchor-links-footer ${fontColor}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {props.links[linkKey].text}
                                </a>
                            ))
                        }

                    </div>
                    <div className="vl"></div>

                    <div className="contact-info f-main">
                        <h2 className={`f-main-headings shift-left ${fontColor}`}>Contact</h2>
                        {
                            Object.keys(props.contactDetails).map((contactKey) => (
                                <div key={contactKey}>
                                    <span key={contactKey} className="f-main-para">
                                        {props.contactDetails[contactKey]}
                                    </span>                                
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className="copyrightInfo">
                    <p>
                        &copy; 2023 Sarvagya Kumar. All rights reserved.
                    </p>
                </div>
            </footer>

        </>
    )
}

export default Footer