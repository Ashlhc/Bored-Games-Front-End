import React from 'react';

const BlankLetter = ({ letter, isRevealed }) => {
  return (
    <span className={`blank-letter ${isRevealed ? 'revealed' : 'hidden'}`}>
      {isRevealed ? letter : '_'}
    </span>
  );
}

export default BlankLetter;
