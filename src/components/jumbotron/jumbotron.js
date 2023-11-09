import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './jumbotron.css';
import mypic from '../jumbotron/images/myPic-Light.jpg';
import invertedPic from '../jumbotron/images/myPic-Light.jpg';
import TypedAnimation from '../typedJsAnimation/typed';

const Jumbotron = (props) => {
    const [Pic, setPic] = useState(invertedPic);
    const [bgColor, setBgColor] = useState('darkModeBg');
    const [modeFont, setModeFont] = useState('darkModeFont');
    const [modeBorder, setModeBorder] = useState('darkModeBorder');

    const [cursorVariant, setCursorVariant] = useState("default");

    // mouse cursor use state
    const [mousePosition, setMousePosition] = useState(
        {
            'x': 0,
            'y': 0
        }
    );

    useEffect(() => {
        const mouseMoveHandler = (event) => {
            // const jumbotron = document.querySelector('.jumbotron');
            // const jumbotronRect = jumbotron.getBoundingClientRect();
            const x = event.clientX;
            const y = event.clientY;

            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', mouseMoveHandler);
        return () => window.removeEventListener('mousemove', mouseMoveHandler);
    }, []);

    useEffect(() => {
        // Change the image based on the 'mode' prop
        if (props.mode === 'lightMode') {
            setPic(invertedPic);
            setBgColor('lightModeBg');
            setModeFont('lightModeFont');
            setModeBorder('lightModeBorder');
        } else {
            setPic(mypic);
            setBgColor('darkModeBg');
            setModeFont('darkModeFont');
            setModeBorder('darkModeBorder');
        }
    }, [props.mode]); // Re-run when props.mode changes

    const cursorVariants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16
        },
        text: {
            height: 100,
            width: 100,
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
            mixBlendMode: "difference",
        }
    }

    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");

    const downloadResume = () => {
        window.open(props.resume_link, '_blank');
    };
    

    return (
        <>
            <div className='jumbotron' id='home-101'>
                <div className={`main-bar ${bgColor}`}>
                    <div className="main-bar-text">
                        <motion.h1 className={`${modeFont} seperate big`} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                            Hi Folks, <TypedAnimation
                                firstSentence={props.animatedText['firstSentence']}
                                secondSentence={props.animatedText['secondSentence']}
                                thirdSentence={props.animatedText['thirdSentence']}
                                font={modeFont}
                            /> <br />
                        </motion.h1>

                        <motion.div
                            className="cursor"
                            variants={cursorVariants}
                            animate={cursorVariant}
                        ></motion.div>
                    </div>
                    <div className={`${bgColor} ${modeFont} downloadResume`}>
                            <motion.button className={`${bgColor} ${modeFont} ${modeBorder}`} onClick={downloadResume} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                                Download Resume <br />
                            </motion.button>
                        </div>
                </div>
                <div className={`right-bar ${bgColor}`}>
                    <img src={Pic} alt="" />
                </div>
            </div>
        </>
    );
};

export default Jumbotron;
