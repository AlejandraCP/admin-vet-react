import React, { Component } from 'react';

class Cita extends Component {
    render() { 
        const date = this.props.info.date,
            hour = this.props.info.hour
        return ( 
            <div>
                <h4>Nombre de mascota</h4>
                <span></span>
                <p><span>Nombre del dueño:</span></p>
                <p><span>Fecha:</span>{date}</p>
                <p><span>Hora:</span></p>
                <p>Síntomas:</p>
                <span></span>

            </div>
         );
    }
}
 
export default Cita;