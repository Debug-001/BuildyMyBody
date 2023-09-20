import React, { useEffect, useState } from 'react';
import { Form, NavLink } from '@remix-run/react';
import Protien2 from '../../dist/client/img/protien2.png';
import on from '../../dist/client/img/on.png';
import mt from '../../dist/client/img/mt.jpg';
import uni from '../../dist/client/img/uni.jpg';
import cl from '../../dist/client/img/cl.jpg';
import whey from '../../dist/client/img/whey.png';
import gainer from '../../dist/client/img/gainer.png';
import workout from '../../dist/client/img/workout.png';
import pre from '../../dist/client/img/pre.png';

import { BsSearch } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { RiAccountCircleLine } from 'react-icons/ri';
import { BiCategoryAlt } from 'react-icons/bi'
import { GiBodyBalance } from 'react-icons/gi'
const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

  const handleFeaturesClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleSubMenuLeave = () => {
    if (!isNavbarCollapsed) {
      setSelectedCategory(null);
    }
  };

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
    setSelectedCategory(null);
  };



  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light " style={{ background: 'black' }}>
        <NavLink className="navbar-brand ml-lg-4" to="/">
          <img className="logo_img w-75" src="/img/logo.png" alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavbarToggle}
        >
          <span className="navbar-toggler-icon ">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </span>
        </button>
        <div className={`collapse navbar-collapse mx-3 mx-lg-0    ${isNavbarCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ml-auto mr-auto" style={{ gap: '.8rem' }}>
            <div class="dropdown show mt-2" style={{ marginBottom: '0', marginRight: "0" }}>
              <a class=" dropdown-toggle" style={{ background: 'none', color: 'white', padding: '0px', fontWeight: '400', fontSize: '1.1rem' }} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                All Products
              </a>

              <div class="dropdown-menu drop-custom" aria-labelledby="dropdownMenuLink">
                <div className="row">
                  <div className="col-lg-12 col-md-6 d-flex justify-content-around">

                    <div className='  '>
                      <div className='d-flex flex-column align-items-center '>
                        <img src={whey} alt="" style={{ width: '5rem', border: '1px solid transparent', borderRadius: '62px' }} />
                        <span style={{ fontWeight: 'bold', fontSize: '1rem' }} className='mt-2 text-center'>Whey Protein</span>
                      </div>
                    </div>
                    <div className='  '>
                      <div className='d-flex flex-column align-items-center ml-lg-5 '>
                        <img src={gainer} alt="" style={{ width: '5rem', border: '1px solid transparent', borderRadius: '62px' }} />
                        <span style={{ fontWeight: 'bold', fontSize: '1rem' }} className='mt-2 text-center'>Mass Gainer</span>
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-12 col-md-6 d-flex mt-lg-2 justify-content-around" >
                    <div className='  '>
                      <div className='d-flex flex-column align-items-center  '>
                        <img src={pre} alt="" style={{ width: '5rem', border: '1px solid transparent', borderRadius: '62px' }} />
                        <span className='text-center mt-2' style={{ fontWeight: 'bold', fontSize: '1rem' }} >Pre/Post Workout</span>
                      </div>
                    </div>
                    <div className='  '>
                      <div className='d-flex flex-column align-items-center ml-lg-5' >
                        <img src={workout} alt="" style={{ width: '5rem', border: '1px solid transparent', borderRadius: '62px' }} />
                        <span className='text-center mt-2' style={{ fontWeight: 'bold', fontSize: '1rem' }}>Workout Essentials</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-4 mb-2 text-center">
                    <div className="btn w-50 shop-nav-btn " >
                      <NavLink to={'/products/all'} id='shop-nav-btn2'  >Shop All</NavLink> </div>
                  </div>
                </div>
              </div>
            </div>
            <li className="nav-item">
              <NavLink className={'nav-link active text-light'} style={{ fontSize: '1.1rem' }} to='/blog'>Blogs</NavLink>
            </li>
            <div class="dropdown show mt-2" style={{ marginBottom: '0', marginRight: "0" }}>
              <a class=" dropdown-toggle" style={{ background: 'none', color: 'white', padding: '0px', fontWeight: '400', fontSize: '1.1rem' }} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Store
              </a>
              <div class="dropdown-menu drop-custom" aria-labelledby="dropdownMenuLink">
                <div className="row">
                  <div className="col-lg-12 col-md-6 d-flex justify-content-around">

                    <div className='  '>
                      <div className='d-flex flex-column align-items-center '>
                        <img src={on} alt="" style={{ width: '5rem', border: '1px solid transparent', borderRadius: '62px' }} />
                        <span style={{ fontWeight: 'bold', fontSize: '1rem' }} className='mt-2 text-center'> ON Nutrition</span>
                      </div>
                    </div>
                    <div className='  '>
                      <div className='d-flex flex-column align-items-center ml-lg-5 '>
                        <img src={mt} alt="" style={{ width: '5rem', border: '1px solid transparent', borderRadius: '62px' }} />
                        <span style={{ fontWeight: 'bold', fontSize: '1rem' }} className='mt-2 text-center'>MuscleTech</span>
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-12 col-md-6 d-flex mt-lg-2 justify-content-around" >
                    <div className='  '>
                      <div className='d-flex flex-column align-items-center  '>
                        <img src={uni} alt="" style={{ width: '5rem', border: '1px solid transparent', borderRadius: '62px' }} />
                        <span className='text-center mt-2' style={{ fontWeight: 'bold', fontSize: '1rem' }} >Universal</span>
                      </div>
                    </div>
                    <div className='  '>
                      <div className='d-flex flex-column align-items-center ml-lg-5' >
                        <img src={cl} alt="" style={{ width: '5rem', border: '1px solid transparent', borderRadius: '62px' }} />
                        <span className='text-center mt-2' style={{ fontWeight: 'bold', fontSize: '1rem' }}>Cellucor</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-4 mb-2 text-center">
                    <div className="btn w-50 shop-nav-btn" >
                      <NavLink to={'/products/all'} id='shop-nav-btn2'  > Shop All</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <li className="nav-item">
              <NavLink className={'nav-link active text-light'} to='/contact' style={{ fontSize: '1.1rem' }}>Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={'nav-link active text-light'} to='/bmi' style={{ fontSize: '1.1rem' }}>BMI Check</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={'nav-link active text-light'} to='/certificates' style={{ fontSize: '1.1rem' }}>Authenticity</NavLink>
            </li>
          </ul>
          <ul className='navbar-nav nav-icon  ml-auto'>
            <div className="d-flex ">
              <div className="icon-search ">
                <li >
                  <NavLink to="/search" >
                    <BsSearch size={25} />
                  </NavLink>
                </li>
              </div>
              <div className="icon-cart ml-lg-3 ml-md-4 ml-sm-5 ml-5">
                <li>
                  <NavLink to="/cart">
                    <FiShoppingCart size={25} />
                  </NavLink>
                </li>
              </div>
              <div className="icon-cart ml-lg-3 ml-md-4 ml-sm-5 ml-5" >
                <li>
                  <NavLink to="/account" className={'border border-light p-2'} id='acc-icon'>
                    Account
                  </NavLink>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </nav>
      
      <div className='container-fluid'>
        <h6 className='text-center font-weight-bolder' style={{paddingTop:"10px", fontSize:"17px"}}> <GiBodyBalance size={30} style={{color:"#ff2828"}} /> Elevate your Fitness Journey with 
        <span style={{color:"#ff2828"}}>&nbsp; BuildMyBody</span>
        </h6>
      </div>
    </>
  )
}

export default Navbar;
