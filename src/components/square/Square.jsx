import React, { useState } from 'react';
import css from '../square/css/square.module.css';

const Square = () => {
  const [position, setPosition] = useState(0);

  const moveLeft = () => {
    setPosition(position - 100);
  };

  const moveRight = () => {
    setPosition(position + 100);
  };

  return (
    <div
      className={css.container}
      style={{
        transform: `translateX(${position}px)`,
        transition: 'transform 1s',
      }}
    >
      <div className={css.container__square} />
      <button className={css.container__btnLeft} onClick={moveLeft}>
        To left
      </button>
      <button onClick={moveRight}>To right</button>
    </div>
  );
};

export default Square;
