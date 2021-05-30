import React, { useState } from 'react';
import { data } from '../../constants';
import { calculate } from '../../utils';
import './style.css';

export const Row = ({ name, heroType, user }) => {
  const [cards, setCards] = useState(0);
  const [level, setLevel] = useState(9);

  // datas.Sasha.push({
  //   hero: name,
  //   cards: 0,
  //   currentLevel: 9,
  //   potentialLevel: 10,
  // });

  // console.log(datas);

  const incomeType =
    heroType === 'Обычный' ? 'common' : heroType === 'Редкий' ? 'rare' : 'epic';

  return (
    <tr>
      <td className={`${incomeType} bold`}>{name}</td>
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
          min={9}
          max={19}
          onChange={(e) => {
            setLevel(Number(e.target.value));
          }}
        ></input>
      </td>
      <td>{calculate(cards, level, incomeType, data).potentialLevel}</td>
      <td>{calculate(cards, level, incomeType, data).needs}</td>
    </tr>
  );
};
