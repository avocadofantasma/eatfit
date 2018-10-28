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
                            <img src="images/yuna.jpg" alt="" className="circle" />
                            <span className="title">Title</span>
                            <p>First Line <br/>
                                Second Line
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                            </li>
                            <li className="collection-item avatar">
                            <i className="material-icons circle">folder</i>
                            <span className="title">Title</span>
                            <p>First Line <br/>
                                Second Line
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                            </li>
                            <li className="collection-item avatar">
                            <i className="material-icons circle green">insert_chart</i>
                            <span className="title">Title</span>
                            <p>First Line <br/>
                                Second Line
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                            </li>
                            <li className="collection-item avatar">
                            <i className="material-icons circle red">play_arrow</i>
                            <span className="title">Title</span>
                            <p>First Line <br/>
                                Second Line
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalBottom;
