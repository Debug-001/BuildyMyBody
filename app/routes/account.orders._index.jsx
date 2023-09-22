import {Link, useLoaderData} from '@remix-run/react';
import {Money, Pagination, getPaginationVariables} from '@shopify/hydrogen';
import {json, redirect} from '@shopify/remix-oxygen';

export const meta = () => {
  return [{title: 'Orders'}];
};

export async function loader({request, context}) {
  const {session, storefront} = context;

  const customerAccessToken = await session.get('customerAccessToken');
  if (!customerAccessToken?.accessToken) {
    return redirect('/account/login');
  }

  try {
    const paginationVariables = getPaginationVariables(request, {
      pageBy: 20,
    });

    const {customer} = await storefront.query(CUSTOMER_ORDERS_QUERY, {
      variables: {
        customerAccessToken: customerAccessToken.accessToken,
        country: storefront.i18n.country,
        language: storefront.i18n.language,
        ...paginationVariables,
      },
      cache: storefront.CacheNone(),
    });

    if (!customer) {
      throw new Error('Customer not found');
    }

    return json({customer});
  } catch (error) {
    if (error instanceof Error) {
      return json({error: error.message}, {status: 400});
    }
    return json({error}, {status: 400});
  }
}

export default function Orders() {
  const {customer} = useLoaderData();
  const {orders, numberOfOrders} = customer;
  return (
    <>
      <div className="parent-orders" style={{textAlign: 'center'}}>
        <div className="card-orders">
          <div className="orders">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link active" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                  <a className="nav-item nav-link" href="#">
                    Features
                  </a>
                  <a className="nav-item nav-link" href="#">
                    Pricing
                  </a>
                  <a className="nav-item nav-link disabled" href="#">
                    Disabled
                  </a>
                </div>
              </div>
            </nav>

            <h2>
              Orders <small>[{numberOfOrders}]</small>
            </h2>

            <br />
            {orders.nodes.length ? (
              <OrdersTable orders={orders} />
            ) : (
              <EmptyOrders />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function OrdersTable({orders}) {
  return (
    <>
      <div className="acccount-orders">
        {orders?.nodes.length ? (
          <Pagination connection={orders}>
            {({nodes, isLoading, PreviousLink, NextLink}) => {
              return (
                <>
                  <PreviousLink>
                    {isLoading ? 'Loading...' : <span>↑ Load previous</span>}
                  </PreviousLink>
                  {nodes.map((order) => {
                    return <OrderItem key={order.id} order={order} />;
                  })}
                  <NextLink>
                    {isLoading ? 'Loading...' : <span>Load more ↓</span>}
                  </NextLink>
                </>
              );
            }}
          </Pagination>
        ) : (
          <EmptyOrders />
        )}
      </div>
    </>
  );
}

function EmptyOrders() {
  return (
    <>
      <div className="empty-orders">
        <p>You haven&apos;t placed any orders yet.</p>
        <br />
        <a className="btn-shopping">
          <Link to="/collections">Start Shopping →</Link>
        </a>
      </div>
    </>
  );
}

function OrderItem({order}) {
  return (
    <>
      <fieldset>
        <Link to={`/account/orders/${order.id}`}>
          <strong>#{order.orderNumber}</strong>
        </Link>
        <p>{new Date(order.processedAt).toDateString()}</p>
        <p>{order.financialStatus}</p>
        <p>{order.fulfillmentStatus}</p>
        <Money data={order.currentTotalPrice} />
        <Link to={`/account/orders/${btoa(order.id)}`}>View Order →</Link>
      </fieldset>
      <br />
    </>
  );
}

const ORDER_ITEM_FRAGMENT = `#graphql
  fragment OrderItem on Order {
    currentTotalPrice {
      amount
      currencyCode
    }
    financialStatus
    fulfillmentStatus
    id
    lineItems(first: 10) {
      nodes {
        title
        variant {
          image {
            url
            altText
            height
            width
          }
        }
      }
    }
    orderNumber
    customerUrl
    statusUrl
    processedAt
  }
`;

export const CUSTOMER_FRAGMENT = `#graphql
  fragment CustomerOrders on Customer {
    numberOfOrders
    orders(
      sortKey: PROCESSED_AT,
      reverse: true,
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...OrderItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        hasNextPage
        endCursor
      }
    }
  }
  ${ORDER_ITEM_FRAGMENT}
`;

// NOTE: https://shopify.dev/docs/api/storefront/latest/queries/customer
const CUSTOMER_ORDERS_QUERY = `#graphql
  ${CUSTOMER_FRAGMENT}
  query CustomerOrders(
    $country: CountryCode
    $customerAccessToken: String!
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ...CustomerOrders
    }
  }
`;
