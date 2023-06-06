import React from 'react';
import Player from './Player';

const Scoreboard = ({ player1, player2, ties }) => {
  return (
    <div className="scoreboard">
      <Player name={player1.name} role={player1.role} score={player1.score} wins={player1.wins} />
      <div className="ties">
        <p>Ties: {ties}</p>
      </div>
      <Player name={player2.name} role={player2.role} score={player2.score} wins={player2.wins} />
    </div>
  );
}

export default Scoreboard;
