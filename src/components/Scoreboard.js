import React from 'react';
import Player from './Players/Player';
import API from '../utils/api'

const Scoreboard = ({ player1, computer, ties }) => {
  return (
    <div className="scoreboard">
      <Player name={player1.name} role={player1.role} score={player1.score} wins={player1.wins} />
      <div className="ties">
        <p>Ties: {ties}</p>
      </div>
      <Player name="Computer" role={computer.role} score={computer.score} wins={computer.wins} />
    </div>
  );
}

export default Scoreboard;