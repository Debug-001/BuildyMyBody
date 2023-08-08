import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";

const FeaturedProducts = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <section id="product-card">
      <div className="container" id="cgap">
        <h1 className="d-flex justify-content-center py-5 font-weight-bold font-weight-bold"><em>SHOP BY CATEGORIES</em></h1>
        {/* <div className="vl"></div> */}
        {/* <Slider
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}

        > */}

        <Slider

          asNavFor={nav1}
          ref={slider2}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]}
        >
          <div className="card" style={{ width: "18rem", paddingBottom: "" }} id="cgap">
            <img className="card-img-top" src="/img/ds1.jpg" alt="Card image cap" />
            <div className="card-content">
              <a href="#" className=" btn category-btn  d-flex justify-content-center mt-4">
                Shop now
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", paddingBottom: "" }} id="cgap">
            <img className="card-img-top" src="/img/ds2.jpg" alt="Card image cap" />
            <div className="card-content">
              <a href="#" className=" btn category-btn d-flex justify-content-center mt-4">
                Shop now
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", paddingBottom: "" }} id="cgap">
            <img className="card-img-top" src="/img/ds3.jpg" alt="Card image cap" />
            <div className="card-content">
              <a href="#" className=" btn category-btn d-flex justify-content-center mt-4">
                Shop now
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", paddingBottom: "" }} id="cgap">
            <img className="card-img-top" src="/img/ds4.jpg" alt="Card image cap" />
            <div className="card-content">
              <a href="#" className=" btn category-btn d-flex justify-content-center mt-4">
                Shop now
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", paddingBottom: "" }} id="cgap">
            <img className="card-img-top" src="/img/ds5.jpg" alt="Card image cap" />
            <div className="card-content">
              <a href="#" className=" btn category-btn d-flex justify-content-center mt-4">
                Shop now
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", paddingBottom: "" }} id="cgap">
            <img className="card-img-top" src="/img/ds6.jpg" alt="Card image cap" />
            <div className="card-content">
              <a href="#" className=" btn category-btn d-flex justify-content-center mt-4">
                Shop now
              </a>
            </div>
          </div>

        </Slider>
      </div>
    </section>
  );
};

export default FeaturedProducts;