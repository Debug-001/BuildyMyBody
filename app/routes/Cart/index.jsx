import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

import {useState} from 'react';

const Cart = () => {
  const [btnClass, setBtnClass] = useState('transparent');
  function toggleColor() {
    // const [btnClass, setBtnClass] = useState('blue-color');
    if (btnClass === 'transparent') {
      setBtnClass('red-color');
    } else {
      setBtnClass('transparent');
    }
  }
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert('Please add items to cart');
      setNum(0);
    }
  };

  const removeItem = () => {};

  return (
    <>
      <Navbar />
      <asection className="main-div ">
        <div className="container-fullwidth mx-5 mt-4">
          <div className="row ">
            <div
              className="col h-100 col-12 col-sm-12 col-md-12 col-lg-7"
              id="leftside"
            >
              <div className="card mt-0">
                <div className="row d-flex justify-content-center">
                  <div className="col-12">
                    <ul id="progressbar" className="text-center">
                      <li className="step0"></li>
                      <li className="step0"></li>
                      <li className="step0"></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="all-info d-flex mt-5">
                <img
                  src="/img/protien.png"
                  alt=""
                  className="w-25 protien-image"
                />
                {/* PROTIEN INFO */}
                <div className="protien-info">
                  <p className="text-start " id="protien-name">
                    MB Fuel One Whey Protein 4.4 lb Chocolate
                  </p>
                  <p className="text-start mt-1">
                    {' '}
                    £5,099{' '}
                    <span className="ml-2" id="fixed-price">
                      {' '}
                      3,500{' '}
                    </span>{' '}
                    <sup id="savings">[Saved 21,5991]</sup>{' '}
                  </p>
                  <p className="text-startr text-success mt-1">
                    Delivery by June 26th
                  </p>
                  <p
                    className="text-start mt-1 d-flex justify-content-between"
                    id="cashback"
                  >
                    Get Rs 70 © MB Cash{' '}
                    <i
                      className="fa-solid fa-trash "
                      onClick={() => removeItem()}
                    ></i>
                  </p>
                  <p className="text-start mt-3">
                    {' '}
                    <i
                      className={`${btnClass} fa-regular fa-heart `}
                      onClick={toggleColor}
                    ></i>
                    Add to Wishlist{' '}
                  </p>
                </div>
                <div className="add-to-cart  ml-lg-2 ml-md-2">
                  <span className="minus" onClick={decNum}>
                    -
                  </span>
                  <span className="num">{num}</span>
                  <span className="plus" onClick={incNum}>
                    +
                  </span>
                </div>
              </div>
              {/* END OF PROTIEN INFO */}
            </div>

            <div className="col  h-100 col-12 col-sm-12 col-md-12 col-lg-5 order-summary mt-1 mt-md-3 px-5">
              <div className="card-1 px-4 py-2">
                <p className="text-start mt-2" id="order">
                  My Order Summary
                </p>
                <p
                  className="text-start d-flex justify-content-between mt-4"
                  id="mrp"
                >
                  Total Mrp <span>Rs 16,097</span>
                </p>
                <p className="text-start d-flex justify-content-between text-secondary mt-2">
                  Total Discount{' '}
                  <span className="text-success">-Rs 16,097</span>{' '}
                </p>
                <hr className="bg-light mt-3 " />
                <p className="text-start d-flex justify-content-between  text-secondary ">
                  Total <span>Rs 11,698</span>{' '}
                </p>
                <hr className="bg-light mt-3 " />
                <a
                  href="/address"
                  className="btn btn-warning w-100 text-dark font-weight-bold"
                >
                  Checkout
                </a>
                <p className="text-center mt-3 py-1 " id="savings-2">
                  You will save 4,399 & earn 2234 MB Cash * on this order
                </p>
              </div>

              <div className="card-1 p-1 mt-3 px-2 font-weight-bold">
                <div className="col h-100 mt-2">
                  <p className="text-start">Have a Coupon?</p>
                  <input
                    type="email"
                    className="form-control input mb-3 mt-3"
                    id="inputEmail"
                    placeholder="Enter code"
                  />
                </div>
              </div>

              <div className="card-1 mt-3 mb-5">
                {/* <div className="col"> */}
                <div className="container-fullwidth text-center">
                  <div className="row d-flex align-items-center">
                    <div className="col-1 d-flex align-items-center justify-content-center">
                      <a
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                      >
                        <div className="carousel-nav-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 129 129"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="col-10">
                      {/*Start carousel*/}
                      <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="row">
                              <div
                                style={{
                                  backgroundImage: 'url("/img/tp2.jpg")',
                                  mixBlendMode: 'multiply',
                                }}
                                className="col-12 col-md d-flex align-items-center justify-content-center"
                              ></div>
                              <div
                                style={{
                                  backgroundImage: 'url("/img/tp2.jpg")',
                                  mixBlendMode: 'multiply',
                                }}
                                className="col-12 col-md d-flex align-items-center justify-content-center"
                              ></div>
                              <div
                                style={{
                                  backgroundImage: 'url("/img/tp3.jpg")',
                                  mixBlendMode: 'multiply',
                                }}
                                className="col-12 col-md d-flex align-items-center justify-content-center"
                              ></div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="row">
                              <div
                                style={{
                                  backgroundImage: 'url("/img/tp4.jpg")',
                                  mixBlendMode: 'multiply',
                                }}
                                className="col-12 col-md d-flex align-items-center justify-content-center"
                              >
                                <img src="" alt="" />
                              </div>
                              <div
                                style={{
                                  backgroundImage: 'url("/img/tp5.jpg")',
                                  mixBlendMode: 'multiply',
                                }}
                                className="col-12 col-md d-flex align-items-center justify-content-center"
                              ></div>
                              <div
                                style={{
                                  backgroundImage: 'url("/img/tp6.jpg")',
                                  mixBlendMode: 'multiply',
                                }}
                                className="col-12 col-md d-flex align-items-center justify-content-center"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End carousel*/}
                    </div>
                    <div className="col-1 d-flex align-items-center justify-content-center">
                      <a href="#carouselExampleIndicators" data-slide="next">
                        <div className="carousel-nav-icon2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 129 129"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of container */}
      </asection>

      <Footer />
    </>
  );
};

export default Cart;
