
import React, { Component } from 'react';
import './appointment.css';

class Appointments extends Component {
    months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ]
    constructor(props) {
        super(props);
        this.state = {
            schedule: [
                new Date(2018, 11, 1, 6, 30, 0, 0),
                new Date(2018, 11, 4, 6, 30, 0, 0),
                new Date(2018, 11, 5, 6, 30, 0, 0),
                new Date(2018, 11, 9, 6, 30, 0, 0),
            ]
        }
    }
    componentDidMount() {
        window.$('#modal-schedule').modal();
    }
    render() {
        return (
            <div>
                <div className="container margin-top">
                    <h4 className="left">Mis citas:</h4>
                    <div className="row">
                        {
                            this.state.schedule.map((e, i) => {
                                return (
                                    <div className="col s12 m6">
                                        <div className="card-panel blue lighten-2 white-text">
                                            <div className="card-content">
                                                <span>{`${e.getDate()} de ${this.months[e.getMonth()]}`}</span>
                                            </div>
                                            <div className="card-title">
                                            </div>
                                        </div>
                                    </div>)
                            })
                        }
                    </div>
                    <div className="row">
                        <span className="bullet-separator"></span>
                    </div>
                    <div className="row">
                        <span className="bullet-separator"></span>
                    </div>
                    <div className="row">
                        <a href="#modal-schedule" className="btn btn-floating waves-effect waves-light btn-large ">
                            <i className="material-icons">add</i>
                        </a>
                    </div>
                </div>
                
            </div>
        )
    }

}

export default Appointments;