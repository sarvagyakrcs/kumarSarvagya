import React from 'react';
import Typed from 'typed.js';

function TypedAnimation(props) {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                `${props.firstSentence}`,
                `${props.secondSentence}`,
                `${props.thirdSentence}`
            ],
            typeSpeed: 100,
            loop: true // Set loop to true for infinite animation
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, [props.firstSentence, props.secondSentence, props.thirdSentence]);

    return (
        <div className={`App ${props.modeFont}`}>
            <span style={{ color: props.font === 'darkModeFont' ? 'tomato' : 'green' }} ref={el}></span>
        </div>

    );
}

export default TypedAnimation;
