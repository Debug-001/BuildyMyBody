import React from 'react';
import photo from '../../img/cellu.png';
import photo1 from '../../img/mt.png';
import photo3 from '../../img/mp.png';
import photo5 from '../../img/onn.png';
import { Form, Link, NavLink } from '@remix-run/react';

const ShopByBrands = () => {
  return (
    <>
      <section id="shopbb" className="container">
        <div
          className="d-flex justify-content-center mb-5 pt-5"
          style={{ flexDirection: 'column', alignItems: 'center' }}
        >
          <h1 className="custom-heading3">
            <em>Shop By Brands</em>
          </h1>
          <hr className="h1-hr" />
        </div>
        <div className="row">
          <div className="col-6 mb-2  mb-lg-0 mb-md-0 ">
            <div className="certificate-card1 ">
              <Link to={`/products/cellucor`} className="text-center mt-4 ">
                <img src={photo} className="w-100" alt="" />
              </Link>
            </div>
          </div>
          <div className="col-6  mb-lg-0 mb-md-0">
            <div className="certificate-card1">
              <Link to={`/products/muscletech`} className="text-center mt-4">
                <img src={photo1} className="w-100   " alt="" />
              </Link>
            </div>
          </div>

          <div className="col-6">
            <div className="certificate-card1">
              <p className="text-center mt-0 mt-lg-4 mt-md-2">
                <Link to="/products/musclepharm" className="  ">
                  <img src={photo3} className="w-100   " alt="" />
                </Link>
              </p>
            </div>
          </div>

          <div className="col-6">
            <div className="certificate-card1">
              <p className="text-center mt-0 mt-lg-4 mt-md-2">
                <Link to={`/products/on-nutrition`} className="text-center mt-4">
                  <img src={photo5} className="w-100   " alt="" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopByBrands;
