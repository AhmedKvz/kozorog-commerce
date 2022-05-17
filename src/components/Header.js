import React, { useState } from "react";
import "../styles/Header.css";
import Logo from "../images/kozorog.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../services/StateProvider";
import { auth } from "../services/firebase";
import MenuIcon from "@mui/icons-material/Menu";
function Header(props) {
  const [{ basket, user }] = useStateValue();

  const [showLinks, setShowLinks] = useState(false);

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
        <div className="nav__menu">
          <ul id={showLinks ? "hidden" : ""}>
            <div className="header__wrapper">
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
            </div>
          </ul>

          <Link to={"/checkout"}>
            <div className="header__optionBasket">
              <ShoppingCartIcon />
              <span className="header__otpionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
          <button onClick={() => setShowLinks(!showLinks)}>
            <MenuIcon className="menu__icon" src={MenuIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
