import React from 'react';
import Slider from 'react-slick';
import {NavLink} from '@remix-run/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pre from '../img/pre.png';
import ProductForm from './Product/ProductForm';
import {Link} from '@remix-run/react';
const Bmitrend = ({trendingProducts, slides, product}) => {
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
            <div>
              <Link to={`/product/${product.handle}`} className="">
                <img
                  src={product.variants.nodes[0].image.url}
                  alt={product.variants.nodes[0].image.altText}
                  className="w-100"
                />
              </Link>
              <div className="mt-1 text-center">
                <p style={{fontWeight: '600', fontSize: '.9rem'}}>
                  {product.title}
                </p>
              </div>
            </div>
            <div>
              <ProductForm
                custom
                button={
                  <button className="d-flex justify-content-center btn mt-4 category-btn w-100 flash-button">
                    Add to Cart
                  </button>
                }
                variantId={product.variants.nodes[0].id}
              />
            </div>
            {/* <div class="card-deck">
              <div class="card bg-primary">
                <div class="card-body text-center flex-column">
                  <img
                    src={product.variants.nodes[0].image.url}
                    alt={product.variants.nodes[0].image.altText}
                    className="w-100"
                    style={{ maxHeight: '131px' }}
                  />
                  <p style={{ fontWeight: '600', fontSize: '.9rem', maxHeight: '65px' }}>
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
                </div>
              </div>
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Bmitrend;
