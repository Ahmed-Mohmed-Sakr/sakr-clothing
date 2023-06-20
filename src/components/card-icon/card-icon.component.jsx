import { useContext } from "react";

import { DropdownContext } from "../../contexts/dropdown.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./card-icon.styles.scss";

const CardIcon = () => {
  const { dropdownStatus, setDropdownStatus, cardCount } =
    useContext(DropdownContext);

  const toggleDropdoenStats = () => setDropdownStatus(!dropdownStatus);

  return (
    <div className="cart-icon-container" onClick={toggleDropdoenStats}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cardCount}</span>
    </div>
  );
};

export default CardIcon;
