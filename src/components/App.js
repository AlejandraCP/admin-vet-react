import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  render() {
    const titleHeader = 'Administrador de pacientes - Veterinaria Rayita'
    return (
      <div className="App">
        <Header title={titleHeader}/>
      </div>
    );
  }
}

export default App;
