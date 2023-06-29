import React, { Component } from 'react'
import "./Products.css"
import data from '../store'

export default class Products extends Component {
  render() {
    return (
      <>
      <div className="row text-center">
       {data.map((value , index)=>{
        return (
          <div key={value.id} className="col-md-4 mt-4">
          <img height='300px' src={value.image} className='w-100' alt="" />
          <div className="bodyCart">
          <h6 className=' mt-4'>{value.title}</h6>
          <span className=''>{value.price} $</span>
          </div>
 
          <button onClick={()=>{ this.props.addItem(value)}
         
          } className=' w-100 btn btn-primary'>Add to Cart</button>
        </div>
        )
       })

       }
      </div>

      
      </>
    )
  }
}
