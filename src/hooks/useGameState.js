import { useState } from "react"

export default function useGameState() {
    const [timerInterval, setTimerInterval] = useState(undefined)
    const [timeLeft, setTime] = useState(0)
    const [word, setWord] = useState(undefined)
    const [correctGuesses, setCorrectGuesses] = useState([])
    const [incorrectGuesses, setIncorrectGuesses] = useState([])
    function startGame() {
        if (timerInterval) {
            timerInterval.clearInterval(timeInterval)
        }    
            
        // reset word
        
            // pick a word from a big array (ask chatGPT) 
        // setWord(["bird", "apple", "pie"][]);
        let hangmanWords = [
            "apple", "breeze", "cherry", "dolphin", "equinox", "falcon", "giraffe", "harmony", 
            "inertia", "jaguar", "kaleidoscope", "lantern", "mango", "nimbus", "orchid", 
            "penguin", "quartz", "rainbow", "sunset", "teapot", "unicorn", "velocity", "wombat", 
            "xylophone", "yacht", "zephyr", "igloo", "goblin", "jester", "knight", "leopard", 
            "mystic", "nectar", "octopus", "puzzle", "quiver", "raccoon", "sphinx", "tornado", 
            "umbrella", "volcano", "waffle", "xenon", "yodel", "zeppelin", "astronaut", "bicycle", 
            "carnival", "dinosaur", "elephant", "firefly", "galaxy", "hedgehog", "illuminate", 
            "jackpot", "kangaroo", "labyrinth", "molecule", "nugget", "ostrich", "parachute", 
            "quicksand", "radiator", "scarecrow", "tarantula", "underwear", "vibration", "wolverine", 
            "xenophobia", "yokel", "zucchini", "asteroid", "blizzard", "caterpillar", "dream", 
            "echo", "flamingo", "ghost", "hippopotamus", "icicle", "jigsaw", "kiwi", "leprechaun", 
            "mermaid", "nightmare", "oasis", "pirate", "quill", "reindeer", "squirrel", "turtle", 
            "utopia", "vampire", "werewolf", "xerox", "yeti", "zombie", "avalanche", "butterfly", 
            "chameleon", "dandelion", "elf", "fox", "glacier", "hamburger", "iceberg", "joker", 
            "koala", "lemonade", "mosquito", "notebook", "octagon", "pepper", "quokka", "rhinoceros", 
            "skyscraper", "triangle", "unicorn", "vortex", "walrus", "xylograph", "yellow", "zigzag"
        ];
        
        setWord(words[Math.floor(Math.random() * (hangmanWords.length - 1))]);
        // correct and incorrect guesses are set to an empty array
        setIncorrectGuesses([]);
        setCorrectGuesses([]);
        // reset time left
        setTimerInterval(setInterval(function () {
            if (timeLeft > 1) {
            timer.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
            } else if (timeLeft === 1) {
            timer.textContent = timeLeft + ' second remaining';
            timeLeft--;
            } else {
            clearInterval(timeInterval);
            // timer.textContent = "Out of time!"
            // setterWin()
            }
        }, 1000));
            // stop the timer 
            // set time left to 30
        // start game clock
    }
    return {
        time: timeLeft,
        word,
        correctGuesses,
        incorrectGuesses,
        setCorrectGuesses,
        setIncorrectGuesses,
    }
}