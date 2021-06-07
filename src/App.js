import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { Table, Controls } from './components';
import { heroes } from './constants';
import { Context } from './context';
import './App.css';

const mapHeroes = ({ name, heroType }) => {
  return {
    hero: name,
    type: heroType,
    cards: 1000,
    currentLevel: 10,
    cardsToNext: 500,
  };
};

const initialData = [
  {
    username: 'admin',
    data: heroes.map(mapHeroes),
  },
  {
    username: 'user',
    data: heroes.map(mapHeroes),
  },
];

const App = () => {
  console.log('--- RENDER ---');
  const [users, setUsers] = useState(null);
  const [activeUser, setActiveUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('--- useEffect ---');
    firebase
      .auth()
      .signInWithEmailAndPassword('admin@me.me', '1234567')
      .then(() => setLoading(false))
      .catch((e) => console.log('catch', e));

    const db = firebase.database();
    const usersData = db.ref('users');
    // usersData.set(initialData);
    usersData.on('value', (snapshot) => {
      const users = snapshot.val();
      setUsers(users);
      setActiveUser(users[0].username);
    });
  }, []);

  return (
    <Context.Provider value={{ users, activeUser, setActiveUser }}>
      <div className="App">
        <div className="container">
          <Controls />
          {!loading && <Table heroes={heroes} activeUser={activeUser} />}
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
