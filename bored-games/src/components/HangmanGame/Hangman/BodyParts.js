import React from 'react';

const BodyPart = ({ part }) => {
  const parts = {
    head: <circle cx="50" cy="50" r="20" fill="black" />,
    body: <line x1="50" y1="70" x2="50" y2="120" stroke="black" strokeWidth="2" />,
    leftArm: <line x1="50" y1="80" x2="30" y2="100" stroke="black" strokeWidth="2" />,
    rightArm: <line x1="50" y1="80" x2="70" y2="100" stroke="black" strokeWidth="2" />,
    leftLeg: <line x1="50" y1="120" x2="30" y2="150" stroke="black" strokeWidth="2" />,
    rightLeg: <line x1="50" y1="120" x2="70" y2="150" stroke="black" strokeWidth="2" />
  };

  return (
    <svg viewBox="0 0 100 200">
      {parts[part]}
    </svg>
  );
}

export default BodyPart;