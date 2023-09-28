import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { MediaFile, Money, ShopPayButton } from '@shopify/hydrogen-react';
import ProductCarousal from './ProductCarousal';
import ProductOptions from './ProductOptions';
import ProductForm from './ProductForm';
import Protien from '../../../dist/client/img/protien.png';
const Product = ({ data }) => {
  const { product, selectedVariant, storeDomain, orderable } = data;

  return (
    <>
      <Navbar />
      <div className="product " >
        <div className="container-fluid">
          <div className="row ">
            {/* image column  */}
            <div className="col-sm-12 col-md-12 col-lg-3 mt-5">
              <ProductCarousal media={product.media.nodes} />
            </div>
            {/* middle column  */}
            <div className="col-sm-12 col-lg-6 col-md-12 mt-5">
              <h2 className="text-lg-left text-md-center text-sm-center m-lg-0 ml-md-5 mr-md-5 ml-sm-5 mr-sm-5  " style={{ fontSize: '30px', fontWeight: '800' }}>
                {product.title}
              </h2>
              <div className="off m-lg-0 ml-md-5 mr-md-5 ml-sm-5 mr-sm-5">
                <a href="">
                  <p className="knowmore  "> Know More</p>
                </a>
                <div className="offers d-flex justify-content-md-center">
                  <div className="d-flex p-3 ">
                    <span>
                      <p className="front  p-2" style={{ border: '1px dashed', fontWeight: '700', fontSize: '28px' }} >OFFERS</p>
                    </span>
                    <span>
                      <p className="front  p-2 " style={{ border: '1px dashed', fontSize: '15px' }}>
                        Extra 30% off site wide Use Code: Om30 Terms and
                        Condtions Applied.
                      </p>
                    </span>

                  </div>
                </div>
              </div>
              <div className="row mt-5 d-flex flex-column">
                {/* weight/flavour section  */}
                <div className="col ">
                  <p className="title  ">
                    MRP:<del>₹5,999</del>
                  </p>
                  <h2 className="d-flex title  ">
                    Price:
                    <Money withoutTrailingZeros data={selectedVariant.price} className='ml-2' style={{ fontSize: '38px' }} />
                    <div className="ml-3 d-flex align-items-center">
                      <p style={{ color: '#ff2828' }} className='product-btn p-2'  > 25% off</p>
                    </div>
                  </h2>
                  <p className="title  " style={{ fontSize: '14px', opacity: '.7' }}>
                    (EMI starts from ₹211.45) | Earn BMB Cash ₹90{' '}
                    <span className=""> Free Shipping</span>
                  </p>
                  {/* show now btn  */}
                  <div className=" mt-4 d-flex row ">
                    <div className="col  ">
                      <ProductForm variantId={selectedVariant?.id} />
                    </div>
                    <div className="col">
                      {orderable && (
                        <ShopPayButton
                          storeDomain={storeDomain}
                          variantIds={[selectedVariant?.id]}
                          className="btn  "
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="col title  mt-4">
                  <ProductOptions
                    options={product.options}
                    selectedVariant={selectedVariant}
                  />
                </div>

                {/* mrp section  */}

              </div>
              <hr className='w-100' />
              <h4 className="mt-5 title  ">
                Check Delivery
              </h4>
              <div className="input-group mb-3 m-lg-0 ml-md-5 mr-md-5 ml-sm-5 mr-sm-5 title">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Pincode"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary  "
                    type="button"
                  >
                    Check
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-8  d-lg-none" id="product-tabs">
              <ul
                className="nav nav-tabs mt-4 d-flex justify-content-center w-100"
                style={{ background: 'black' }}
                id="myTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active   "
                    id="descr-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
              </ul>

              <div className="tab-content mt-3" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="descr-tab"
                  dangerouslySetInnerHTML={{
                    __html: product.descriptionHtml,
                  }}
                ></div>
              </div>
            </div>

            {/* featured products section   */}
            <div id="third" className="col-lg-3 flex-lg-column mt-5">
              <h4 className="d-flex justify-content-center font-weight-bolder ">
                <em className=" ">FEATURED PRODUCTS</em>
              </h4>
              <div className="custom-fl-product d-md-flex flex-lg-column">
                <div className="d-flex mt-4 flex-column">
                  <div className="w-100">
                    <img
                      src={Protien}
                      style={{ objectFit: 'contain' }}
                      alt="side bar product"
                    />
                  </div>
                  <div>
                    <h6 className="font-weight-bold mt-4  text-center">
                      Syntha-6 Protein Matrix
                    </h6>
                    <h6 className="mt-3 font-weight-bold  text-center">
                      ₹6906.90
                    </h6>
                    <a href="/carts" className="btn product-btn d-flex justify-content-center"  >
                      Add to Cart
                    </a>
                  </div>
                </div>
                <div className="d-flex mt-4 flex-column">
                  <div className="w-100">
                    <img
                      src={Protien}
                      style={{ objectFit: 'contain' }}
                      alt="side bar product"
                    />
                  </div>
                  <div>
                    <h6 className="font-weight-bold mt-4  text-center">
                      Syntha-6 Protein Matrix
                    </h6>
                    <h6 className="mt-3 font-weight-bold  text-center">
                      ₹6906.90
                    </h6>
                    <a href="/carts" className="btn product-btn d-flex justify-content-center"  >
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid ">
            {/* <hr /> */}
            <div className="row">
              <div
                className="col-lg-8 d-lg-block d-md-none d-sm-none pro-none"
                id="product-tabs"
              >
                <ul
                  className="nav nav-tabs mt-4 d-flex justify-content-center w-100"
                  style={{}}
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active   "
                      id="descr-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Description
                    </a>
                  </li>
                  {/* <div className="vl mt-2 py-3 mx-2"></div>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="howto-tab"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Directions To Use
                        </a>
                      </li>
                      <div className="vl mt-2 py-3 mx-2"></div>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="reviews-tab"
                          data-toggle="tab"
                          href="#contact"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          Reviews
                        </a>
                      </li> */}
                </ul>

                <div className="tab-content mt-3" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="descr-tab"
                    dangerouslySetInnerHTML={{
                      __html: product.descriptionHtml,
                    }}
                  ></div>
                  {/* <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="howto-tab"
                      >
                        Food truck fixie locavore, accusamus mcsweeney's marfa
                        nulla single-origin coffee squid. Exercitation +1 labore
                        velit, blog sartorial PBR leggings next level wes anderson
                        artisan four loko farm-to-table craft beer twee. Qui photo
                        booth letterpress, commodo enim craft beer mlkshk aliquip
                        jean shorts ullamco ad vinyl cillum PBR. Homo nostrud
                        organic, assumenda labore aesthetic magna delectus mollit.
                        Keytar helvetica VHS salvia yr, vero magna velit sapiente
                        labore stumptown. Vegan fanny pack odio cillum wes
                        anderson 8-bit, sustainable jean shorts beard ut DIY
                        ethical culpa terry richardson biodiesel. Art party
                        scenester stumptown, tumblr butcher vero sint qui sapiente
                        accusamus tattooed echo park.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="contact"
                        role="tabpanel"
                        aria-labelledby="reviews-tab"
                      >
                        Etsy mixtape wayfarers, ethical wes anderson tofu before
                        they sold out mcsweeney's organic lomo retro fanny pack
                        lo-fi farm-to-table readymade. Messenger bag gentrify
                        pitchfork tattooed craft beer, iphone skateboard locavore
                        carles etsy salvia banksy hoodie helvetica. DIY synth PBR
                        banksy irony. Leggings gentrify squid 8-bit cred
                        pitchfork. Williamsburg banh mi whatever gluten-free,
                        carles pitchfork biodiesel fixie etsy retro mlkshk vice
                        blog. Scenester cred you probably haven't heard of them,
                        vinyl craft beer blog stumptown. Pitchfork sustainable
                        tofu synth chambray yr.
                      </div> */}
                </div>
              </div>
              <div id="third" className="col-lg-4 flex-lg-column  ">
                <h4 className="d-flex justify-content-center font-weight-bolder  ">
                  <em>RELATED PRODUCTS</em>
                </h4>
                <div className="custom-fl-product d-md-flex flex-lg-column">
                  <div className="d-flex mt-4">
                    <div className="w-100">
                      <img
                        src={Protien}
                        style={{ objectFit: 'contain' }}
                        alt="side bar product"
                      />
                    </div>
                    <div>
                      <h6 className="font-weight-bold mt-4  ">
                        Syntha-6 Protein Matrix
                      </h6>
                      <h6 className="mt-3 font-weight-bold  ">
                        ₹6906.90
                      </h6>
                      <a href="/carts" className="btn  category-btn " style={{ fontWeight: '500', fontSize: '1.1rem' }} >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <div className="w-100">
                      <img
                        src={Protien}
                        style={{ objectFit: 'contain' }}
                        alt="side bar product"
                      />
                    </div>
                    <div>
                      <h6 className="font-weight-bold mt-4  ">
                        Syntha-6 Protein Matrix
                      </h6>
                      <h6 className="mt-3 font-weight-bold  ">
                        ₹6906.90
                      </h6>
                      <a href="/carts" className="btn  category-btn " style={{ fontWeight: '500', fontSize: '1.1rem' }} >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;
