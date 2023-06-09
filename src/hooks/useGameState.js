import { useEffect, useReducer, useRef, useState } from "react";

export default function useGameState() {

  const [word, setWord] = useState(undefined);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [matchesPlayed, setMatchesPlayed] = useState(0);
  let words = [
        "apple",
        "breeze",
        "cherry",
        "dolphin",
        "equinox",
        "falcon",
        "giraffe",
        "harmony",
        "inertia",
        "jaguar",
        "kaleidoscope",
        "lantern",
        "mango",
        "nimbus",
        "orchid",
        "penguin",
        "quartz",
        "rainbow",
        "sunset",
        "teapot",
        "unicorn",
        "velocity",
        "wombat",
        "xylophone",
        "yacht",
        "zephyr",
        "igloo",
        "goblin",
        "jester",
        "knight",
        "leopard",
        "mystic",
        "nectar",
        "octopus",
        "puzzle",
        "quiver",
        "raccoon",
        "sphinx",
        "tornado",
        "umbrella",
        "volcano",
        "waffle",
        "xenon",
        "yodel",
        "zeppelin",
        "astronaut",
        "bicycle",
        "carnival",
        "dinosaur",
        "elephant",
        "firefly",
        "galaxy",
        "hedgehog",
        "illuminate",
        "jackpot",
        "kangaroo",
        "labyrinth",
        "molecule",
        "nugget",
        "ostrich",
        "parachute",
        "quicksand",
        "radiator",
        "scarecrow",
        "tarantula",
        "underwear",
        "vibration",
        "wolverine",
        "xenophobia",
        "yokel",
        "zucchini",
        "asteroid",
        "blizzard",
        "caterpillar",
        "dream",
        "echo",
        "flamingo",
        "ghost",
        "hippopotamus",
        "icicle",
        "jigsaw",
        "kiwi",
        "leprechaun",
        "mermaid",
        "nightmare",
        "oasis",
        "pirate",
        "quill",
        "reindeer",
        "squirrel",
        "turtle",
        "utopia",
        "vampire",
        "werewolf",
        "xerox",
        "yeti",
        "zombie",
        "avalanche",
        "butterfly",
        "chameleon",
        "dandelion",
        "elf",
        "fox",
        "glacier",
        "hamburger",
        "iceberg",
        "joker",
        "koala",
        "lemonade",
        "mosquito",
        "notebook",
        "octagon",
        "pepper",
        "quokka",
        "rhinoceros",
        "skyscraper",
        "triangle",
        "unicorn",
        "vortex",
        "walrus",
        "xylograph",
        "yellow",
        "zigzag",
      ];


  
  function startGame() {
    setWord(words[Math.floor(Math.random() * (words.length - 1))]);
    // correct and incorrect guesses are set to an empty array
    setIncorrectGuesses([]);
    setCorrectGuesses([]);
  }

function updateMatchesPlayed() {
    setMatchesPlayed(matchesPlayed + 1)
}

  function endGame() {
    
    
  }

  return {
    word,
    correctGuesses,
    incorrectGuesses,
    setCorrectGuesses,
    setIncorrectGuesses,
    startGame,
    endGame,
    matchesPlayed,
    setMatchesPlayed,
    updateMatchesPlayed
  };
}
