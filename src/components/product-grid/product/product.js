import React from 'react'
import './product.css'
const Product = ({ title, sub, desc }) => {
    return (
        <div className="col s12 m6 l4">
            <div className="card hoverable">
                <div className="card-image waves-effect waves-block waves-light">
                    <a href="#!" >
                        <img width="305" src="http://via.placeholder.com/411x411" className="circle responsive-img" alt="Café Integral Chicago" /></a>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4"><i className="material-icons right">more_vert</i></span>
                    <p className="area"><a href="#!">{sub}</a></p>
                    <a href="#!" ><span className="card-title activator brown-text text-darken-4">{title}</span></a>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
        </div >
    )
}

export default Product