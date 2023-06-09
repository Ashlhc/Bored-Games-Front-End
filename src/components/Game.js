import React, { useState } from "react";
import Player from "./Players/Player";
import Scoreboard from "./Scoreboard";
import Timer from "../components/Timer";
import Letter from "../components/Letter";
import BlankLetter from "./BlankLetter";
import useGameState from "../hooks/useGameState";
import usePlayerScore from "../hooks/usePlayerScore";

function Game() {
  // State initialization
  const [player1, setPlayer1] = useState({ score: 0, wins: 0 });
  const [computer, setComputer] = useState({ score: 0, wins: 0 });
  const { word, correctGuesses, incorrectGuesses, setCorrectGuesses, setIncorrectGuesses, startGame, endGame } = useGameState()
  const { score, updateScore, updateTies, updateWins } = usePlayerScore()
  const maxMatches = 3;

  startGame()

  if (Timer === 0) {
    updateMatchesPlayed()
  }

  const handleGuess = (letter) => {
    // Check guess and update game state
    if (word.includes(letter)) {
      setCorrectGuesses([...correctGuesses, letter]);
      // if all letters have been guessed, end match
    } else {
      setIncorrectGuesses([...incorrectGuesses, letter]);
    }
  };

  const handleMatchEnd = (winner) => {
    // Update player scores and roles...
    if (winner === "player1") {
      player1.updateScore();
    } else {
      computer.updateScore();
    }
    // Update matches played
    setMatchesPlayed(matchesPlayed + 1);
    // if statement to run at the end of each match, if matchesPlayed = maxMatches, game ends. If matchesPlayed < maxMatches, new match starts
    if (matchesPlayed >= maxMatches) {
      endGame()
      if (player1.score > computer.score) {
        alert(`${player1.name} wins the game!!`);
        player1.updateWins()
      } else if (player1.score < computer.score) {
        alert(`${computer} wins the game!!`)
        computer.updateWins()
      } else {
        updateTies()
      }
      // TODO: write a function to update user stats in SQL database at the end of the game
      // TODO: prompt host with play again button
    }
  };

  return (
    <div>
      <Timer />
      <Player player={player1} />
      <Player player={computer} />
      {/* <Hangman incorrectGuesses={incorrectGuesses.length} /> */}
      <Scoreboard player1={player1} computer={computer} />
      <div>
        {word && word.split("").map((letter, key) => {
          if (correctGuesses.includes(letter)) {
            return <Letter letter={letter} key={key}/>;
          } else {
            return <BlankLetter key={key} />;
          }
        })}
      </div>
    </div>
  );
}

export default Game;
