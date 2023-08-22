import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { RiAccountCircleLine } from 'react-icons/ri';

import { Form, NavLink, useLoaderData, useRouteError } from '@remix-run/react';
import { json } from '@shopify/remix-oxygen';

export async function loader({ request, context }) {
  const accessToken = context.session.get('customer_access_token');

  if (!Boolean(accessToken)) return json({ user: null });

  const userAgent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36';
  const origin = new URL(request.url).origin; // Will be http://localhost:3000 in development or an oxygen generated host

  const query = `query customer {
      personalAccount {
        email
      }
    }`;
  const variables = {};
  const shopID = context.env.PUBLIC_STOREFRONT_ID;
  const user = await fetch(
    `https://shopify.com/${shopID}/account/customer/api/${context.env.CUSTOMER_API_VERSION}/graphql`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': userAgent,
        Origin: origin,
        Authorization: accessToken,
      },
      body: JSON.stringify({
        operationName: 'SomeQuery',
        query,
        variables: variables,
      }),
    },
  ).then(async (response) => {
    if (!response.ok) {
      throw new Error(
        `${response.status} (RequestID ${response.headers.get(
          'x-request-id',
        )}): ${await response.text()}`,
      );
    }
    return (await response.json()).data;
  });

  return {
    user,
  };
}

const Navbar = () => {
  // const {user} = useLoaderData();
  const { user } = useLoaderData() || {};
  // const [user, setUser] = useState('rtg') ;

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
