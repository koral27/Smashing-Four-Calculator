import React, { useState } from 'react';
import { data } from '../../constants';

export const Row = ({ name, heroType, calculate }) => {
  const [cards, setCards] = useState(34000);
  const [level, setLevel] = useState(9);

  const incomeType =
    heroType === 'Обычный' ? 'common' : heroType === 'Редкий' ? 'rare' : 'epic';

  return (
    <tr>
      <td>{name}</td>
      <td>{heroType}</td>
      <td>
        <input
          type="text"
          value={cards}
          onChange={(e) => {
            setCards(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          type="number"
          value={level}
          onChange={(e) => {
            setLevel(e.target.value);
          }}
        ></input>
      </td>
      <td>{calculate(cards, level, incomeType, data)}</td>
    </tr>
  );
};
