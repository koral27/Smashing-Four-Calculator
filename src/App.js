import React from 'react';
import { Table } from './components';
import { heroes } from './constants';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Table heroes={heroes} />
      </div>
    </div>
  );
};

export default App;
