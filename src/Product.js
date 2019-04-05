import React from "react";

class Product extends React.Component {
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
                    <div class="ui bottom attached button" onClick={() => this.props.onAddToCart()}>
                        <i class="add icon"></i>
                        Add to Cart
                    </div>
                    <div class="ui bottom attached button" onClick={() => this.props.onRemoveFromCart()}>
                        <i class="remove icon"></i>
                        Remove from Cart
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
