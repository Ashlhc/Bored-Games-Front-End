import React from 'react';

const BodyPart = ({ part }) => {
  const parts = {
    head: <div className='h-man-head'></div>,
    chest: <div className='h-man-chest'></div>,
    leftArm: <div className='h-man-arm1'></div>,
    rightArm: <div className='h-man-arm2'></div>,
    leftLeg: <div className='h-man-leg1'></div>,
    rightLeg: <div className='h-man-leg2'></div>,
    hair: <div className='h-man-hair'></div>,
    accessories: <div className='h-man-accessories'></div>
  };

  return (
    <>
      {parts[part]}
    </>
  );
}

export default BodyPart;