import React, { Component } from 'react'
import './Navbar.css'



export default class Navbar extends Component {
  render() {
    return (
      <>
   <nav className="navbar navbar-expand-lg ">
    <div className="container">
     <li className="navbar-brand  text-white list-unstyled carousel " href="#">Store App</li> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        
        <li className="nav-item  position-relative">
          <span className='me-2 text-white'>${this.props.totalprice.toFixed(2)}</span>
          <span className='text-white'>Cart <i className="fa-solid fa-cart-shopping "></i></span>
          
          <span className='badge rounded-pill bg-danger badge-Cart '> {this.props.totalqty}</span>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

      
      
      
      </>
    )
  }
}
