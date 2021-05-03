import React from 'react';
import { fields } from '../../constants';

export const Table = ({ heroes }) => {
  console.log(heroes);
  const calculate = (cards, level, type, data) => {
    
  }
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
              <tr key={name}>
                <td>{name}</td>
                <td>{heroType}</td>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="number"></input>
                </td>
                <td>???</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
