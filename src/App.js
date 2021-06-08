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

const initialData = {
  admin: {
    username: 'admin',
    data: heroes.map(mapHeroes),
  },
  user: {
    username: 'user',
    data: heroes.map(mapHeroes),
  },
};

const App = () => {
  console.log('--- RENDER ---');
  const [users, setUsers] = useState(null);
  const [activeUser, setActiveUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    firebase
      .database()
      .ref('users')
      .get()
      .then((snapshot) => {
        const users = snapshot.val();
        setUsers(Object.values(users));
        if (!activeUser) {
          console.log('setActiveUser');

          setActiveUser(Object.values(users)[0].username);
        }
      });
  };

  useEffect(() => {
    console.log('--- useEffect ---');
    firebase
      .auth()
      .signInWithEmailAndPassword('admin@me.me', '1234567')
      .then(() => setLoading(false))
      .catch((e) => console.log('catch', e));

    // usersData.set(initialData);

    getData();
  }, []);

  const update = (value, index, field) => {
    firebase
      .database()
      .ref()
      .child(`users/${activeUser}/data/${index}`)
      .update({
        [field]: Number(value),
      })
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Context.Provider value={{ users, activeUser, update, setActiveUser }}>
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
