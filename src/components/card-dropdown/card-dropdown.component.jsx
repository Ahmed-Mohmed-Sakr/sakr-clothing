import { useContext } from "react";

import { DropdownContext } from "../../contexts/dropdown.context";
import Button from "../button/button.component";
import CardItem from "../card-item/card-item.component";

import "./card-dropdown.styles.scss";

const CardDropdown = () => {
  const { cardItems } = useContext(DropdownContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cardItems.map((item) => (
          <CardItem key={item.id} cardItem={item} />
        ))}
      </div>
      <Button>GO TO CHCKOUT</Button>
    </div>
  );
};

export default CardDropdown;
