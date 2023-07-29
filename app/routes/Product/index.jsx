import {useState} from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import ProductCarousal from './ProductCarousal';

const Product = () => {
  const [slides, setSlides] = useState([
    {
      src: 'https://s14.postimg.cc/bnwpgsqnl/pixel1.png',
      alt: 'First slide',
    },
    {
      src: 'https://s14.postimg.cc/k665l54w1/pixel2.png',
      alt: 'Second slide',
    },
    {
      src: 'https://s14.postimg.cc/4xg87dycx/pixel5.png',
      alt: 'Third slide',
    },
    {
      src: 'https://s14.postimg.cc/4kou178dd/pixel3.png',
      alt: 'Fourth slide',
    },
    {
      src: 'https://s14.postimg.cc/almiy9n9t/pixel4.png',
      alt: 'Fifth slide',
    },
  ]);
  return (
    <>
      <Navbar />
      <div className="product">
        <section id="productdes">
          <div className="container-fullwidth">
            <div className="row">
              {/* image column  */}
              <div className="col-sm-4 mx-4">
                <ProductCarousal />
              </div>
              {/* middle column  */}
              <div className="col-sm-4">
                <h2 className="d-flex justify-content-start">
                  Ultimate Nutrition Prostar 100% Whey Protein
                </h2>
                <div className="off">
                  <a href="">
                    <p className="knowmore"> Know More</p>
                  </a>
                  <div className="offers">
                    <div className="row p-3">
                      <div className="col-sm-3 mx-3">
                        <p className="front">OFFERS</p>
                      </div>
                      <div className="vl"></div>
                      <div class="col-sm-8">
                        <p className="en">
                          Extra 30% off site wide Use Code: Om30 Terms and
                          Condtions Applied.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  {/* weight/flavour section  */}
                  <div className="col-md-5">
                    <h4 className="mb-4">Weight: 4.4lb</h4>

                    <btn className="btn btn-warning">2.2lb</btn>
                    <btn className="btn btn-primary mx-4">4.4lb</btn>
                    <h4 className="mt-4 mb-4">Flavour: Cafe Mocha</h4>
                    <div class="dropdown flavour">
                      <button
                        class="btn btn-primary dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Select Flavour
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">
                          Rich Chocolate
                        </a>
                        <a class="dropdown-item" href="#">
                          Chocho Malt
                        </a>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* mrp section  */}
                  <div className="col">
                    <p>
                      MRP:<del>₹5,999</del>
                    </p>
                    <h2 className="">
                      Price: ₹5,084{' '}
                      <button className="btn btn-primary">25% off</button>
                    </h2>
                    <p>
                      (EMI starts from ₹211.45) | Earn BMB Cash ₹90{' '}
                      <span className=""> Free Shipping</span>
                    </p>
                    {/* show now btn  */}
                    <div className="shopbtn mt-4">
                      <btn className="btn">Add to Cart</btn>
                      <btn className="btn mx-3">Buy Now</btn>
                    </div>
                  </div>
                </div>
                <hr />
                <h4 className="mt-4 py-2">Check Delivery</h4>
                <div class="input-group mb-3">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Enter Pincode"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">
                      Check
                    </button>
                  </div>
                </div>
              </div>
              {/* featured products section  */}
              <div id="third" className="col-sm-3">
                <h4 className="d-flex justify-content-center font-weight-bolder">
                  <em>FEATURED PRODUCTS</em>
                </h4>
                <div className="d-flex mt-4">
                  <div className="" style={{width: '250px'}}>
                    <img
                      src="/img/sbi1.jpg"
                      style={{objectFit: 'contain'}}
                      alt="side bar product"
                    />
                  </div>
                  <div>
                    <h6 className="font-weight-bold mt-4">
                      Syntha-6 Protein Matrix
                    </h6>
                    <h6 className="mt-3 font-weight-bold">₹6906.90</h6>
                    <a href="/carts" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
                <div className="d-flex mt-4">
                  <div className="" style={{width: '250px'}}>
                    <img
                      src="/img/sbi1.jpg"
                      style={{objectFit: 'contain'}}
                      alt="side bar product"
                    />
                  </div>
                  <div>
                    <h6 className="font-weight-bold mt-4">
                      Syntha-6 Protein Matrix
                    </h6>
                    <h6 className="mt-3 font-weight-bold">₹6906.90</h6>
                    <a href="/carts" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid mb-5">
              <hr />
              <div className="row">
                <div className="col-sm-7" id="product-tabs">
                  <ul class="nav nav-tabs mt-4" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
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
                    <div className="vl mt-2 py-3 mx-2"></div>
                    <li class="nav-item">
                      <a
                        class="nav-link"
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
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="reviews-tab"
                        data-toggle="tab"
                        href="#contact"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content mt-3" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="descr-tab"
                    >
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure
                      terry richardson ex squid. Aliquip placeat salvia cillum
                      iphone. Seitan aliquip quis cardigan american apparel,
                      butcher voluptate nisi qui.
                    </div>
                    <div
                      class="tab-pane fade"
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
                      class="tab-pane fade"
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
                    </div>
                  </div>
                </div>
                <div id="third" className="col-sm-3 mx-5 ">
                  <h4 className="d-flex justify-content-center font-weight-bolder">
                    <em>FEATURED PRODUCTS</em>
                  </h4>
                  <div className="d-flex mt-4">
                    <div className="" style={{width: '250px'}}>
                      <img
                        src="/img/sbi1.jpg"
                        style={{objectFit: 'contain'}}
                        alt="side bar product"
                      />
                    </div>
                    <div>
                      <h6 className="font-weight-bold mt-4">
                        Syntha-6 Protein Matrix
                      </h6>
                      <h6 className="mt-3 font-weight-bold">₹6906.90</h6>
                      <a href="/carts" className="btn btn-primary">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <div className="" style={{width: '250px'}}>
                      <img
                        src="/img/sbi1.jpg"
                        style={{objectFit: 'contain'}}
                        alt="side bar product"
                      />
                    </div>
                    <div>
                      <h6 className="font-weight-bold mt-4">
                        Syntha-6 Protein Matrix
                      </h6>
                      <h6 className="mt-3 font-weight-bold">₹6906.90</h6>
                      <a href="/carts" className="btn btn-primary">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Product;
