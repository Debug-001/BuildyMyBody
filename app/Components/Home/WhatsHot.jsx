import React from 'react';
import Slider from 'react-slick';
import {NavLink} from '@remix-run/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hot1 from '../../img/hot1.jpg';
import hot2 from '../../img/hot2.jpg';
import hot3 from '../../img/hot3.jpg';
import hot4 from '../../img/hot4.jpg';

const productData = [
  {
    id: 1,
    link: '/product/insane-labz-psychotic-preworkout',
    image: hot1,
    title: 'Insane Labz Psychotic Preworkout',
    discount: 'Flat 50% Off',
  },
  {
    id: 2,
    link: '/product/genuine-enhanced-four',
    image: hot2,
    title: 'Enhanced Athlete MK-677',
    discount: 'Upto 40% off on Enhanced Athlete Products',
  },
  {
    id: 3,
    link: '/product/mhp-xpel',
    image: hot3,
    title: 'MHP XPEL, 80 Capsules',
    discount: 'Flat 43% Off',
  },
  {
    id: 4,
    link: '/product/genuine-enhanced-two',
    image: hot4,
    title: 'Enhanced Athlete Blue Ox',
    discount: 'Upto 40% off on Enhanced Athlete Products.',
  },
];

const WhatsHot = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section id="whatshot">
      <div className="container pt-5 pb-5">
        <div
          className="d-flex justify-content-center mb-5 text-center"
          style={{flexDirection: 'column', alignItems: 'center'}}
        >
          <h1 className="font-weight-bolder custom-heading4">
            <em>Hot Selling Products</em>
          </h1>
          <hr className="h1-hr" />
        </div>
        <Slider {...settings}>
          {productData.map((product) => (
            <NavLink key={product.id} to={product.link}>
              <div className="slider-item p-2 text-dark">
                <img src={product.image} alt="" className="w-100" />
                <div className="mt-1">
                  <p className="h4 pt-3 font-weight-bolder">{product.title}</p>
                  <p className="h5 pt-2">{product.discount}</p>
                  <button className="btn category-btn mt-3 w-100 p-1">
                    Shop Now
                  </button>
                </div>
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhatsHot;
