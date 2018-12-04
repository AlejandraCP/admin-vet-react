import React, { Component } from 'react';

class AddDate extends Component {

    state = {};

    namePet = React.createRef();
    owner =React.createRef();
    date = React.createRef();
    hour = React.createRef();
    symptom = React.createRef();

    createDate = e => {
        e.preventDefault();
        this.props.createDate();
        console.log(this.namePet.current.value);
        
    }

    render() {
        
      return (
        <div>
          <h2>Agregar Cita</h2>
          <div className='d-flex align-start'>
            <div className='col-6'>
                <form className='pl' onSubmit={this.createDate}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                        <div className="col-sm-8 col-lg-10">
                            <input type="text" className="form-control" placeholder="Nombre Mascota" ref={this.namePet} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                        <div className="col-sm-8 col-lg-10">
                            <input type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" ref={this.owner} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input type="date" className="form-control" ref={this.date}/>
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="col-sm-8 col-lg-4">
                            <input type="time" className="form-control" ref={this.hour}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea  className="form-control" ref={this.symptom}></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
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