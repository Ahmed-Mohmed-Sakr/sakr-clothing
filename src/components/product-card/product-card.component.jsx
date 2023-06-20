import { useContext } from "react";

import { DropdownContext } from "../../contexts/dropdown.context";
import Button from "../button/button.component";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCard } = useContext(DropdownContext);

  const addProductToCartDropdown = () => addItemToCard(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCartDropdown}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
