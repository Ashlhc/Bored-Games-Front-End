import { useState } from "react"

export default function usePlayerScore() {
    const [ties, setTies] = useState(0)
    const [wins, setWins] = useState(0)
    const [score, setScore] = useState(0)


// create a function that will update the score by adding 1 to the previous state
function updateScore() {
    setScore(score + 1)
}

// create a function that will update the ties
function updateTies() {
    setTies(ties + 1)
}
// create a function that will update the wins
function updateWins() {
    setWins(wins + 1)
}


    return {
        score,
        updateScore,
        updateTies,
        updateWins
    }
}