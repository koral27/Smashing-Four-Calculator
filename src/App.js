import React, { useState } from 'react';
import { AddForm, Table } from './components';
import { heroes } from './constants';
import './App.css';

const App = () => {
  // const [heroes, setHeroes] = useState([]);

  // const addHero = (hero) => {
  //   setHeroes([...heroes, hero]);
  // };

  return (
    <div className="App">
      <div className="container">
        {/* <AddForm addHero={addHero} /> */}
        <Table heroes={heroes} />
      </div>
    </div>
  );
};

export default App;
