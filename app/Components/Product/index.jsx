import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { MediaFile, Money, ShopPayButton } from '@shopify/hydrogen-react';
import ProductCarousal from './ProductCarousal';
import { BuyNowButton } from '@shopify/hydrogen-react';
import ProductOptions from './ProductOptions';
import ProductForm from './ProductForm';
import Protien from '../../../dist/client/img/protien.png'
const Product = ({ data }) => {
  const { product, selectedVariant, storeDomain, orderable } = data;

  return (
    <>
      <Navbar />
      <div className="product " style={{ background: 'black' }}>

        <div className="container-fluid">
          <div className="row ">
            {/* image column  */}
            <div className="col-sm-12 col-md-12 col-lg-3 mt-5">
              <ProductCarousal media={product.media.nodes} />
            </div>
            {/* middle column  */}
            <div className="col-sm-12 col-lg-5 col-md-12 mt-5">
              <h2 className="text-lg-left text-md-center text-sm-center m-lg-0 ml-md-5 mr-md-5 ml-sm-5 mr-sm-5 text-light">
                {product.title}
              </h2>
              <div className="off m-lg-0 ml-md-5 mr-md-5 ml-sm-5 mr-sm-5">
                <a href="">
                  <p className="knowmore text-light"> Know More</p>
                </a>
                <div className="offers">
                  <div className="row p-3">
                    <div className="col-sm-3 mx-3">
                      <p className="front text-light">OFFERS</p>
                    </div>
                    <div className="vl"></div>
                    <div className="col-sm-8">
                      <p className="en text-light">
                        Extra 30% off site wide Use Code: Om30 Terms and
                        Condtions Applied.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5 m-lg-0 ml-md-5 mr-md-5 ml-sm-5 mr-sm-5 ">
                {/* weight/flavour section  */}
                <div className="col-md-5 col-lg-6 title text-light">
                  <ProductOptions
                    options={product.options}
                    selectedVariant={selectedVariant}
                  />
                </div>

                {/* mrp section  */}
                <div className="col ">
                  <p className='title text-light'>
                    MRP:<del>₹5,999</del>
                  </p>
                  <h2 className="d-flex title text-light">
                    Price:
                    <Money
                      withoutTrailingZeros
                      data={selectedVariant.price}
                    />
                    <button className="btn btn-primary title text-light ml-2">25% off</button>
                  </h2>
                  <p className='title text-light'>
                    (EMI starts from ₹211.45) | Earn BMB Cash ₹90{' '}
                    <span className=""> Free Shipping</span>
                  </p>
                  {/* show now btn  */}
                  <div className="shopbtn mt-4 d-flex row ">
                    <div className="col-md-12 col-lg-5 text-light">
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
                    {/* <BuyNowButton variantId={[selectedVariant?.id]} /> */}
                  </div>
                </div>
              </div>
              <hr />
              <h4 className="mt-4 m-lg-0 ml-md-5 mr-md-5 ml-sm-5 mr-sm-5 title text-light">Check Delivery</h4>
              <div className="input-group mb-3 m-lg-0 ml-md-5 mr-md-5 ml-sm-5 mr-sm-5 title">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Pincode"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary text-light" type="button">
                    Check
                  </button>
                </div>
              </div>
            </div>


            <div className="col-lg-8  d-lg-none" id="product-tabs">
              <ul className="nav nav-tabs mt-4 d-flex justify-content-center w-100" style={{ background: 'black' }} id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active text-light "
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
            <div id="third" className="col-lg-4 flex-lg-column mt-5">
              <h4 className="d-flex justify-content-center font-weight-bolder ">
                <em className='text-light'>FEATURED PRODUCTS</em>
              </h4>
              <div className="custom-fl-product d-md-flex flex-lg-column">
                <div className="d-flex mt-4">
                  <div className="w-100"  >
                    <img
                      src={Protien}
                      style={{ objectFit: 'contain' }}
                      alt="side bar product"
                    />
                  </div>
                  <div>
                    <h6 className="font-weight-bold mt-4 text-light">
                      Syntha-6 Protein Matrix
                    </h6>
                    <h6 className="mt-3 font-weight-bold text-light">₹6906.90</h6>
                    <a href="/carts" className="btn btn-primary text-light">
                      Add to Cart
                    </a>
                  </div>
                </div>
                <div className="d-flex mt-4">
                  <div className="w-100" >
                    <img
                      src={Protien}
                      style={{ objectFit: 'contain' }}
                      alt="side bar product"
                    />
                  </div>
                  <div>
                    <h6 className="font-weight-bold mt-4 text-light">
                      Syntha-6 Protein Matrix
                    </h6>
                    <h6 className="mt-3 font-weight-bold text-light">₹6906.90</h6>
                    <a href="/carts" className="btn btn-primary text-light">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>





          <div className="container-fluid ">
            <hr />
            <div className="row">
              <div className="col-lg-8 d-lg-block d-md-none d-sm-none pro-none" id="product-tabs">
                <ul className="nav nav-tabs mt-4 d-flex justify-content-center w-100" style={{ background: 'black' }} id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active text-light "
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
                <h4 className="d-flex justify-content-center font-weight-bolder text-light">
                  <em>RELATED PRODUCTS</em>
                </h4>
                <div className="custom-fl-product d-md-flex flex-lg-column">
                  <div className="d-flex mt-4">

                    <div className="w-100" >
                      <img
                        src={Protien}
                        style={{ objectFit: 'contain' }}
                        alt="side bar product"
                      />
                    </div>
                    <div>
                      <h6 className="font-weight-bold mt-4 text-light">
                        Syntha-6 Protein Matrix
                      </h6>
                      <h6 className="mt-3 font-weight-bold text-light">₹6906.90</h6>
                      <a href="/carts" className="btn btn-primary text-light">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <div className="w-100" >
                      <img
                        src={Protien}
                        style={{ objectFit: 'contain' }}
                        alt="side bar product"
                      />
                    </div>
                    <div>
                      <h6 className="font-weight-bold mt-4 text-light">
                        Syntha-6 Protein Matrix
                      </h6>
                      <h6 className="mt-3 font-weight-bold text-light">₹6906.90</h6>
                      <a href="/carts" className="btn btn-primary text-light" >
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
