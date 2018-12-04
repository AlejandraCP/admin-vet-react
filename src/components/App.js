import React, { Component } from 'react';
import Header from './Header';
import AddDate from './AddDate';


class App extends Component {

  createDate = () => {
    console.log('desde app');
  }
  
  render() {
    const titleHeader = 'Administrador de pacientes - Veterinaria Rayita'
    return (
      <div className="App">
        <Header title={titleHeader}/>
        <AddDate createDate={this.createDate}/>
      </div>
    );
  }
}

export default App;
