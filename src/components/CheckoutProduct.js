import React from "react";
import "../styles/CheckoutProduct.css";
import { useStateValue } from "../services/StateProvider";

function CheckoutProduct({ id, image, title, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkout__product">
      <div className="checkout__product_image_wrapper">
        <img
          className="checkout__product_image"
          src={image}
          alt="product.jpg"
        />
      </div>
      <div className="checkout__product_info">
        <p className="checkout__product_title">{title}</p>
        <p className="checkout__product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button className="checkout__product_btn" onClick={removeFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
