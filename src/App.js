import React, { Component } from 'react';
import './App.css';

import { EmployeesListContainer } from './components/EmployeeListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>elo elo</h1>
        <EmployeesListContainer></EmployeesListContainer>
      </div>
    );
  }
}

export default App;
