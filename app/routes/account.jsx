import { Form, NavLink, Outlet, useLoaderData } from '@remix-run/react';
import { json, redirect } from '@shopify/remix-oxygen';
import Footer from '~/Components/Footer';
import Navbar from '~/Components/Navbar';

export function shouldRevalidate() {
  return true;
}

export async function loader({ request, context }) {
  const { session, storefront } = context;
  const { pathname } = new URL(request.url);
  const customerAccessToken = await session.get('customerAccessToken');
  const isLoggedIn = Boolean(customerAccessToken?.accessToken);
  const isAccountHome = pathname === '/account' || pathname === '/account/';
  const isPrivateRoute =
    /^\/account\/(orders|orders\/.*|profile|addresses|addresses\/.*)$/.test(
      pathname,
    );

  if (!isLoggedIn) {
    if (isPrivateRoute || isAccountHome) {
      session.unset('customerAccessToken');
      return redirect('/account/login', {
        headers: {
          'Set-Cookie': await session.commit(),
        },
      });
    } else {
      // public subroute such as /account/login...
      return json({
        isLoggedIn: false,
        isAccountHome,
        isPrivateRoute,
        customer: null,
      });
    }
  } else {
    // loggedIn, default redirect to the orders page
    if (isAccountHome) {
      return redirect('/account/orders');
    }
  }

  try {
    const { customer } = await storefront.query(CUSTOMER_QUERY, {
      variables: {
        customerAccessToken: customerAccessToken.accessToken,
        country: storefront.i18n.country,
        language: storefront.i18n.language,
      },
      cache: storefront.CacheNone(),
    });

    if (!customer) {
      throw new Error('Customer not found');
    }

    return json(
      { isLoggedIn, isPrivateRoute, isAccountHome, customer },
      {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      },
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('There was a problem loading account', error);
    session.unset('customerAccessToken');
    return redirect('/account/login', {
      headers: {
        'Set-Cookie': await session.commit(),
      },
    });
  }
}

export default function Acccount() {
  const { customer, isPrivateRoute, isAccountHome } = useLoaderData();

  if (!isPrivateRoute && !isAccountHome) {
    return <Outlet context={{ customer }} />;
  }

  return (
    <AccountLayout customer={customer}>
      <br />
      <br />
      <Outlet context={{ customer }} />
    </AccountLayout>
  );
}

function AccountLayout({ customer, children }) {
  const heading = customer
    ? customer.firstName
      ? `Welcome, ${customer.firstName}`
      : `Welcome to your account.`
    : 'Account Details';

  return (
    <>
      <Navbar />
      <div className="account" style={{ background: '#FAF4EF' }}>
        <div className='details'>
          <h1 className='welcome-txt text-center'><em>{heading}</em></h1>
        </div>
        <hr className='hr-tag' style={{ height: 2, borderWidth: 0, backgroundColor: "gray" }} />
        <br />
        <AcccountMenu />
        {children}
      </div>
      <Footer />
    </>
  );
}

function AcccountMenu() {
  function isActiveStyle({ isActive, isPending }) {
    return {
      fontWeight: isActive ? 'bold' : '',
      color: isPending ? 'grey' : 'black',
    };
  }
  return (
    <>
      {/* <div className='account_menu'>
        <div className="card-acc d-flex justify-content-center ">
          <nav role="navigation" style={{ display: "flex", gap: '6rem', fontSize: '1.4rem' }}>
            <NavLink to="/account/orders" style={isActiveStyle}>
              My Orders &nbsp;
            </NavLink>
            <NavLink to="/account/profile" style={isActiveStyle}>
              &nbsp;Profile &nbsp;
            </NavLink>
            <NavLink to="/account/addresses" style={isActiveStyle}>
              &nbsp;Saved Addresses &nbsp;
            </NavLink>
            <Logout />
          </nav>
        </div>
      </div> */}


      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <nav role="navigation" style={{ display: "flex", gap: '6rem', fontSize: '1.4rem' }}>
              <a class="nav-item nav-link active" href="#">
                <NavLink to="/account/orders" style={isActiveStyle}>
                  My Orders &nbsp;
                </NavLink>
              </a>
              <NavLink to="/account/profile" style={isActiveStyle}>
                &nbsp;Profile &nbsp;
              </NavLink>
              <NavLink to="/account/addresses" style={isActiveStyle}>
                &nbsp;Saved Addresses &nbsp;
              </NavLink>
              <Logout />
            </nav>
          </div>
        </div>
      </nav> */}

      <nav class="navbar navbar-expand-lg navbar-light " >
        <a class="navbar-brand d-lg-none d-md-flex" href="#" style={{ fontSize: '1.4rem' }}>My Profile</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item mr-lg-5" style={{ fontSize: '1.4rem' }}>
              <NavLink to="/account/orders" style={isActiveStyle}>
                My Orders
              </NavLink>
            </li>
            <li class="nav-item mr-lg-5" style={{ fontSize: '1.4rem' }}>
              <NavLink to="/account/profile" style={isActiveStyle}>
                Profile
              </NavLink>
            </li>
            <li class="nav-item mr-lg-5" style={{ fontSize: '1.4rem' }}>
              <NavLink to="/account/addresses" style={isActiveStyle}>
                Saved Addresses
              </NavLink>
            </li>
            <li class="nav-item" style={{ fontSize: '1.4rem' }}>
              <Logout />
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
}

function Logout() {
  return (
    <>
      <Form className="account-logout" method="POST" action="/account/logout">
        &nbsp;<button type="submit" className='btn-logout'>Sign out</button>
      </Form>
    </>

  );
}

export const CUSTOMER_FRAGMENT = `#graphql
  fragment Customer on Customer {
    acceptsMarketing
    addresses(first: 6) {
      nodes {
        ...Address
      }
    }
    defaultAddress {
      ...Address
    }
    email
    firstName
    lastName
    numberOfOrders
    phone
  }
  fragment Address on MailingAddress {
    id
    formatted
    firstName
    lastName
    company
    address1
    address2
    country
    province
    city
    zip
    phone
  }
`;

// NOTE: https://shopify.dev/docs/api/storefront/latest/queries/customer
const CUSTOMER_QUERY = `#graphql
  query Customer(
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ...Customer
    }
  }
  ${CUSTOMER_FRAGMENT}
`;
