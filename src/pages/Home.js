import React, { useRef } from "react";
import "../styles/Home.css";
import Header from "../components/Header";
import Transparent from "../images/Transparent.png";
import Video from "../images/Video.mp4";
import Footer from "../components/Footer";
import Product from "../components/Product";
import image_1 from "../images/image_1.jpg";
import image_2 from "../images/image_2.jpg";
import image_3 from "../images/image_3.jpg";
import image_4 from "../images/image_4.jpg";
import image_5 from "../images/image_5.jpg";
import image_6 from "../images/image_6.jpg";
import image_7 from "../images/image_7.jpg";
import image_8 from "../images/image_9.png";
import image_9 from "../images/image_9.jpg";

// import image_10 from "../images/image_10.jpg";
function Home() {
  const scrollToRef = useRef();
  return (
    <>
      <Header />

      <div className="home">
        <div className="home__container">
          <div className="home__container__images">
            <img
              className="home_optionOneTransparent"
              src={Transparent}
              alt="Transparent.png"
            />
            <video
              loop={true}
              autoPlay={true}
              muted
              className="home_optionTwoHero"
              src={Video}
              alt="Video.jpg"
            />
            <button
              className="product__shop_scroll"
              onClick={() => scrollToRef.current.scrollIntoView()}
            >
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="home__shopping_area">
          <div ref={scrollToRef} className="home__row ">
            <Product
              id={1}
              image={image_1}
              title="Hand-Carved Longhorn Skull"
              productName=" Grey Cocaine"
              price={649}
            />
            <Product
              id={2}
              image={image_2}
              title="Standard Longhorns"
              productName=" Trapper"
              price={649}
            />
            <Product
              id={3}
              image={image_3}
              title="Longhorn Skull"
              productName=" Black Magic"
              price={649}
            />
          </div>
          <div className="home__row">
            <Product
              id={4}
              image={image_4}
              title="Standard Longhorns"
              productName="Trapper"
              price={439}
            />
            <Product
              id={5}
              image={image_5}
              title="Carved Ram Skull"
              productName=" White Boho"
              price={649}
            />
            <Product
              id={6}
              image={image_6}
              title="Hand-Carved Ram Skull"
              productName="Black Boho"
              price={649}
            />
          </div>
          <div className="home__row">
            <Product
              id={7}
              image={image_7}
              title="Longhorn Skull"
              productName=" White Storm"
              price={649}
            />
            <Product
              id={8}
              image={image_8}
              title="Carved Cow Skull"
              productName=" White Mandala"
              price={649}
            />
            <Product
              id={9}
              image={image_9}
              title="Cow Skull"
              productName="Black Mirror // Mosaic Finish "
              price={649}
            />
          </div>
        </div>
        <button
          className="product__shop_now"
          onClick={() =>
            window.scrollTo({
              left: 0,
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Scroll top top
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Home;
