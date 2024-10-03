import React, { useState, useEffect } from 'react';

export default function Typing({
    phrases = ["Hello, World!", "Welcome to my portfolio.", "I am a developer,", "and a Data analist."],
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseTime = 1000
}) {
    const [ currentPhrase, setCurrentPhrase ] = useState('');
    const [ phraseIndex, setPhraseIndex ] = useState(0);
    const [ letterIndex, setLetterIndex ] = useState(0);
    const [ isDeleting, setIsDeleting ] = useState(false);


    useEffect(() => {
        if (phraseIndex < phrases.length) {
            const currentText = phrases[phraseIndex % phrases.length];

            if(!isDeleting) {
                //typing effect
                if (letterIndex < currentText.length) {
                    const timeoutId = setTimeout(() => {
                        setCurrentPhrase(prev => prev + currentText[letterIndex]);
                        setLetterIndex(letterIndex + 1);
                    }, typingSpeed); //Typing Speed
                    return () => clearTimeout(timeoutId);
                } else {
                    // Pause Before starting to delete
                    const timeoutId = setTimeout(() => setIsDeleting(true), pauseTime);
                    return () => clearTimeout(timeoutId);
                }
            } else {
                if (letterIndex > 0) {
                    const timeoutId = setTimeout(() => {
                        setCurrentPhrase(prev => prev.slice(0, -1));
                        setLetterIndex(letterIndex - 1);
                    }, deletingSpeed);
                    return () => clearTimeout(timeoutId);
                } else {
                    setIsDeleting(false);
                    setPhraseIndex(phraseIndex + 1);
                }
            }            
        } else {
            setPhraseIndex(0);
        }
    }, [letterIndex, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);
    
    return <div className='typing'>
        <h1>{currentPhrase}</h1>
        <span className='cursor'>|</span>
    </div>
}