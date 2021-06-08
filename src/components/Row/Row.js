import React, { useContext } from 'react';
import { data } from '../../constants';
import { Context } from '../../context';
import { calculate } from '../../utils';
import './style.css';

export const Row = ({ name, heroType, cards, level, index }) => {
  const { update } = useContext(Context);

  return (
    <tr>
      <td className={`${heroType} bold`}>{name}</td>
      <td>
        {heroType === 'common'
          ? 'Обычный'
          : heroType === 'rare'
          ? 'Редкий'
          : 'Эпичный'}
      </td>
      <td className="cardsField">
        <input
          type="text"
          value={cards}
          onChange={(e) => {
            update(e.target.value, index, 'cards');
          }}
        ></input>
      </td>
      <td>
        <div className="levelField">
          <button
            onClick={() => {
              update(level - 1, index, 'currentLevel');
            }}
          >
            -
          </button>
          <input
            type="text"
            value={level}
            onChange={(e) => {
              update(e.target.value, index, 'currentLevel');
            }}
          ></input>
          <button
            onClick={() => {
              update(level + 1, index, 'currentLevel');
            }}
          >
            +
          </button>
        </div>
      </td>
      <td>{calculate(cards, level, heroType, data).potentialLevel}</td>
      <td>{calculate(cards, level, heroType, data).needs}</td>
    </tr>
  );
};
