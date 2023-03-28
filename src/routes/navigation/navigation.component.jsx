import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CardIcon from "../../components/card-icon/card-icon.component";
import CardDropdown from "../../components/card-deopdown/card-deopdown.component";

import { ReactComponent as SakrLogo } from "../../assets/Sakr.svg";

import { UserContext } from "../../contexts/user.context";

import { DropdownContext } from "../../contexts/dropdown.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const { dropdownStatus } = useContext(DropdownContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <SakrLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CardIcon />
        </div>

        {dropdownStatus && <CardDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
