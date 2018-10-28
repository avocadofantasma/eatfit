import React, { Component } from 'react';
import Product from './product/product.js'
import './product-grid.css'

class ProductGrid extends Component {
    state = {}
    render() {
        return (
            <div className="container product-grid">
                <div className="row">
                    <div className="section">
                        <div className="col s12 m12">
                            <h2>Servicios</h2>
                        </div>
                        {productos().map(producto => <Product title={producto.title} sub={producto.sub} />)}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductGrid;

const productos = () => {
    let arr = []
    for (let i = 0; i < 6; i++)
        arr.push({
            title: `Servicio ${i}`,
            sub: `Link ${i}`
        })

    return arr
}