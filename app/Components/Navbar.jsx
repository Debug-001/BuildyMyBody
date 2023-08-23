import React, {useEffect, useState} from 'react';
import {BsSearch} from 'react-icons/bs';
import {FiShoppingCart} from 'react-icons/fi';
import {RiAccountCircleLine} from 'react-icons/ri';

import {Form, NavLink, useLoaderData, useRouteError} from '@remix-run/react';

const Navbar = () => {
  const [user, setUser] = useState('rtg'); // to be removed

  const [menuItems, setMenuItems] = useState([
    {
      text: 'Home',
      link: '/',
      active: true,
    },
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
  ]);

  const [isSearchBarVisible, setSearchBarVisible] = useState(false);

  const showSearchBar = () => {
    setSearchBarVisible(true);
  };

  const hideSearchBar = () => {
    setSearchBarVisible(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light mb-2">
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
        <NavLink className="navbar-brand" to="/">
          <img className="logo_img" src="/img/nav-logo.png" alt="" />
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className={`nav-item ${menuItem.active ? 'active' : ''}`}
              >
                <NavLink className="nav-link" to={menuItem.link}>
                  {menuItem.text}
                  {menuItem.active && (
                    <span className="sr-only">(current)</span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

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
      </nav>
      {/* <div className="promo_text">
			<div className="container_wrap">
				<p>Elevate your Fitness Journey with BuildMyBody</p>
			</div>
		</div> */}
    </>
  );
};

export default Navbar;
