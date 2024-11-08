
import React, { useRef, useEffect, useState } from 'react';

const Typing = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    const timeoutRef = useRef(null);

    useEffect(() => {
        setDisplayedText(''); 
        let index = 0;

        const typeText = () => {
            if (index <= text.length) {
                setDisplayedText(text.slice(0, index));
                index++;
                timeoutRef.current = setTimeout(typeText, speed);
            }
        };

        typeText();

        return () => {
            clearTimeout(timeoutRef.current); 
        };
    }, [text, speed]);

        return (
            <span>
                {displayedText}
            </span>
    );
};

export default Typing;
