import { Link } from '@remix-run/react';
import React, { useState } from 'react';

const Carousel = () => {
  const [carouselItems, setCarouselItems] = useState([
    {
      src: '/img/banner1.jpg',
      alt: 'First slide',
      active: true,
    },
    {
      src: '/img/banner2.jpg',
      alt: 'Second slide',
      active: false,
    },
    {
      src: '/img/banner3.jpg',
      alt: 'Third slide',
      active: false,
    },
  ]);

  return (
    <section>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        {/* Carousel Indicators (Small Screens) */}
        <ol className="carousel-indicators justify-content-center d-lg-none">
          {carouselItems.map((item, index) => (
            <li
              key={index}
              data-target="#carouselExampleControls"
              data-slide-to={index}
              className={item.active ? 'active' : ''}
            />
          ))}
        </ol>

        {/* Carousel Items */}
        <div className="carousel-inner ">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${item.active ? 'active' : ''}`}
            >
              <img
                className="d-block w-100 img-fluid"
                src={item.src}
                alt={item.alt}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows (Large Screens) */}
        <div className="d-none d-lg-flex justify-content-between align-items-center carousel-navigation">
          <Link
            className="carousel-control-prev"
            to="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </Link>
          <Link
            className="carousel-control-next"
            to="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
