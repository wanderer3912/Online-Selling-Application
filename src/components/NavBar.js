import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import navlogo from '../logo.svg'
import {ButtonContainer} from './Button'
import styled from 'styled-components'


class NavBar extends Component {
    render() {
     
      return (
         <NavWrapper className="navbar navbar-expand-sm navbar-dark bg-primary px-sm-5">
           <Link to="/">
             <img src={navlogo} alt="store" className="navbar-brand"/>
           </Link>
           <ul className="navbar-nav align-items-center">
             <li className=" nav-item ml-5">
               <Link to="/" className="nav-Link navbar-color">Products</Link>
             </li>
           </ul>
           <Link to='/cart' className="ml-auto " >
             <ButtonContainer >
               <span>
               <i className="fas fa-cart-plus"/>
               </span> my cart
            </ButtonContainer>
           </Link>
         </NavWrapper>
    );

        
    }

  }
const NavWrapper= styled.nav`
background: var(--mainBlue)!important;
.nav-Link{
  color:var(--mainWhite) !important;
  font-size:1.3rem;
  text-transform:capitalize;
}


`
  
export default NavBar;