import { Link, useLoaderData } from '@remix-run/react';
import { useEffect } from 'react';
import ProductForm from '../Product/ProductForm';
import data from '~/routes/data';

const TopSelling = ({ collection }) => {
  return (
    <>
      <section id="featured-section" data-aos="fade-up">
        {/* <section id="featured-section" style={{background: '#FAF4EF'}}> */}
        <div
          id="carouselExampleControls1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div
            className="d-flex justify-content-center mb-5"
            style={{ flexDirection: 'column', alignItems: 'center' }}
          >
            <h1 className="font-weight-bold custom-heading3">
              <em>Featured Products </em>
            </h1>
            <hr className="h1-hr" />
            <a href="/products/all" className='text-dark' style={{ fontSize: '1.2rem', textDecoration: 'underline' }}>
              View All Products --------&#62;
            </a>
          </div>

          {/* <div
            className="d-flex justify-content-center mb-5"
            style={{ flexDirection: 'column', alignItems: 'center' }}
          >
            <h1 className="font-weight-bold custom-heading3">
              <em>Featured Products</em>
            </h1>
            <hr className="h1-hr" />
          </div> */}
          <div className="carousel-inner" id="featured-carousel">
            {collection.products.nodes.map((product, index) => (
              <div
                key={index}
                className={
                  index === 0 ? 'carousel-item active' : 'carousel-item'
                }
              >
                <div className="row">
                  <Link
                    to={`/product/${product.handle}`}
                    className="col-md-5 col-lg-6 d-flex justify-content-center top-scale"
                  >
                    <img
                      className="featured-img"
                      src={product.variants.nodes[0].image?.url || ''}
                      alt={product.variants.nodes[0].image?.altText || ''}

                    />
                    <div style={{ position: 'relative', top: '44px', left: '-24px' }}>
                      <p>25% off</p>
                    </div>
                  </Link>
                  <div className="col featured-details ">
                    <Link to={`/product/${product.handle}`}>
                      <h2 className="w-lg-75">{product.title}</h2>
                      <h4>
                        {product.variants.nodes[0].compareAtPrice && (
                          <del className="discount-text">
                            ₹{product.variants.nodes[0].compareAtPrice.amount}
                          </del>
                        )}{' '}
                        ₹ {product.variants.nodes[0].price.amount}
                      </h4>
                    </Link>
                    <div className="featured-btn">
                      <ProductForm variantId={product.variants.nodes[0].id} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
    </>
  );
};

export default TopSelling;
