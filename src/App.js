import React from 'react';
import { Table, Controls } from './components';
import { heroes } from './constants';
import { Context } from './context';
import './App.css';

const App = () => {
  const getUser = () => {
    localStorage.getItem('user');
  };
  return (
    <Context.Provider value={{ getUser }}>
      <div className="App">
        <div className="container">
          <Controls />
          <Table heroes={heroes} />
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
