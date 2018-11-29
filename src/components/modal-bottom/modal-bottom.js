import React, { Component } from 'react';
import './modal-bottom.css';
import $ from 'jquery';
import ModalElement from './modal-element/modal-element.js';

class ModalBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workoutCollection: [
                { title: 'Gluteos', ytLink: 'Lccxvj8RmAc' },
                { title: 'Pectorales', ytLink: 'H2JCjhVMkJg' },
                { title: 'Brazos', ytLink: '6mWIZf-dZCQ' },
                { title: 'Hombros', ytLink: 'EEQQOBLi9bU' },
                { title: 'Tricep', ytLink: 'EEQQOBLi9bU' },
            ]
        };
    }

    componentDidMount = () => {
        console.log('mounted', document.querySelectorAll('.modal'), $)
        $(`#modal-${this.props.title}`).modal();
    };

    render() {
        return (
            <div>
                <a className="waves-effect waves-light btn modal-trigger" href={`#modal-${this.props.title}`}>Ejercitar!</a>
                <div id={`modal-${this.props.title}`} className="modal bottom-sheet open" tabIndex="0">
                    <div className="modal-content">
                        <h3 className="header">{this.props.title}</h3>
                        <ul className="collection">
                            {
                                this.state.workoutCollection.map((e, i) =>
                                    <ModalElement title={e.title} ytLink={e.ytLink} key={e.title + i} />
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalBottom;
