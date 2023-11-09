import {React, useState, useEffect} from 'react';
import './personalBlog.css';
import BlogPostElement from '../blogPostElement/blogPostElement';

const PersonalBlog = (props) => {

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

    const LastTenPosts = ({ contactDetails, posts, mode, setMode }) => {
        const lastTenPosts = posts.slice(-10); // Assuming posts contain all available posts

        return (
            <div className={`grid-container ${bgColor}`}>
                {lastTenPosts.map((post, index) => (
                    <div className="grid-item" key={index}>
                        <BlogPostElement
                            contactDetails={contactDetails}
                            postData={post}
                            mode={mode}
                            setMode={setMode}
                        />
                    </div>
                ))}
            </div>
        );
    };

    // Render LastTenPosts component
    return (
        <div id={`personal-blog`} className={`${bgColor}`}>
            <h1 className={`big blog-title ${bgColor} ${modeFont}`}>Personal Blog : </h1>
            <LastTenPosts
                contactDetails={props.contactDetails}
                posts={props.posts}
                mode={props.mode}
                setMode={props.setMode}
            />
        </div>
    );
};

export default PersonalBlog;
