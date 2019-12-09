import React, { Component } from 'react';

import Titlte from './Titlte';
import Product from './Product'
import {ProductConsumer} from '../Context'

class ProductList extends Component {
    
    render() {
        return (
            <React.Fragment>
   <div className="py-5">
       <div className="container">
           <Titlte name="our" title ="products"></Titlte>
           <div className="row">
               <ProductConsumer>
                   {value=>{
                     return value.products.map(product => {
                         return <Product key ={product.id} product=
                         {product}/>;

                     })
                   }}
               </ProductConsumer>

           </div>
       </div>
   </div>
            </React.Fragment>

            //    <Product></Product>
        );
    }
}

export default ProductList;