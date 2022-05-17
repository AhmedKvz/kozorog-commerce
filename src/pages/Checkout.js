import React from "react";
import Subtotal from "../components/Subtotal";
import "../styles/Checkout.css";
import { useStateValue } from "../services/StateProvider";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__header">
          <div className="checkout__left">
            <h4>Hello, {user?.email}</h4>
            <h2 className="checkout__title">Your shopping basket</h2>
          </div>
          <div className="checkout__right">
            <Subtotal />
          </div>
        </div>

        <hr />
        <div className="checkout__products">
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Checkout;
