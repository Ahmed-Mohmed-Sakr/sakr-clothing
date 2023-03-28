import Button from "../button/button.component";

import "./card-deopdown.styles.scss";

const CardDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="card-items"></div>
      <Button>GO TO CHCKOUT</Button>
    </div>
  );
};

export default CardDropdown;
