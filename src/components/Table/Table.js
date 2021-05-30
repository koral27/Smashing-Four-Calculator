import React from 'react';
import { Row } from '../Row';
import { fields } from '../../constants';

export const Table = ({ heroes }) => {
  const user = localStorage.getItem('user');
  const datas = {
    Sasha: [],
    Nasya: [],
  };

  localStorage.setItem('smashing', JSON.stringify(datas));

  console.log(JSON.parse(localStorage.getItem('smashing')));

  return (
    <div>
      <table cellPadding={10} border={2}>
        <thead>
          <tr>
            {fields.map(({ label }) => (
              <td key={label}>{label}</td>
            ))}
            <td>Потенциальный уровень</td>
            <td>Не хватает до след. уровня</td>
          </tr>
        </thead>
        <tbody>
          {heroes.map(({ name, heroType }) => {
            return (
              <Row key={name} name={name} heroType={heroType} user={user} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
