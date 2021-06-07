import React, { useContext } from 'react';
import { Context } from '../../context';
import { Row } from '../Row';
import { fields } from '../../constants';

export const Table = () => {
  const { users, activeUser, setActiveUser } = useContext(Context);

  const filtered =
    users && users.filter(({ username }) => username === activeUser);

  console.log('filtered', filtered);

  // TODO: добавить состояние загрузки, пока не загрузятся данные из базы

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
          {(filtered && filtered.length) === 1 &&
            filtered[0].data.map(({ hero, type, cards, currentLevel }) => {
              return (
                <Row
                  key={hero}
                  name={hero}
                  heroType={type}
                  user={activeUser}
                  cards={cards}
                  level={currentLevel}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
