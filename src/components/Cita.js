import React, { Component } from 'react';

class Cita extends Component {

    deleteDate = () => {
        let key = this.props.info.id;
        this.props.deleteDate(key);
    }

    render() { 
        const {date, hour, namePet, owner, symptom} = this.props.info;

        return ( 
            <div>
                <h4>Nombre de mascota</h4>
                <h6>{namePet}</h6>
                <p><span>Nombre del dueño:</span> {owner}</p>
                <p><span>Fecha:</span> {date}</p>
                <p><span>Hora:</span> {hour}</p>
                <p>Síntomas:</p>
                <p>{symptom}</p>
                <br/>
                <div>
                    <button onClick={this.deleteDate}>Eliminar</button>
                </div>

            </div>
         );
    }
}
 
export default Cita;