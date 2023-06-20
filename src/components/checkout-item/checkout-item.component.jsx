import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cardItem }) => {
  const { name, imageUrl, price, quantity } = cardItem;

  const { deleteItemFromCard, addItemToCard, removeItemFromCard } =
    useContext(DropdownContext);

  const deleteItemHandler = () => deleteItemFromCard(cardItem);
  const AddItemHandler = () => addItemToCard(cardItem);
  const removeItemHandler = () => removeItemFromCard(cardItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={AddItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
