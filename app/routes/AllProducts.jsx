import {useState} from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import {FcFilledFilter} from 'react-icons/fc';

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  return (
    <>
      <Navbar />
      <section>
        <div className="container d-flex mt-5">
          <div className="row">
            <div className="col-4">
              <div class="card-filter">
                <div class="card-content-all">
                  <h3 className="font-weight-bolder">
                    <FcFilledFilter size={30} /> &nbsp;Filter per your needs
                  </h3>
                  <hr />
                  <p class="card-text">Rest filters, price,range etc.</p>
                </div>
              </div>
            </div>

            <div className="col-8" id="all-products">
              <h1
                style={{color: '#ff2828'}}
                className="d-flex justify-content-center align-items-center"
              >
                <em>SHOP ALL PRODUCTS</em>
              </h1>
              <div class="row row-cols-3 g-3 mt-5">
                {products.map((product) => (
                  <div class="col">
                    <div class="card">
                      <div className="card-img-all">
                        <img src="/img/tp1.jpg" class="all-img" alt="none" />
                      </div>
                      <div class="card-content-all mt-4">
                        <h3 className="font-weight-bolder">
                          ProStar 100% Whey Protein
                        </h3>
                        <p class="card-text mt-3">
                          <del style={{color: '#ff2828'}}>₹ 6700</del>
                          <h4 className="font-weight-bolder mt-2">
                            <em>₹ 5000.00</em>
                          </h4>
                        </p>
                        <div className="all-btn mt-4">
                          <a href="/cart">Add to Cart</a>
                          <a href="/buy" className="buy-button">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
