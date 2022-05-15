import React from "react";
import { useStateValue } from "../services/StateProvider";
import "../styles/Product.css";

function Product({ id, image, title, productName, price }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket", basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <img className="product__image" src={image} alt="Skull.jpg" />
        <p className="product__desctiption">{title}</p>
        <h1 className="product__name">{productName}</h1>
        <p className="product__price">${price}</p>
        <button onClick={addToBasket} className="product__shop_now">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Product;
