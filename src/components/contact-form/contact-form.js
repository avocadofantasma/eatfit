import React from 'react'

const ContactForm = () => {
    return (
        <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <input id="first_name" type="text" className="validate" data-length="255" required />
                    <label className="active" for="first_name" data-error="Incorrecto :(" data-success=":)">Nombre</label>
                </div>
                <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate" data-length="255" />
                    <label for="last_name" data-error="Incorrecto :(" data-success=":)">Empresa</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <input id="first_name" type="email" className="validate" data-length="255" required />
                    <label className="active" for="first_name" data-error="Incorrecto :(" data-success=":)">Email</label>
                </div>
                <div className="input-field col s6">
                    <input id="last_name" type="tel" className="validate" data-length="10" />
                    <label for="last_name" data-error="Incorrecto :(" data-success=":)">Telefono</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea" data-length="255" required></textarea>
                    <label for="textarea1" data-error="Incorrecto :(" data-success=":)">Mensaje</label>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m12">
                    <button id="btn-enviar" className="btn-enviar btn btn-large waves-effect waves-light dark-primary-color ">Enviar
                                <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </form>
    )
}
export default ContactForm