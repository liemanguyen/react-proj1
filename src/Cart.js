import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import ProductData from "./Data";
import Receipt from "./Receipt";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: []
    }
  }

  handleAddToCart(productName, price) {
    let newItems = [...this.state.cartItems];
    let searchedAllItems = true;
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].productName === productName) {
        newItems[i].count++;
        searchedAllItems = false;
        break;
      }
    }
    if (searchedAllItems) {
      this.setState({
        cartItems: [...newItems, {
          productName: productName,
          price: price,
          count: 1
        }]
      });
    } else {
      this.setState({
        cartItems: newItems});
    }
  }

  handleRemoveFromCart(productName) {
    this.setState({
      cartItems: this.state.cartItems.filter(item => item.productName !== productName)
    })
  }

  render() {
    return (
        <div className="page-content">
          {ProductData.products.map((product) => (
            <Product productName={product.name} price={product.cost.toFixed(2)} onAddToCart={() => this.handleAddToCart(product.name, product.cost.toFixed(2))} onRemoveFromCart={() => this.handleRemoveFromCart(product.name)} />
          ))}
          <Receipt items={this.state.cartItems} />
        </div>
    );
  }

}

export default Cart;
