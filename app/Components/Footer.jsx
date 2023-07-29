import {BsInstagram} from 'react-icons/bs';
import {CiFacebook} from 'react-icons/ci';
import {CiTwitter} from 'react-icons/ci';
import {AiOutlineYoutube} from 'react-icons/ai';

const Footer = () => {
  return (
    <section>
      <div className="container">
        <div className="footer-top-section d-flex align-items-center">
          <p>100% Satisfaction</p>
          <p>Save 20% Every Time</p>
          <p>Fast Free Shipment</p>
          <p>Gift and Vouchers</p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row footer-row">
          <div className="col-3 footer-main-section">
            {/* <img className="footer-img" src="/img/logo.png" alt="" /> */}
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos illo ex inventore, nulla iste ut incidunt eum pariatur
            </p>
            <div className="footer-social-icons">
              <a href="/">
                <BsInstagram className="icons" size={25} />
              </a>
              <a href="/">
                <AiOutlineYoutube size={30} />
              </a>
              <a href="/">
                <CiTwitter size={30} />
              </a>
              <a href="/">
                <CiFacebook size={30} />
              </a>
            </div>
          </div>
          <div className="col-2 footer-details">
            <h6>CUSTOMER SERVICE</h6>
            <a href="/track">
              <p>Track My Order</p>
            </a>
            <a href="/myaccount">
              <p>Account</p>
            </a>
            <a href="/myorders">
              <p>Orders</p>
            </a>
            <a href="/blog">
              <p>Blog</p>
            </a>
          </div>
          <div className="col-2 footer-details">
            <h6>PRODUCTS</h6>
            <a href="/products">
              <p>Sports Nutrition</p>
            </a>
            <a href="/products">
              <p>Essential Vitamins</p>
            </a>
            <a href="/produts">
              <p>Weight Loss</p>
            </a>
            <a href="/products">
              <p>Weight Loss</p>
            </a>
          </div>
          <div className="col-2 footer-details">
            <h6>COMPANY</h6>
            <a href="/shippingpolicy">
              <p>Shipping Policy</p>
            </a>
            <a href="/terms">
              <p>Terms & Condition</p>
            </a>
            <a href="/returnpolicy">
              <p>Return and Replacement Policy</p>
            </a>
            <a href="/privacypolicy">
              <p>Privacy Policy</p>
            </a>
            <a href="/aboutus">
              <p>About Us</p>
            </a>
          </div>
          <div className="container-fluid">
            <div className="row footer-bg">
              <div className="col footer-end">
                <p>@2023 BuildMyBody. All Rights Reserved</p>
              </div>
              <div className="col footer-end">
                <a href="/" className="">
                  Home
                </a>
                <a href="/products" className="">
                  Product
                </a>
                <a href="/blog" className="">
                  Blog
                </a>
                <a href="/contact">Contact Us</a>
              </div>
              <div className="col footer-end">
                <a href="/terms">Terms and Condition</a>
                <a href="/privacypolicy">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
