import React, { Component } from 'react';
import Header from './Header';
import AddDate from './AddDate';


class App extends Component {

  state = {
    dates: []
  }

  createDate = (dateObj) => {
    let dates = [...this.state.dates, dateObj]
    
    this.setState({
      dates
    })
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
