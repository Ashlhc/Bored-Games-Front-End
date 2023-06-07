import React from 'react';

const BodyPart = ({ part }) => {
  const parts = {
    head: <div className='h-man-head'></div>,
    body: <div className='h-man-body'></div>,
    leftArm: <div className='h-man-arm1'></div>,
    rightArm: <div className='h-man-arm2'></div>,
    leftLeg: <div className='h-man-leg1'></div>,
    rightLeg: <div className='h-man-leg2'></div>
  };

  return (
    <>
      {parts[part]}
    </>
  );
}

export default BodyPart;