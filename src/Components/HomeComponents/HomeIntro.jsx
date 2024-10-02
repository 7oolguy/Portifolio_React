import React, { useState, useEffect } from 'react';

export default function HomeIntro() {
    const phrases = ["Hello, World!", "Welcome to my portfolio.", "I am a developer,", "and a Data analist."]
    const [currentPhrase, setCurrentPhrase] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);

    useEffect(() => {
        if (phraseIndex < phrases.length) {
            const currentText = phrases[phraseIndex];

            //typing effect
            if (letterIndex < currentText.length) {
                const timeoutId = setTimeout(() => {
                    setCurrentPhrase(prev => prev + currentText[letterIndex]);
                    setLetterIndex(letterIndex + 1);
                }, 100); //Typing Speed
                return () => clearTimeout(timeoutId);
            } else {
                //Pause before typing the next phrase
                const timeoutId = setTimeout(() => {
                    setCurrentPhrase('');
                    setLetterIndex(0);
                    setPhraseIndex(phraseIndex + 1);
                }, 1000);
                return () => clearTimeout(timeoutId);
            }
        } else {
            setPhraseIndex(0);
        }
    }, [letterIndex, phraseIndex, phrases]);
    
    return <div className='typing'>
        <h1>{currentPhrase}</h1>
        <span className='cursor'>|</span>
    </div>
}