import React, { Component } from 'react';
import './modal-bottom.css';
import $ from 'jquery';

class ModalBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount = () => {
        console.log('mounted', document.querySelectorAll('.modal'), $)
        $('.modal').modal();
    };

    render() {
        return (
            <div>
                <a className="waves-effect waves-light btn modal-trigger" href={`#modal-${this.props.title}`}>Modal</a>
                <div id={`modal-${this.props.title}`} className="modal bottom-sheet open" tabIndex="0">
                    <div className="modal-content">
                        <h3 className="header">Modal Header</h3>
                        <ul className="collection">
                            <li className="collection-item avatar">
                                <a href="https://www.youtube.com/watch?v=Lccxvj8RmAc"  target="_blank">
                                    <i className="material-icons circle red">play_arrow</i>
                                    <h1 className="title">Gluteos</h1>
                                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                                </a>
                            </li>
                            <li className="collection-item avatar">
                                <a href="https://www.youtube.com/watch?v=H2JCjhVMkJg"  target="_blank">
                                    <i className="material-icons circle red">play_arrow</i>
                                    <h1 className="title">Pectorales</h1>
                                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                                </a>
                            </li>
                            <li className="collection-item avatar">
                                <a href="https://www.youtube.com/watch?v=6mWIZf-dZCQ"  target="_blank">
                                    <i className="material-icons circle red">play_arrow</i>
                                    <h1 className="title">Brazos</h1>
                                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                                </a>
                            </li>
                            <li className="collection-item avatar">
                                <a href="https://www.youtube.com/watch?v=EEQQOBLi9bU"  target="_blank">
                                    <i className="material-icons circle red">play_arrow</i>
                                    <h1 className="title">Hombros</h1>
                                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalBottom;
