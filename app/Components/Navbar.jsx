import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { RiAccountCircleLine } from 'react-icons/ri';
import Protein from '../../dist/client/img/protien.png'
import { Form, NavLink, useLoaderData, useRouteError } from '@remix-run/react';

const Navbar = () => {
  const [user, setUser] = useState('rtg'); // to be removed

  const [menuItems, setMenuItems] = useState([
    // {
    //   text: 'Home',
    //   link: '/',
    //   active: true,
    // },
    {
      text: 'Products',
      link: '/products/all',
      active: true,
    },
    {
      text: 'Blog',
      link: '/blog',
      active: true,
    },
    {
      text: 'Contact Us',
      link: '/contact',
      active: true,
    },
    {
      text: 'About Us',
      link: '/about',
      active: true,
    },
    {
      text: 'Certification',
      link: '/certificate',
      active: true,
    },
    {
      text: 'Authenticity',
      link: '/authenticity',
      active: true,
    },
  ]);

  const [isSearchBarVisible, setSearchBarVisible] = useState(false);

  const showSearchBar = () => {
    setSearchBarVisible(true);
  };

  const hideSearchBar = () => {
    setSearchBarVisible(false);
  };
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  const showSubMenu = () => {
    setSubMenuVisible(true);
  };

  const hideSubMenu = () => {
    setSubMenuVisible(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  justify-content-between row ml-2 mr-2">

        <div className="col-lg-4 col-md-3 col-sm-1 d-lg-none">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>


        </div>

        <div className="col-lg-4 col-sm-2">
          <NavLink className="navbar-brand" to="/">
            <img className="logo_img" src="/img/nav-logo.png" alt="" />
          </NavLink>
        </div>

        <div className="col-4 d-md-none d-sm-none d-lg-flex">
          <div className="">
            <div className="nav-group ">
              <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                </g>
              </svg>
              <input placeholder="Search" type="search" className="nav-search w-100" />
              {/* <input type="text" /> */}

            </div>

          </div>
        </div>

        <div className="col-4">
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarTogglerDemo03">
            <div className="icon-search">
              <li>
                <NavLink
                  to="#"
                  onMouseEnter={showSearchBar}
                  onMouseLeave={hideSearchBar}
                >
                  <BsSearch size={18} />
                </NavLink>
                {isSearchBarVisible && (
                  <div className="search-bar">
                    <input type="text" placeholder="Search Products..." />
                  </div>
                )}
              </li>
            </div>

            <div className="icon-cart">
              <li>
                <NavLink to="/cart">
                  <FiShoppingCart size={18} />
                </NavLink>
              </li>
            </div>

            {!user ? (
              <NavLink
                to="/account/login"
                id="nav-btn"
                className="btn btn-dark my-2 my-sm-0"
              >
                Login
              </NavLink>
            ) : (
              <div className="dropdown show">
                <NavLink
                  to="#"
                  className="icon-cart"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <RiAccountCircleLine size={18} />
                </NavLink>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <NavLink className="dropdown-item" to="#">
                    Profile
                  </NavLink>
                  <NavLink className="dropdown-item" to="#">
                    Orders
                  </NavLink>
                  <NavLink className="dropdown-item" to="#">
                    Addresses
                  </NavLink>
                  <Form
                    className="account-logout"
                    method="POST"
                    action="/account/logout"
                  >
                    <button type="submit" className="dropdown-item">
                      Sign out
                    </button>
                  </Form>
                </div>
              </div>
            )}
          </div>
        </div>





      </nav>







































      <nav className="navbar navbar-expand-lg navbar-light ">
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button> */}
        {/* <NavLink className="navbar-brand" to="/">
          <img className="logo_img" src="/img/nav-logo.png" alt="" />
        </NavLink> */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mt-lg-0">
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className={`nav-item mx-lg-3 mx-md-0 mx-sm-0 ${menuItem.active ? 'active' : ''}`}
                onMouseEnter={showSubMenu} // Show submenu on hover
                onMouseLeave={hideSubMenu} // Hide submenu when mouse leaves
              >
                <NavLink className="nav-link" to={menuItem.link}>
                  {menuItem.text}
                  {menuItem.active && (
                    <span className="sr-only">(current)</span>
                  )}
                </NavLink>

                {menuItem.text === 'Products' && isSubMenuVisible && (
                  <div className="submenu">
                    <div className="submenu-content">
                      <div className="row p-4">
                        <div className="col mt-2">
                          <NavLink to={'/'}>
                            <h4 className='text-center text-dark'>Protein</h4>
                          </NavLink>
                          <NavLink to={'/'}>
                            <p className='text-center text-dark'><img src={Protein} className='w-50' alt="" /></p>
                          </NavLink>
                          <NavLink to={'/'}>
                            <p className='mt-2 text-center text-dark'>Whey Protein</p>
                          </NavLink>
                          <NavLink to={'/'}>
                            <p className='mt-1 text-center text-dark'>Whey Blend</p>
                          </NavLink>
                          <NavLink to={'/'}>
                            <p className='mt-1 text-center text-dark'>Whey Protein Isolate</p>
                          </NavLink>



                        </div>
                        <div className="col mt-2">
                          <NavLink to={'/'}>
                            <h4 className='text-center text-dark'>Gainer</h4>
                          </NavLink>
                          <NavLink to={'/'}>
                            <p className='text-center text-dark'>   <img src={Protein} className='w-50' alt="" /></p>
                          </NavLink>
                          <NavLink to={'/'}>
                            <p className='mt-2 text-center text-dark'>Mass Gainer</p>
                          </NavLink>
                          <NavLink to={'/'}>
                            <p className='mt-1 text-center text-dark' >Weight Gainer</p>
                          </NavLink>



                        </div>
                        <div className="col mt-2">
                          <NavLink to={'/'}>
                            <a href=""> <h4 className='text-center text-dark'>Pre/Post Workout</h4></a>
                          </NavLink>
                          <NavLink to={'/'}>
                            <p className='text-center text-dark'>   <img src={Protein} className='w-50' alt="" /></p>
                          </NavLink>
                          <NavLink to={'/'}>
                            <p className='mt-2 text-center text-dark'>Pre-Workout</p>
                          </NavLink>
                          <NavLink to={'/'}>
                            <p className='mt-1 text-center text-dark'>Amino Acids && BCAAs</p>
                          </NavLink>
                          <NavLink to={'/'}>
                            <p className='mt-1 text-center text-dark'>Glutamine</p>
                          </NavLink>
                          <NavLink to={'/'}>
                            <p className='mt-1 text-center text-dark'>Carnitine</p>
                          </NavLink>


                        </div>
                        <div className="col mt-2">
                          <NavLink to={'/'}>
                            <h4 className='text-center text-dark'>Workout Essentials</h4>
                          </NavLink>
                          <NavLink to={'/'}>
                            <p className='text-center text-dark'>   <img src={Protein} className='w-50' alt="" /></p>
                          </NavLink>
                          <NavLink to={'/'}>
                            <p className='mt-2 text-center text-dark'>Testosterone Support</p>
                          </NavLink>
                          <NavLink to={'/'}>
                            <p className='mt-1 text-center text-dark'>Multivitamins</p>
                          </NavLink>
                          <NavLink to={'/'}>
                            <p className='mt-1 text-center text-dark'>Fat Burner</p>
                          </NavLink>


                        </div>
                      </div>
                    </div>

                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* <div className="icon-search">
            <li>
              <NavLink
                to="#"
                onMouseEnter={showSearchBar}
                onMouseLeave={hideSearchBar}
              >
                <BsSearch size={18} />
              </NavLink>
              {isSearchBarVisible && (
                <div className="search-bar">
                  <input type="text" placeholder="Search Products..." />
                </div>
              )}
            </li>
          </div> */}

          {/* <div className="icon-cart">
            <li>
              <NavLink to="/cart">
                <FiShoppingCart size={18} />
              </NavLink>
            </li>
          </div>

          {!user ? (
            <NavLink
              to="/account/login"
              id="nav-btn"
              className="btn btn-dark my-2 my-sm-0"
            >
              Login
            </NavLink>
          ) : (
            <div className="dropdown show">
              <NavLink
                to="#"
                className="icon-cart"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <RiAccountCircleLine size={18} />
              </NavLink>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <NavLink className="dropdown-item" to="#">
                  Profile
                </NavLink>
                <NavLink className="dropdown-item" to="#">
                  Orders
                </NavLink>
                <NavLink className="dropdown-item" to="#">
                  Addresses
                </NavLink>
                <Form
                  className="account-logout"
                  method="POST"
                  action="/account/logout"
                >
                  <button type="submit" className="dropdown-item">
                    Sign out
                  </button>
                </Form>
              </div>
            </div>
          )} */}
        </div>
      </nav>













      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            Coding Yaar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">Link</a>
              </li>
            </ul>
            <button className="btn btn-outline-dark fw-bold" type="submit">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
      <p className="mt-5 text-center">
        Get a step-by-step written explanation here:{" "}
        <a
          href="https://codingyaar.com/bootstrap-navbar-button-right/"
          target="_blank"
        >
          Bootstrap Navbar Button Right
        </a>{" "}
      </p>
      <p className="mt-5 text-center">
        Get a step-by-step video explanation here:{" "}
        <a href="https://youtu.be/O-_VQicPOS4" target="_blank">
          Bootstrap Navbar Button Right
        </a>{" "}
      </p>


      {/* <div className="promo_text">
			<div className="container_wrap">
				<p>Elevate your Fitness Journey with BuildMyBody</p>
			</div>
		</div> */}
    </>
  );
};

export default Navbar;