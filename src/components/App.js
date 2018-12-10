import React, { Component } from 'react';
import Header from './Header';
import AddDate from './AddDate';
import ListDates from './ListDates';

class App extends Component {

  state = {
    dates: []
  }

  componentDidMount() {
    const datesInLS = localStorage.getItem('citas')
    if(datesInLS){
      this.setState({
        dates: JSON.parse(datesInLS)
      })
    }

  }

  componentDidUpdate() {
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.dates)
    )
  }

  createDate = (dateObj) => {
    let dates = [...this.state.dates, dateObj]
    
    this.setState({
      dates
    })
  }

  deleteDate = id => {
    const currentDates = [...this.state.dates];

    const dates = currentDates.filter( dates => dates.id !== id);

    this.setState ({
      dates
    })
    
  }
  
  render() {
    const titleHeader = 'Administrador de pacientes - Veterinaria Rayita'
    return (
      <div className="App">
        <Header title={titleHeader}/>
        <div className='d-flex align-start'>
            <div className='col-6'>
              <AddDate createDate={this.createDate}/>
            </div>
            <div className='col-6'>
              <ListDates dates={this.state.dates} deleteDate={this.deleteDate}/>
            </div>
        </div>
        
        
      </div>
    );
  }
}

export default App;
