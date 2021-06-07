import React, { useState } from 'react';
import { data } from '../../constants';
import { calculate } from '../../utils';
import './style.css';

export const Row = ({ name, heroType, user = '', cards, level }) => {
  const incomeType =
    heroType === 'Обычный' ? 'common' : heroType === 'Редкий' ? 'rare' : 'epic';

  return (
    <tr>
      <td className={`${heroType} bold`}>
        {name}({user})
      </td>
      <td>
        {heroType === 'common'
          ? 'Обычный'
          : heroType === 'rare'
          ? 'Редкий'
          : 'Эпичный'}
      </td>
      <td>
        <input
          type="text"
          value={cards}
          onChange={(e) => {
            // setCards(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          type="number"
          value={level}
          min={9}
          max={19}
          onChange={(e) => {
            // setLevel(Number(e.target.value));
          }}
        ></input>
      </td>
      <td>{calculate(cards, level, incomeType, data).potentialLevel}</td>
      <td>{calculate(cards, level, incomeType, data).needs}</td>
    </tr>
  );
};
