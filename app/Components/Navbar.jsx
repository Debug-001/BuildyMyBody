import React, {useState} from 'react';
import {BsSearch} from 'react-icons/bs';
import {FiShoppingCart} from 'react-icons/fi';

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([
    {
      text: 'Home',
      link: '/',
      active: true,
    },
    {
      text: 'Products',
      link: '/product',
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

  const [isCartDialogVisible, setCartDialogVisible] = useState(false);
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);

  const showCartDialog = () => {
    setCartDialogVisible(true);
  };

  const hideCartDialog = () => {
    setCartDialogVisible(false);
  };

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
        <img className="logo_img" src="/img/nav-logo.png" alt="" />
        <a className="navbar-brand" href="/"></a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className={`nav-item ${menuItem.active ? 'active' : ''}`}
              >
                <a className="nav-link" href={menuItem.link}>
                  {menuItem.text}
                  {menuItem.active && (
                    <span className="sr-only">(current)</span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="icon-search">
            <li>
              <a
                href="#"
                onMouseEnter={showSearchBar}
                onMouseLeave={hideSearchBar}
              >
                <BsSearch size={18} />
              </a>
              {isSearchBarVisible && (
                <div className="search-bar">
                  <input type="text" placeholder="Search Products..." />
                </div>
              )}
            </li>
          </div>

          <div className="icon-cart">
            <li>
              <a
                href="/cart"
                onMouseEnter={showCartDialog}
                onMouseLeave={hideCartDialog}
              >
                <FiShoppingCart size={18} />
              </a>
              {isCartDialogVisible && (
                <div id="cart-dialog" className="cart-dialog">
                  <p>No products in your Cart.</p>
                </div>
              )}
            </li>
          </div>
          <a
            href="/login"
            id="nav-btn"
            className="btn btn-dark my-2 my-sm-0"
            type="submit"
          >
            Login
          </a>
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
