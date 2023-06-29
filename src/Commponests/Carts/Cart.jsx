import React, { Component } from 'react'
import './Cart.css'

export default class Carts extends Component {
  render() {
    
    return (
      <>
      <h2 className='caption'>Cart Items</h2>
      {this.props.cartitem.length === 0 ? <h2>Cart is Empty</h2> :'' }
      {this.props.cartitem.map((value , index)=>{
        return (
          
          <div key={value.id} className='items mt-4 ms-4 ' >
              <div>
            <div className='image-item mt-3'>
              <img height='90px' className='w-100' src={value.image} alt="test" /></div>
            <div className="budyItem text-center  mt-3  " >
              <h4>{value.title}</h4>
              <span className=' price fs-3'>$ {value.price}</span>
              <div className='Items-action '>
                <button onClick={()=>{ this.props.addItem(value)}}  className='btn btn-primary '>+</button>
                <span className=' px-3'>{value.qty}</span>
                <button  onClick={()=>{ this.props.removeitem(value)}}  className='btn btn-danger '> -</button>
                <button onClick={()=>{ this.props.delete(value)}}  className='btn btn-danger  ms-1'> <i class="fa-solid fa-trash"></i></button>
                <hr />
    
              </div>
              <div>
    
              </div>
            </div>
        
          </div>
          </div>
        )

      })}
    
      
      </>
    )
  }
}
// onClick={()=>{ this.props.addItem(value)} 
         
          // }