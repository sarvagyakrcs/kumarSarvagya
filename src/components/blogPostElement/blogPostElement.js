import {React, useState, useEffect} from 'react';
import './blogPostElement.css';
import profilePicture from './images/profilePicture.png'
import verificationMark from './images/verified.svg'

const BlogPostElement = (props) => {
    const calculateTimeDifference = (postDate) => {
        if (!postDate) {
            return 'Unknown'; // Handle case where date is not provided
        }

        const postDateTime = new Date(postDate).getTime(); // Convert the post date to milliseconds
        if (isNaN(postDateTime)) {
            return 'Invalid date'; // Handle case where the date is invalid
        }

        const currentDateTime = Date.now(); // Get current date in milliseconds
        const timeDifference = currentDateTime - postDateTime;

        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const years = Math.floor(days / 365);

        if (years > 0) {
            return `${years} year${years > 1 ? 's' : ''} ago`;
        } else if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else {
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        }
    };
    const timeAgo = calculateTimeDifference(props.postData['date']);

    const [bgColor, setBgColor] = useState('darkModeBg');
    const [modeFont, setModeFont] = useState('darkModeFont');

    useEffect(() => {
        if (props.mode === 'lightMode') {
            setBgColor('lightModeBg');
            setModeFont('lightModeFont');
        } else {
            setBgColor('darkModeBg');
            setModeFont('darkModeFont');
        }
    }, [props.mode]); // Re-run when props.mode changes

    return (
        <div className={`BlogPostElement ${bgColor} ${modeFont}`}>
            <div className="left">
                <img src={profilePicture} className="topSpace profile-picture" alt="" />
            </div>
            <div className={`right ${bgColor} ${modeFont}`}>
                {/* top-bar */}
                <div className={`top-bar-container topSpace ${bgColor} ${modeFont}`}>
                    <pre className={`seperate ${modeFont}`} style={{ fontWeight: 'bolder', color: 'tomato' }}>{props.contactDetails['Name']}</pre>
                    <img className='verificationMark' src={verificationMark} alt="" />
                    <pre className={`${modeFont}`}>  {timeAgo}   </pre>
                </div>
                {/* main-content */}
                <div className="main-content">
                    <p className={`postContent ${modeFont}`}>{props.postData['content']}</p>
                </div>
                {/* bottom-bar */}
                <div className="bottom-bar">
                    <p className={`postContent ${modeFont} seperate-bottom`}><b style={{color : 'tomato'}}>SUMMARY</b> : {props.postData['title']}</p>
                </div>
            </div>
        </div>
    );
};


export default BlogPostElement;
