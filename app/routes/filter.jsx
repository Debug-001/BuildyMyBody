import React, {useEffect, useState} from 'react';
import {Form, NavLink} from '@remix-run/react';
import Protien2 from '../../dist/client/img/protien2.png';
import on from '../../dist/client/img/on.png';
import mt from '../../dist/client/img/mt.jpg';
import uni from '../../dist/client/img/uni.jpg';
import cl from '../../dist/client/img/cl.jpg';
import whey from '../../dist/client/img/whey.png';
import gainer from '../../dist/client/img/gainer.png';
import workout from '../../dist/client/img/workout.png';
import pre from '../../dist/client/img/pre.png';

import {BsSearch} from 'react-icons/bs';
import {FiShoppingCart} from 'react-icons/fi';
const Filter = () => {
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

  // const handleFeaturesClick = (category) => {
  //     setSelectedCategory(category === selectedCategory ? null : category);
  // };

  // const handleSubMenuLeave = () => {
  //     if (!isNavbarCollapsed) {
  //         setSelectedCategory(null);
  //     }
  // };

  // const handleNavbarToggle = () => {
  //     setIsNavbarCollapsed(!isNavbarCollapsed);
  //     setSelectedCategory(null);
  // };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          My Website
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </a>
              <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                <a className="dropdown-item" href="#">
                  Service 1
                </a>
                <a className="dropdown-item" href="#">
                  Service 2
                </a>
                <div className="dropdown-divider"></div>
                <a
                  className="dropdown-item dropdown-toggle"
                  href="#"
                  id="moreServicesDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Protien
                </a>
                <div
                  className="dropdown-menu fil-menu"
                  aria-labelledby="moreServicesDropdown"
                >
                  <a className="dropdown-item" href="#">
                    Whey Protien
                  </a>
                  <a className="dropdown-item" href="#">
                    Whey Blend
                  </a>
                  <a className="dropdown-item" href="#">
                    Whey Protien Isolate{' '}
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Filter;
