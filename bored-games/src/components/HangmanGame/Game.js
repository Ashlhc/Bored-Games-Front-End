import React, { useState } from 'react';
import Hangman from './Hangman/Hangman';
import Player from './Players/Player';
import Scoreboard from './Scoreboard';
import Timer from './Timer';
import WordForm from './WordForm';
import Letter from './Letter';
import BlankLetter from './BlankLetter';
import socketService from '../services/socketServices';

function Game() {
    // State initialization
    const [player1, setPlayer1] = useState({score: 0, wins: 0, role: "setter"});
    const [player2, setPlayer2] = useState({score: 0, wins: 0, role: "guesser"});
    const [word, setWord] = useState("");
    const [incorrectGuesses, setIncorrectGuesses] = useState([]);
    const [correctGuesses, setCorrectGuesses] = useState([]);
    const [matchesPlayed, setMatchesPlayed] = useState(0);
  
    const maxMatches = 6;
  
    const handleWordSubmit = (submittedWord) => {
      // Validate submitted word...
      setWord(submittedWord);
      // Send word to other player via Socket.IO...
      socketService.sendWord(submittedWord);
    }
    const handleGuess = (letter) => {
        // Check guess and update game state...
        if (word.includes(letter)) {
          setCorrectGuesses([...correctGuesses, letter]);
        } else {
          setIncorrectGuesses([...incorrectGuesses, letter]);
        }
        // Send guess to other player via Socket.IO...
        socketService.sendGuess(letter);
      }
    
      const handleMatchEnd = (winner) => {
        // Update player scores and roles...
        if (winner === "player1") {
          setPlayer1(prevState => ({...prevState, score: prevState.score + 1, role: "guesser"}));
          setPlayer2(prevState => ({...prevState, role: "setter"}));
        } else {
          setPlayer2(prevState => ({...prevState, score: prevState.score + 1, role: "setter"}));
          setPlayer1(prevState => ({...prevState, role: "guesser"}));
        }
        // Update matches played...
        setMatchesPlayed(matchesPlayed + 1);
        // Reset word and guesses...
        setWord("");
        setIncorrectGuesses([]);
        setCorrectGuesses([]);
      }
    
      return (
        <div>
          <Player player={player1} />
          <Player player={player2} />
          <Hangman incorrectGuesses={incorrectGuesses.length} />
          <Scoreboard player1={player1} player2={player2} />
          <Timer />
          {player1.role === "setter" ? 
            <WordForm onSubmit={handleWordSubmit} /> 
            : 
            <div>
              {word.split('').map(letter => 
                correctGuesses.includes(letter) ? 
                  <Letter letter={letter} /> 
                  : 
                  <BlankLetter />
              )}
            </div>
          }
        </div>
      );
    }
    
    export default Game;