import React, { Component } from 'react';
import './App.css';
import CartHeader from './Components/CartHeader';
import CartFooter from './Components/CartFooter';
import CartItems from './Components/CartItems';
import AddItem from './Components/AddItem';
import TotalPrice from './Components/TotalPrice'
class App extends Component {
  constructor() {
    super() 
      this.state = {

        products: [
          { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
          { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
          { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
          { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
          { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
          { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
          { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
          { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
          { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
        ],
        
        cartItemsList: [
          { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
          { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
          { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
        ],
        totals: {price: 0, quantity: 0},
      }
    }
  
totals = () => {

    const totalQuantity = this.state.cartItemsList.reduce( (acc, item) => { 
      return acc + item.quantity
    }, 0)

    const totalPrices = this.state.cartItemsList.reduce( (acc, item) => {
      return acc + (item.quantity * (item.product.priceInCents/100))
    }, 0)

    const totalPrice = totalPrices.toFixed(2)

    return {totalQuantity, totalPrice}
}

addCartItem = (form) => {
  const addCartItem = this.state.products.find( (product) => 
    product.id === parseInt(form.id) 
  )

  const cartIds = this.state.cartItemsList.map( (item) => {
    return item.id
  })

  const newId = Math.max(...cartIds) + 1

  const newCartItem = {
    quantity: parseInt(form.quantity),
    id: newId,
    product: addCartItem
  }
  
  this.setState({
    cartItemsList: [...this.state.cartItemsList, newCartItem]
  })
}

  render() {


    return (
      <div>
        <CartHeader/>
        <CartItems cartItemsList={this.state.cartItemsList}/>
        <TotalPrice totals={this.totals()}/>
        <AddItem products={this.state.products} addCartItem={this.addCartItem} />
        <CartFooter copyright={'2016'}/>
      </div>
    );
  }
}

export default App;
