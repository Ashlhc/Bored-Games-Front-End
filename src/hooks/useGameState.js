import { useEffect, useReducer, useRef, useState, useCallback } from "react";

export default function useGameState() {

  const [word, setWord] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);

  const words = [
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
  const startGame = useCallback(() => {
    // reset word

    // pick a word from a big array (ask chatGPT)
    // setWord(["bird", "apple", "pie"][]);
    const randomIndex = Math.floor(Math.random() * words.length);

    setWord(words[randomIndex]);
    // correct and incorrect guesses are set to an empty array
    setIncorrectGuesses([]);
    setCorrectGuesses([]);
  }, [words]);


  function endGame() {
      // set parameters for when a game should end
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
