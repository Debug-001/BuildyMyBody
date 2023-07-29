import React, {useState} from 'react';

const TopSelling = () => {
  return (
    <section id="featured-section">
      <div
        id="carouselExampleControls1"
        className="carousel slide "
        data-ride="carousel"
      >
        <h1 className="d-flex justify-content-center font-weight-bold">
          <em>FEATURED PRODUCTS</em>
        </h1>
        <div className="carousel-inner" id="featured-carousel">
          <div className="carousel-item active">
            <div className="row">
              <div className="col">
                <img className="featured-img" src="/img/tp1.jpg" alt="" />
              </div>
              <div className="col featured-details">
                <h2>100% Whey Protein</h2>
                <h5>
                  {' '}
                  <del className="discount-text">₹50,000</del> ₹ 5,084
                </h5>
                <p>• 5.5 gm BCAA & 4mg GLUTAMINE PER SERVING</p>
                <p>• 0 gm SUGAR PER SERVING</p>
                <p>• 24 gk PROTEIN PER SERVNIG</p>
                <a href="/products" className="btn featured-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="row">
              <div className="col">
                <img className="featured-img" src="/img/tp2.jpg" alt="" />
              </div>
              <div className="col featured-details">
                <h2>100% Whey Protein</h2>
                <h4>
                  {' '}
                  <del className="discount-text">₹50,000</del> ₹ 5,084
                </h4>
                <p>• 5.5 gm BCAA & 4mg GLUTAMINE PER SERVING</p>
                <p>• 0 gm SUGAR PER SERVING</p>
                <p>• 24 gk PROTEIN PER SERVNIG</p>
                <a href="/products" className="btn featured-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="row">
              <div className="col">
                <img className="featured-img" src="/img/tp3.jpg" alt="" />
              </div>
              <div className="col featured-details">
                <h2>100% Whey Protein</h2>
                <h4>
                  {' '}
                  <del className="discount-text">₹50,000</del> ₹ 5,084
                </h4>
                <p>• 5.5 gm BCAA & 4mg GLUTAMINE PER SERVING</p>
                <p>• 0 gm SUGAR PER SERVING</p>
                <p>• 24 gk PROTEIN PER SERVNIG</p>
                <a href="/products" className="btn featured-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="row">
              <div className="col">
                <img className="featured-img" src="/img/tp4.jpg" alt="" />
              </div>
              <div className="col featured-details">
                <h2>100% Whey Protein</h2>
                <h4>
                  {' '}
                  <del className="discount-text">₹50,000</del> ₹ 5,084
                </h4>
                <p>• 5.5 gm BCAA & 4mg GLUTAMINE PER SERVING</p>
                <p>• 0 gm SUGAR PER SERVING</p>
                <p>• 24 gk PROTEIN PER SERVNIG</p>
                <a href="/products" className="btn featured-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls1"
          id="carousel-controls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls1"
          id="carousel-controls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
};

export default TopSelling;
