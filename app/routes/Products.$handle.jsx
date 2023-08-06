import {useState} from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import {useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
import {FcFilledFilter} from 'react-icons/fc';
import ProductCard from './ProductCard';
import {Pagination} from '@shopify/hydrogen';
import {getPaginationVariables} from '@shopify/hydrogen';

export async function loader({params, context, request}) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 4,
  });
  const {handle} = params;
  const {collection} = await context.storefront.query(COLLECTION_QUERY, {
    variables: {
      ...paginationVariables,
      handle,
    },
  });

  // Handle 404s
  if (!collection) {
    throw new Response(null, {status: 404});
  }

  // json is a Remix utility for creating application/json responses
  // https://remix.run/docs/en/v1/utils/json
  return json({
    collection,
  });
}

export default function Products() {
  const {collection} = useLoaderData();

  return (
    <>
      <Navbar />
      <section>
        <div className="container d-flex mt-5">
          <div className="row">
            <div className="col-4">
              <div className="card-filter">
                <div className="card-content-all">
                  <h3 className="font-weight-bolder">
                    <FcFilledFilter size={30} /> &nbsp;Filter per your needs
                  </h3>
                  <hr />
                  <p className="card-text">Rest filters, price,range etc.</p>
                </div>
              </div>
            </div>

            <div className="col-8" id="all-products">
              <h1
                style={{color: '#ff2828'}}
                className="d-flex justify-content-center align-items-center"
              >
                <em>{collection.title}</em>
              </h1>
              <div className="row row-cols-3 g-3 mt-5">
                <Pagination connection={collection.products}>
                  {({nodes, NextLink, PreviousLink, isLoading}) => (
                    <>
                      <div className="flex items-center justify-center mt-6">
                        <PreviousLink className="inline-block rounded font-medium text-center py-3 px-6 border w-full cursor-pointer">
                          {isLoading ? 'Loading...' : 'Load previous products'}
                        </PreviousLink>
                      </div>
                      <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {nodes.map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                      </div>
                      <div className="flex items-center justify-center mt-6">
                        <NextLink className="inline-block rounded font-medium text-center py-3 px-6 border w-full cursor-pointer">
                          {isLoading ? 'Loading...' : 'Load more products'}
                        </NextLink>
                      </div>
                    </>
                  )}
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
const COLLECTION_QUERY = `#graphql
  query CollectionDetails(
    $handle: String!
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) {
    collection(handle: $handle) {
      id
      title
      description
      handle
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor,
      ) {
        nodes {
          id
          title
          publishedAt
          handle
          variants(first: 1) {
            nodes {
              id
              image {
                url
                altText
                width
                height
              }
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
          }
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          hasNextPage
          endCursor
        }
      }
    }
  }
  `;
const seo = ({data}) => ({
  title: data?.collection?.title,
  description: data?.collection?.description.substr(0, 154),
});
export const handle = {
  seo,
};

export function meta({data}) {
  return [
    {title: data?.collection?.title ?? 'Collection'},
    {description: data?.collection?.description},
  ];
}
