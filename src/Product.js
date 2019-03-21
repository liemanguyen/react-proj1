import React from "react";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.counter = 0;
    }

    addToCart() {
        let smallProductName = this.props.productName.toLowerCase();
        if (this.props.limit === 0) {
            alert("This item is out of stock!");
        } else if (this.counter >= this.props.limit) {
            alert("There are too many " + smallProductName + "s in your cart!");
        } else {
            this.counter++;
            alert("There are " + this.counter.toString() + " " + smallProductName + "s in your cart!");
        }
    }

    render() {
        return (
            <div class="ui cards">
                <div class="card">
                    <div class="content">
                        <div class="header">{this.props.productName}</div>
                        <div class="description">
                            Price: ${this.props.price}
                        </div>
                    </div>
                    <div class="ui bottom attached button" onClick={() => this.addToCart()}>
                        <i class="add icon"></i>
                        Add to Cart
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
