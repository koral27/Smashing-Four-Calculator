import React, { useState, useContext } from 'react';
import { Context } from '../../context';
import './style.css';

export const Controls = () => {
  const context = useContext(Context);
  const [user, setUser] = useState(localStorage.getItem('user'));
  console.log(context);
  const handleClick = () => {
    localStorage.setItem('user', user);
  };

  return (
    <div className="wrapper">
      <div className="profile">
        Выбран профиль: <b>{user}</b>
      </div>
      <div className="d-flex">
        <select
          className="select"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        >
          <option disabled defaultValue>
            Сменить профиль
          </option>
          <option value="Нася">Нася</option>
          <option value="Саша">Саша</option>
        </select>
        <button className="btn" onClick={handleClick}>
          Сохранить
        </button>
      </div>
    </div>
  );
};
