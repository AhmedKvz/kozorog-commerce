import React from "react";
import "../styles/Header.css";
import Logo from "../images/kozorog.png";
import SearchIcon from "@mui/icons-material/Search";
import SoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="Logo.png" />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__otpionLineOne">Hello Guest</span>
          <span className="header__otpionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__otpionLineOne">Returns</span>
          <span className="header__otpionLineTwo">Orders</span>{" "}
        </div>

        <div className="header__option">
          <span className="header__otpionLineOne">Your</span>
          <span className="header__otpionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <SoppingBasketIcon />
          <span className="header__otpionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
