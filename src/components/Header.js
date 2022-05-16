import React from "react";
import "../styles/Header.css";
import Logo from "../images/kozorog.png";
import SearchIcon from "@mui/icons-material/Search";
import SoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../services/StateProvider";
import { auth } from "../services/firebase";
function Header(props) {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to={"/"}>
        <img className="header__logo" src={Logo} alt="Logo.png" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__otpionLineOne">
              {user ? user.email : "Hello Guest"}
            </span>
            <span className="header__otpionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__otpionLineOne">Returns</span>
          <span className="header__otpionLineTwo">Orders</span>{" "}
        </div>

        <Link to={"/checkout"}>
          <div className="header__optionBasket">
            <SoppingBasketIcon />
            <span className="header__otpionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
