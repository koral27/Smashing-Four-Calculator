import React, { useState } from 'react';
import { Row } from '../Row';
import { fields, data } from '../../constants';

export const Table = ({ heroes }) => {
  const calculate = (cards, level, type, data) => {
    const filterType = data.heroType[type]; // определяем по какому типу смотрим стату

    let nextLevelReq = filterType[level + 1];
    let needCards = nextLevelReq.cards;
    let ostatok = cards;
    let potentialLevel = Number(ostatok) >= needCards ? level + 1 : level;

    for (let l = potentialLevel; l < 20; l++) {
      if (l < 20) {
        nextLevelReq = filterType[potentialLevel];
        needCards = nextLevelReq.cards;
        ostatok = ostatok - needCards;
      }
      if (ostatok - filterType[l + 1].cards >= 0) {
        potentialLevel++;
      } else {
        break;
      }
    }

    return potentialLevel;
  };
  return (
    <div>
      <table cellPadding={10} border={2}>
        <thead>
          <tr>
            {fields.map(({ label }) => (
              <td key={label}>{label}</td>
            ))}
            <td>Потенциальный уровень</td>
          </tr>
        </thead>
        <tbody>
          {heroes.map(({ name, heroType }) => {
            return (
              <Row
                key={name}
                name={name}
                heroType={heroType}
                calculate={calculate}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
