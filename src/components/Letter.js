import React, { useState } from 'react';

const WordForm = ({ setWord }) => {
    const [inputWord, setInputWord] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputWord && inputWord.length <= 20) {
            setWord(inputWord);
            setInputWord('');
        } else {
            alert('Please enter a word between 1 and 20 characters long.');
        }
    }

    const handleInputChange = (e) => {
        if (/^[a-zA-Z]*$/.test(e.target.value)) {
            setInputWord(e.target.value.toLowerCase());
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputWord} onChange={handleInputChange} placeholder="Enter a word..."/>
            <button type="submit">Submit Word</button>
        </form>
    );
}

export default WordForm;
