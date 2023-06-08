import { useState } from "react"

export default function useGameState() {
    const [time, setTime] = useState(0)
    const [word, setWord] = useState(undefined)
    const [correctGuesses, setCorrectGuesses] = useState([])
    const [incorrectGuesses, setIncorrectGuesses] = useState([])
    function startGame() {
        // reset word
            // pick a word from a big array (ask chatGPT) 
        // correct and incorrect guesses are set to an empty array
        // reset time left
            // stop the timer 
            // set time left to 30
        // start game clock
    }
    return {
        time,
        word,
        correctGuesses,
        incorrectGuesses,
        setCorrectGuesses,
        setIncorrectGuesses,
    }
}