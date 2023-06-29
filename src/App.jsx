import React, { Component } from 'react'
import Navbar from './Commponests/Navbar.jsx/Navbar'
import Cart from './Commponests/Carts/Cart'
import Products from './Commponests/Products/Products'

export default class App extends Component {

  state={ cartitem:[]}
componentDidMount(){
  let data = JSON.parse(localStorage.getItem('data'))
  if (JSON.parse(localStorage.getItem('data')) !==null){
    this.setState( {cartitem :data})
  }
}

  addtoLocalStorage = (item)=>{
    localStorage.setItem('data', JSON.stringify (item))

  }
 addItem=(item)=>{
  let exist = this.state.cartitem.find((elm)=>elm.id === item.id)
  if(exist){
    let Cart = this.state.cartitem.map((elm)=>elm.id === item.id ? {...exist , qty : exist.qty + 1}: elm)
    this.setState({cartitem :Cart})
   this.addtoLocalStorage(Cart)
  }else{
    let Cart =[...this.state.cartitem, {...item , qty : 1  }]
    this.setState({cartitem :Cart})
    this.addtoLocalStorage(Cart)
  }

 }
 removeitem =(item)=>{
  let exist = this.state.cartitem.find((elm)=>elm.id === item.id)
  if (exist.qty > 1){
    let Cart = this.state.cartitem.map ((elm)=>elm.id === item.id ?{...exist , qty: exist.qty -1} : elm)
this.setState({cartitem :Cart})
this.addtoLocalStorage(Cart)
  }

 }
 delete = (item)=>{
  let cart= this.state.cartitem.filter((elm)=>elm.id !== item.id )
   
   this.setState({cartitem :cart})
   this.addtoLocalStorage(Cart)
 }
 
  render() {
    let totalqty = this.state.cartitem.reduce( (x , y )=> x + y.qty , 0)
    let totalprice = this.state.cartitem.reduce( (x , y )=> x + y.qty* y.price, 0)
    return (
      <>
      <Navbar totalprice = {totalprice} totalqty = {totalqty} />
         <div className="container">
          <div className="row">
            <div className="col-md-9 ">
            <Products addItem={this.addItem}/>
            </div>
            <div className="col-md-3">
            <Cart  delete={this.delete} removeitem ={this.removeitem}   addItem={this.addItem} cartitem={this.state.cartitem}/>
            </div>
          </div>
         </div>

      
      </>
    )
  }
}

// componentDidMount(){
//   let data = JSON.parse(localStorage.getItem('item'))
//   if ( data != null){
//     this.setState({cartitem:data})
//   }
  
  
// }