import React, { Component } from 'react';
import Cita from './Cita';

class ListDates extends Component {
    render() {
        const dates = this.props.dates
        const mesage = Object.keys(dates).length === 0 ? 'No tienes citas' : 'Tus citas'
        return ( 
            <div>
                <div>{mesage}</div>
                <div>
                    {Object.keys(dates).map(date => (
                        <Cita key={date} info={dates[date]} deleteDate={this.props.deleteDate}/>
                    ))}
                </div>
            </div>
            
        );
    }
}

export default ListDates;