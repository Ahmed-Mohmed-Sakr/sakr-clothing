import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cardItems, cardTotal } = useContext(DropdownContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cardItems.map((cardItem) => (
        <CheckoutItem key={cardItem.id} cardItem={cardItem} />
      ))}
      <span className="total">Total: ${cardTotal}</span>
    </div>
  );
};

export default Checkout;
