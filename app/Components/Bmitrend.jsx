import React from 'react';
import Slider from 'react-slick';
import {NavLink} from '@remix-run/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pre from '../img/pre.png';
import ProductForm from './Product/ProductForm';
const Bmitrend = ({trendingProducts, slides}) => {
  console.log(trendingProducts);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slides, // Show 3 slides on large screens
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, // Medium screens
        settings: {
          slidesToShow: 3, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 576, // Small screens
        settings: {
          slidesToShow: 2, // Show 1 slide on small screens
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="text-center carousel">
        <h1
          className="font-weight-bold custom-heading3"
          style={{paddingTop: '0rem'}}
        >
          <em> Trending Products </em>
        </h1>
        {/* <p>Best deals on individual products picked for you. Shop Now to grab the deals!</p> */}
      </div>
      <Slider {...settings}>
        {/* Your components go here */}
        {trendingProducts.products.nodes.map((product) => (
          <div className="slider-item p-2 text-dark">
            <img
              src={product.variants.nodes[0].image.url}
              alt={product.variants.nodes[0].image.altText}
              className="w-100"
            />
            <div className="mt-1">
              <p style={{fontWeight: '600', fontSize: '.9rem'}}>
                {product.title}
              </p>
              <ProductForm
                custom
                button={
                  <button className="d-flex justify-content-center btn mt-4 category-btn w-100 flash-button">
                    Add to Cart
                  </button>
                }
                variantId={product.variants.nodes[0].id}
              />

              {/* <p style={{ fontSize: '.9rem' }}>Flat 50% Off</p> */}
              {/* <button id='flash-button' className='w-100 p-1'>Shop Now</button> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Bmitrend;
