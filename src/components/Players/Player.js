import React from 'react';

const Player = ({ name, role, score, wins }) => {
  return (
    <div className="player">
      <h2>{name}</h2>
      {/* <p>Role: {role}</p> */}
      <p>Score: {score}</p>
      <p>Wins: {wins}</p>
    </div>
  );
}

export default Player;
