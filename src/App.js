import React, { Component } from 'react';
import './App.css';

import { generateTokens } from './svc/token'

// var obj = {
//   _a: 1,
//   set a(value){
//     this._a = value
//     notifyEveribadi(value)
//   }
// }

// obj.a = 100

import { CountryDataContainer } from './components/CountryDataContainer';
import { TokenContext } from './svc/context';

class App extends Component {
  componentDidMount(){
    generateTokens(token => this.setState({ token }))
  }

  state = {
    token: null
  }

  render() {
    return (
      <TokenContext.Provider value={this.state.token}>
        <div className="App">
          <h1>elo elo</h1>
          <CountryDataContainer></CountryDataContainer>
        </div>
      </TokenContext.Provider>
    );
  }
}

export default App;
