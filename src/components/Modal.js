import React, { Component } from 'react';
import styled from 'styled-components'
import {ProductConsumer} from '../Context'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'

class Modal extends Component {
    render() {
        return (
           <ProductConsumer>
               {(value)=>{
                   const {modalOpen,modalClose}= value;
                   const {img,price,title} =
                   value.modalProduct;
                   if(!modalOpen){
                       return null;
                   }
                   else{
                      return ( <ModalContainer>
                         <div className="Container">
                             <div className="row">
                                 <div id="modal" className="col-8 mx-auto col-md-8 col-lg-8 text-center text-capitalize p-5">
                                     <h5>Item Added to cart</h5>
                                     <img src={img} className="img-fluid" alt="product" />
                                     <h5>{title}</h5>
                                     <h5 className="text-muted" >price : ${price}</h5>
                                     <Link to='/' >
                                         <ButtonContainer onClick={()=> value.closeModal()} >
                                            Continue shopping
                                         </ButtonContainer>
                                     </Link>
                                     <Link to='/cart' >
                                         <ButtonContainer cart  onClick={()=> value.closeModal()}>
                                             Go to the Cart
                                         </ButtonContainer>
                                     </Link>
                                 </div>
                             </div>

                         </div>
                       </ModalContainer>
                      )
                   }

                   
               }

               }
           </ProductConsumer>
        );
    }
}
const ModalContainer=styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);


display: flex;
align-items:center;

justify-content:center;

#modal{
    background:var(--mainWhite);
}
`

export default Modal;