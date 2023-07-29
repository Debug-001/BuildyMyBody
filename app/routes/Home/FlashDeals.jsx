import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import Slider from 'react-slick';

const FlashDeals = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <>
      <section id="trending-products">
        <div className="container mb-5 py-5">
          <h1 className="d-flex justify-content-center align-items-center font-weight-bold">
            <em>Trending Products</em>
          </h1>
          <ul className="nav nav-tabs mt-5" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                All
              </a>
            </li>
            <div className="vl"></div>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Whey Protein
              </a>
            </li>
            <div className="vl"></div>

            <li className="nav-item">
              <a
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Enhanced Athelete
              </a>
            </li>
            <div className="vl"></div>

            <li className="nav-item">
              <a
                className="nav-link"
                id="new-tab"
                data-toggle="tab"
                href="#new"
                role="tab"
                aria-controls="new"
                aria-selected="false"
              >
                Gainers
              </a>
            </li>
            <div className="vl"></div>

            <li className="nav-item">
              <a
                className="nav-link"
                id="test-tab"
                data-toggle="tab"
                href="#test"
                role="tab"
                aria-controls="test"
                aria-selected="false"
              >
                Tesosterone Support
              </a>
            </li>
            <div className="vl"></div>

            <li className="nav-item">
              <a
                className="nav-link"
                id="mult-tab"
                data-toggle="tab"
                href="#mult"
                role="tab"
                aria-controls="mult"
                aria-selected="false"
              >
                Multivitamins
              </a>
            </li>
            <div className="vl"></div>

            <li className="nav-item">
              <a
                className="nav-link"
                id="fat-tab"
                data-toggle="tab"
                href="#fat"
                role="tab"
                aria-controls="fat"
                aria-selected="false"
              >
                Fat burners
              </a>
            </li>
          </ul>

          <div className="tab-content " id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="container" id="wheyprotein">
                <Slider
                  asNavFor={nav1}
                  ref={slider2}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div className="card" id="trend-card">
                    <img
                      className="card-img-trending"
                      src="/img/tp1.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        ProStar 100% Whey Protein
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹ 5,599.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="trend-card">
                    <img
                      className="card-img-trending"
                      src="/img/tp2.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Enhanced Athlete Rad 140
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹5000.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="trend-card">
                    <img
                      className="card-img-trending"
                      src="/img/tp3.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Enhanced Athelete Cardarine
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,000
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="trend-card">
                    <img
                      className="card-img-trending"
                      src="/img/tp4.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Ehanced Athlete MK-677
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹5000.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="trend-card">
                    <img
                      className="card-img-trending"
                      src="/img/tp5.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        NitroTech Performance Series
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,500.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="trend-card">
                    <img
                      className="card-img-trending"
                      src="/img/tp6.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        BSN Syntha 6
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,300.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="container" id="wheyprotein">
                <Slider
                  asNavFor={nav1}
                  ref={slider2}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div className="card" id="trend-card">
                    <img
                      className="card-img-trending"
                      src="/img/tp1.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        ProStar 100% Whey Protein
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹ 5,599.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp2.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Enhanced Athlete Rad 140
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹5000.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp3.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Enhanced Athelete Cardarine
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,000
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp4.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Ehanced Athlete MK-677
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹5000.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp5.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        NitroTech Performance Series
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,500.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp6.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        BSN Syntha 6
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,300.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="container" id="wheyprotein">
                <Slider
                  asNavFor={nav1}
                  ref={slider2}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div className="card" id="trend-card">
                    <img
                      className="card-img-trending"
                      src="/img/tp1.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        ProStar 100% Whey Protein
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹ 5,599.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp2.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Enhanced Athlete Rad 140
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹5000.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp3.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Enhanced Athelete Cardarine
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,000
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp4.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Ehanced Athlete MK-677
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹5000.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp5.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        NitroTech Performance Series
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,500.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp6.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        BSN Syntha 6
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,300.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="new"
              role="tabpanel"
              aria-labelledby="new-tab"
            >
              <div className="container" id="wheyprotein">
                <Slider
                  asNavFor={nav1}
                  ref={slider2}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div className="card" id="trend-card">
                    <img
                      className="card-img-trending"
                      src="/img/tp1.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        ProStar 100% Whey Protein
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹ 5,599.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp2.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Enhanced Athlete Rad 140
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹5000.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp3.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Enhanced Athelete Cardarine
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,000
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp4.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Ehanced Athlete MK-677
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹5000.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp5.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        NitroTech Performance Series
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,500.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp6.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        BSN Syntha 6
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,300.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="test"
              role="tabpanel"
              aria-labelledby="tes-tab"
            >
              <div className="container" id="wheyprotein">
                <Slider
                  asNavFor={nav1}
                  ref={slider2}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div className="card" id="trend-card">
                    <img
                      className="card-img-trending"
                      src="/img/tp1.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        ProStar 100% Whey Protein
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹ 5,599.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp2.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Enhanced Athlete Rad 140
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹5000.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp3.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Enhanced Athelete Cardarine
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,000
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp4.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Ehanced Athlete MK-677
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹5000.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp5.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        NitroTech Performance Series
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,500.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp6.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        BSN Syntha 6
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,300.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="mult"
              role="tabpanel"
              aria-labelledby="mult-tab"
            >
              <div className="container" id="wheyprotein">
                <Slider
                  asNavFor={nav1}
                  ref={slider2}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div className="card" id="trend-card">
                    <img
                      className="card-img-trending"
                      src="/img/tp1.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        ProStar 100% Whey Protein
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹ 5,599.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp2.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Enhanced Athlete Rad 140
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹5000.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp3.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Enhanced Athelete Cardarine
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,000
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp4.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Ehanced Athlete MK-677
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹5000.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp5.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        NitroTech Performance Series
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,500.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp6.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        BSN Syntha 6
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,300.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="fat"
              role="tabpanel"
              aria-labelledby="fat-tab"
            >
              <div className="container" id="wheyprotein">
                <Slider
                  asNavFor={nav1}
                  ref={slider2}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div className="card" id="trend-card">
                    <img
                      className="card-img-trending"
                      src="/img/tp1.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        ProStar 100% Whey Protein
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹ 5,599.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp2.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Enhanced Athlete Rad 140
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹5000.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp3.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Enhanced Athelete Cardarine
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,000
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp4.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        Ehanced Athlete MK-677
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹5000.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp5.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        NitroTech Performance Series
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,500.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="card" id="">
                    <img
                      className="card-img-trending"
                      src="/img/tp6.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-content">
                      <h5 className="d-flex justify-content-center mt-5">
                        BSN Syntha 6
                      </h5>
                      <p className="d-flex justify-content-center font-weight-bold mt-3">
                        ₹4,300.00
                      </p>
                      <a
                        href="#"
                        className="d-flex justify-content-center btn btn-danger mt-4"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
