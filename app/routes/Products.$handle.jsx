import { useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { useLoaderData } from '@remix-run/react';
import { json } from '@shopify/remix-oxygen';
import { FcFilledFilter } from 'react-icons/fc';
import ProductCard from './ProductCard';
import { Pagination } from '@shopify/hydrogen';
import { getPaginationVariables } from '@shopify/hydrogen';
import ProductCarousal from '~/Components/Product/ProductCarousal';
import BrandCaraousel from '~/Components/Home/BrandCaraousel';
import TopSelling from '~/Components/Home/TopSelling';
import FeaturedProducts from '~/Components/Home/FeaturedProducts';


export async function loader({ params, context, request }) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 4,
  });
  const { handle } = params;
  const { collection } = await context.storefront.query(COLLECTION_QUERY, {
    variables: {
      ...paginationVariables,
      handle,
    },
  });

  // Handle 404s
  if (!collection) {
    throw new Response(null, { status: 404 });
  }

  // json is a Remix utility for creating application/json responses
  // https://remix.run/docs/en/v1/utils/json
  return json({
    collection,
  });
}



export default function Products() {
  const { collection } = useLoaderData();



  return (
    <>
      <Navbar />
      <section>
        <div className="container   d-flex  mt-5">
          <div className="row">
            <div className="col-3">
              <div className="card-filter">
                <div className="card-content-all">
                  <h3 className="font-weight-bolder">
                    <FcFilledFilter size={30} /> &nbsp;Filter per <br /> your needs
                  </h3>
                  {/* <hr /> */}
                  {/* <p className="card-text">Rest filters, price,range etc.</p> */}
                  <div className='border border-dark ' >

                    <h1 className='text-center'>Categories</h1>
                    <hr className='mt-0' />
                    <div className="dropdown show ">
                      <a className="btn btn-secondary  dropdown-toggle text-dark w-100" style={{ backgroundColor: 'white' }} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sports Nutrition
                      </a>

                      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a
                          className="btn btn-secondary dropdown-toggle w-100 text-dark"
                          style={{ backgroundColor: 'white' }}
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Protien
                        </a>
                        <div className="dropdown-menu ">
                          <a className="dropdown-item" href="#">Category 1</a>
                          <hr className='mt-0' />
                          <a className="dropdown-item" href="#">Category 2</a>
                          <hr className='mt-0' />
                          <a className="dropdown-item" href="#">Category 3</a>
                          <hr className='mt-0' />
                        </div>
                        <hr className="mt-0" />


                        <a
                          className="btn btn-secondary dropdown-toggle w-100 text-dark"
                          style={{ backgroundColor: 'white' }}
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Gainers
                        </a>
                        <div className="dropdown-menu ">
                          <a className="dropdown-item" href="#">Category 1</a>
                          <hr className='mt-0' />
                          <a className="dropdown-item" href="#">Category 2</a>
                          <hr className='mt-0' />
                          <a className="dropdown-item" href="#">Category 3</a>
                          <hr className='mt-0' />
                        </div>
                        <hr className="mt-0" />


                        <a
                          className="btn btn-secondary dropdown-toggle text-dark w-100"
                          style={{ backgroundColor: 'white' }}
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Pre/Post Workout
                        </a>
                        <div className="dropdown-menu ">
                          <a className="dropdown-item" href="#">Category 1</a>
                          <hr className='mt-0' />
                          <a className="dropdown-item" href="#">Category 2</a>
                          <hr className='mt-0' />
                          <a className="dropdown-item" href="#">Category 3</a>
                          <hr className='mt-0' />
                        </div>
                        <hr className="mt-0" />

                        <a
                          className="btn btn-secondary dropdown-toggle w-100 text-dark"
                          style={{ backgroundColor: 'white' }}
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Workout Essesntials
                        </a>
                        <div className="dropdown-menu ">
                          <a className="dropdown-item" href="#">Category 1</a>
                          <hr className='mt-0' />
                          <a className="dropdown-item" href="#">Category 2</a>
                          <hr className='mt-0' />
                          <a className="dropdown-item" href="#">Category 3</a>
                          <hr className='mt-0' />
                        </div>
                      </div>

                      <hr className='mt-0' />
                    </div>
                    <div className="dropdown show position-relative">
                      <a className="btn btn-secondary dropdown-toggle text-dark w-100" style={{ backgroundColor: 'white' }} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Vitamin & Supplements
                      </a>

                      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a
                          className="btn btn-secondary dropdown-toggle w-100 text-dark"
                          style={{ backgroundColor: 'white' }}
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Multivitamins
                        </a>
                        <div className="dropdown-menu ">
                          <a className="dropdown-item" href="#">Category 1</a>
                          <hr className='mt-0' />
                          <a className="dropdown-item" href="#">Category 2</a>
                          <hr className='mt-0' />
                          <a className="dropdown-item" href="#">Category 3</a>
                          <hr className='mt-0' />
                        </div>
                        <hr className='mt-0' />
                        <a
                          className="btn btn-secondary dropdown-toggle w-100 text-dark"
                          style={{ backgroundColor: 'white' }}
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Speciality Supplements
                        </a>
                        <div className="dropdown-menu ">
                          <a className="dropdown-item" href="#">Category 1</a>
                          <hr className='mt-0' />
                          <a className="dropdown-item" href="#">Category 2</a>
                          <hr className='mt-0' />
                          <a className="dropdown-item" href="#">Category 3</a>
                          <hr className='mt-0' />
                        </div>

                        <hr className='mt-0' />
                      </div>
                    </div>

                    <hr className='mt-0' />
                    <div className="dropdown show">
                      <a className="btn btn-secondary dropdown-toggle text-dark w-100" style={{ backgroundColor: 'white' }} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Ehanced Athlete
                      </a>
                    </div>
                  </div>



                  <br />
                  <br />
                  <div className="product-top-sellers border border-dark">
                    <h1 className='text-center'>Top Sellers</h1>
                    <hr className="mt-0" />
                    {/* <BrandCa>raousel /> */}
                    {/* <FeaturedProducts collections={data.collections} /> */}
                  </div>

                  <br />
                  <br />
                  <div className="product-authencity border border-dark">
                    <h2 className='text-center'>Authencity Matters</h2>
                    <hr className="mt-0" />

                    <p className='text-center'>
                      The risk of receiving a counterfeit product increases when customer buys it from a reseller as the product moves from Importer to distributor then retailer and then to the reseller. But here at BuildMyBody we have reduced this gap between the importer and the customer. That's how BuildMyBody maintains the quality and authenticity till customer receives the final product.
                    </p>
                    <a href="">
                      <p className='text-center mt-3'> Read More</p>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-9 " id="all-products">
              <h1
                style={{ color: '#ff2828' }}
                className="d-flex justify-content-center align-items-center"
              >
                <em>{collection.title}</em>
              </h1>
              <Pagination connection={collection.products}>
                {({ nodes, NextLink, PreviousLink, isLoading }) => (
                  <>
                    <div className="flex items-center justify-center mt-6">
                      <PreviousLink className="inline-block rounded font-medium text-center py-3 px-6 border w-full cursor-pointer">
                        {isLoading ? 'Loading...' : 'Load previous products'}
                      </PreviousLink>
                    </div>
                    <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 mt-5">
                        {nodes.map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                      </div>
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
const seo = ({ data }) => ({
  title: data?.collection?.title,
  description: data?.collection?.description.substr(0, 154),
});
export const handle = {
  seo,
};

export function meta({ data }) {
  return [
    { title: data?.collection?.title ?? 'Collection' },
    { description: data?.collection?.description },
  ];
}
