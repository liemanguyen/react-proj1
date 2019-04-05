import React from "react";

class Receipt extends React.Component {
  renderItem(item) {
    return (
      <div className="receipt-item" key={item.productName}>
        <div className="receipt-text">
          {item.productName} x {item.count}
        </div>
        <div className="receipt-text">
          ${(item.price * item.count).toFixed(2)}
        </div>
      </div>
    );
  }

  getTotalCost(items) {
    let totalCost = 0;
    for (let i = 0; i < items.length; i++) {
      totalCost += items[i].price * items[i].count
    }
    return totalCost;
  }

  render() {
    const items = this.props.items;
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${this.getTotalCost(items).toFixed(2)}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;
