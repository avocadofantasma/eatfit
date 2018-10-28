import React, { Component } from 'react'
import ContactForm from "../components/contact-form/contact-form.js";
class ContactUs extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 l6">
                        <div className="row">
                            <img src="http://via.placeholder.com/350x350" alt="logo" className="" />
                        </div>
                        <div className="row">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nihil eligendi velit numquam reiciendis possimus quisquam provident ullam eum deleniti itaque cum sint aspernatur hic, recusandae laborum pariatur perferendis at.
                        </div>
                    </div>
                    <div className="col s12 m6 l6">
                        <h1>Contacto</h1>
                        <p class="flow-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsum eum? Corrupti praesentium error aliquid eaque minima molestiae, vero laborum nesciunt doloribus itaque perferendis laboriosam reiciendis ipsam tempora iusto perspiciatis?</p>
                    </div>
                </div>
                <div className="row">
                    <ContactForm />
                </div>
            </div >
        );
    }
}

export default ContactUs;