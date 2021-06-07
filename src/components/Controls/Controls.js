import React, { useContext } from 'react';
import { Context } from '../../context';
import './style.css';

export const Controls = () => {
  const { users, activeUser, setActiveUser } = useContext(Context);

  const handleClick = () => {};

  const createUser = () => {};

  return (
    <div className="wrapper">
      <div className="profile">
        Выбран профиль: <b>{activeUser}</b>
      </div>
      <div className="d-flex">
        <select
          className="select"
          onChange={(e) => {
            setActiveUser(e.target.value);
          }}
        >
          <option disabled defaultValue>
            Сменить профиль
          </option>
          {users &&
            users.map(({ username }) => (
              <option key={username} value={username}>
                {username}
              </option>
            ))}
        </select>
        <button className="btn" onClick={handleClick}>
          Сохранить
        </button>
      </div>
    </div>
  );
};
