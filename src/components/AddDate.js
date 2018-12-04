import React, { Component } from 'react';
import uuid from 'uuid'

class AddDate extends Component {

    state = {
        errorForm: false
    };

    namePet = React.createRef();
    owner =React.createRef();  
    date = React.createRef();
    hour = React.createRef();
    symptom = React.createRef();

    createDate = e => {
        e.preventDefault();
        
        const namePet = this.namePet.current.value,
            owner = this.owner.current.value,
            date = this.date.current.value,
            hour = this.hour.current.value,
            symptom = this.symptom.current.value;

        if(namePet === '' || owner === '' || date === '' || hour === '' || symptom === '') {
            this.setState({
                errorForm: true
            })
        } else {
            const newDate = {
                id: uuid(),
                namePet,
                owner,
                date,
                hour,
                symptom
            }
            this.props.createDate(newDate);
    
            e.currentTarget.reset();

            this.setState({
                errorForm: false;
            })
        }

        
    }

    render() {
        
      return (
        <div>
          <h2>Agregar Cita</h2>
          <div className='d-flex align-start'>
            <div className='col-6'>
                <form className='pl' onSubmit={this.createDate}>
                    <div>
                        <label>Nombre Mascota</label>
                        <div>
                            <input type="text" placeholder="Nombre Mascota" ref={this.namePet} />
                        </div>
                    </div>
                    <div>
                        <label>Nombre Dueño</label>
                        <div>
                            <input type="text"  placeholder="Nombre Dueño de la Mascota" ref={this.owner} />
                        </div>
                    </div>

                    <div>
                        <label>Fecha</label>
                        <div>
                            <input type="date" ref={this.date}/>
                        </div>                            

                        <label >Hora</label>
                        <div className="">
                            <input type="time" ref={this.hour}/>
                        </div>
                    </div>

                    <div>
                        <label>Sintomas</label>
                        <div>
                            <textarea  ref={this.symptom}></textarea>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button type="submit" className="">Agregar</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='col-6'>dos</div>
          </div>  
        </div>
      );
    }
  }
  
  export default AddDate;