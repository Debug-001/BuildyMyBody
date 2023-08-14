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
      <div className="account">
        <div className='details'>
          <h1 className='welcome-txt'><em>{heading}</em></h1>
        </div>
          <hr className='hr-tag' style={{ height: 2, borderWidth: 0,backgroundColor: "gray" }}/>
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
    <div className='account_menu'>
    <div className="card-acc">
      <nav role="navigation">
        <NavLink to="/account/orders" style={isActiveStyle}>
         My Orders &nbsp;
        </NavLink>
        <NavLink to="/account/profile" style={isActiveStyle}>
          &nbsp;Profile &nbsp;
        </NavLink>
        <NavLink to="/account/addresses" style={isActiveStyle}>
          &nbsp;Saved Addresses &nbsp;
        </NavLink>
        <Logout/>
      </nav>
    </div>
    </div>
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
