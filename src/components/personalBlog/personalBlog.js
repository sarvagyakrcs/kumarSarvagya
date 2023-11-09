import React from 'react';
import './personalBlog.css';
import BlogPostElement from '../blogPostElement/blogPostElement';

const PersonalBlog = (props) => {
    const LastTenPosts = ({ contactDetails, posts, mode, setMode }) => {
        const lastTenPosts = posts.slice(-10); // Assuming posts contain all available posts

        return (
            <div className="grid-container">
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
        <div>
            <h1 className='big blog-title'>Personal Blog : </h1>
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
