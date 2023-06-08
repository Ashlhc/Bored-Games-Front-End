import React, { useState } from 'react';
import Player from './Players/Player';
import Scoreboard from './Scoreboard';
import Timer from '../components/Timer';
import WordForm from './WordForm';
import Letter from '../components/Letter';
import BlankLetter from './BlankLetter';

function Game() {
    // State initialization
    const [player1, setPlayer1] = useState({score: 0, wins: 0});
    const [computer, setComputer] = useState({score: 0, wins: 0})
    const [isGuesser, setIsGuesser] = useState()
    const [word, setWord] = useState("");
    const [incorrectGuesses, setIncorrectGuesses] = useState([]);
    const [correctGuesses, setCorrectGuesses] = useState([]);
    const [matchesPlayed, setMatchesPlayed] = useState(0);
    const maxMatches = 6;
  
    const handleWordSubmit = (submittedWord) => {
      // Validate submitted word...
      setWord(submittedWord);
    }

    const handleGuess = (letter) => {
        // Check guess and update game state...
        if (word.includes(letter)) {
          setCorrectGuesses([...correctGuesses, letter]);
          // if all letters have been guessed, end match
        } else {
          setIncorrectGuesses([...incorrectGuesses, letter]);
        }
      }
    
      const handleMatchEnd = (winner) => {
        // Update player scores and roles...
        if (winner === "player1") {
          setPlayer1(prevState => ({...prevState, score: prevState.score + 1, role: "guesser"}));
          setComputer(prevState => ({...prevState, role: "setter"}));
        } else {
          setComputer(prevState => ({...prevState, score: prevState.score + 1, role: "setter"}));
          setPlayer1(prevState => ({...prevState, role: "guesser"}));
        }
        // Update matches played
        setMatchesPlayed(matchesPlayed + 1);
        // if statement to run at the end of each match, if matchesPlayed = maxMatches, game ends. If matchesPlayed < maxMatches, new match starts 
        if(matchesPlayed === maxMatches) {
            // TODO: call gameOver(). 
                // -does the game over screen need its own component?
                // *** VANILLA JS ***
                // function gameOver() {
                //     if (player1Score > computerScore){
                //         // TODO: display message "(player1 username) wins the game!"
                //         // alert(`${player1} wins the game!!`)
                //         player1Wins++
                //     } else if (player1Score < computerScore){
                //         // TODO: display message "(computer username) wins the game!"
                //         // alert(`${computer} wins the game!!`)
                //         computerWins++
                //     } else {
                //         // TODO: display message "it's a tie!"
                //         // alert('it's a tie!')
                //         ties++
                //     }
                //     // TODO: write a function to update user stats in SQL database at the end of the game
                //     // TODO: prompt host with play again button
                // }
        } else {
            setWord("");
            setIncorrectGuesses([]);
            setCorrectGuesses([]);
        }
      }
    
      return (
        <div> hi!
          <Player player={player1} />
          <Player player={computer} />
          {/* <Hangman incorrectGuesses={incorrectGuesses.length} /> */}
          <Scoreboard player1={player1} computer={computer} />
          <Timer />
          {(() => {
            if (player1.role === "setter") {
              return <WordForm onSubmit={handleWordSubmit} />;
            } else {
              return (
                <div>
                  {word.split('').map(letter => {
                    if (correctGuesses.includes(letter)) {
                      return <Letter letter={letter} />;
                    } else {
                      return <BlankLetter />;
                    }
                  })}
                </div>
              );
            }
          })()}
        </div>
      );
    }
    
    export default Game;