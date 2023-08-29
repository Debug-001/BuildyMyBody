import { defer } from '@shopify/remix-oxygen';
import { useLoaderData } from '@remix-run/react';
import { getPaginationVariables } from '@shopify/hydrogen';

import { SearchForm, SearchResults, NoSearchResults } from '../Components/Search';
import Footer from '~/Components/Footer';
import Navbar from '~/Components/Navbar';

export const meta = () => {
  return [{ title: `Hydrogen | Search` }];
};

export async function loader({ request, context }) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const variables = getPaginationVariables(request, { pageBy: 8 });
  const searchTerm = String(searchParams.get('q') || '');

  if (!searchTerm) {
    return {
      searchResults: { results: null, totalResults: 0 },
      searchTerm,
    };
  }
}
export async function getSearchResults(searchTerm, context) {
  const variables = getPaginationVariables(null, { pageBy: 8 }); // You can pass the appropriate request object if needed
  const data = await context.storefront.query(SEARCH_QUERY, {
    variables: {
      query: searchTerm,
      ...variables,
    },
  });

  if (!data) {
    throw new Error('No search data returned from Shopify API');
  }

  const totalResults = Object.values(data).reduce((total, value) => {
    return total + value.nodes.length;
  }, 0);

  const searchResults = {
    results: data,
    totalResults,
  };

  return searchResults;
}




export default function SearchPage() {
  const { searchTerm, searchResults } = useLoaderData();
  return (
    <>
      <Navbar />
      <div className="search">
        <h1>Search</h1>
        <SearchForm searchTerm={searchTerm} />
        {!searchTerm || !searchResults.totalResults ? (
          <NoSearchResults />
        ) : (
          <SearchResults results={searchResults.results} />
        )}
      </div>
      <Footer />
    </>
  );
}

const SEARCH_QUERY = `#graphql
  fragment SearchProduct on Product {
    __typename
    handle
    id
    publishedAt
    title
    trackingParameters
    vendor
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
        selectedOptions {
          name
          value
        }
        product {
          handle
          title
        }
      }
    }
  }
  fragment SearchPage on Page {
     __typename
     handle
    id
    title
    trackingParameters
  }
  fragment SearchArticle on Article {
    __typename
    handle
    id
    title
    trackingParameters
  }
  query search(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $query: String!
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    products: search(
      query: $query,
      unavailableProducts: HIDE,
      types: [PRODUCT],
      first: $first,
      sortKey: RELEVANCE,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...on Product {
          ...SearchProduct
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
    pages: search(
      query: $query,
      types: [PAGE],
      first: 10
    ) {
      nodes {
        ...on Page {
          ...SearchPage
        }
      }
    }
    articles: search(
      query: $query,
      types: [ARTICLE],
      first: 10
    ) {
      nodes {
        ...on Article {
          ...SearchArticle
        }
      }
    }
  }
`;


{/* <div className=" d-flex d-lg-none justify-content-center  ">
  <div className="nav-group ">
    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
      <g>
        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
      </g>
    </svg>
    <input placeholder="Search" type="search" className="nav-search " />
  </div>

</div> */}







{/* <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
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
                  <p className='text-center text-dark'>   <img src={Protein} className='w-50' alt="" /></p>
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
          {/* Add more submenu items as needed */}
        // </div>
      // )}
    // </li>
  // ))}
// </ul> */}







// const [isSearchBarVisible, setSearchBarVisible] = useState(false);

// const showSearchBar = () => {
//   setSearchBarVisible(true);
// };

// const hideSearchBar = () => {
//   setSearchBarVisible(false);
// };
// const [isSubMenuVisible, setSubMenuVisible] = useState(false);
// const showSubMenu = () => {
//   setSubMenuVisible(true);
// };

// const hideSubMenu = () => {
//   setSubMenuVisible(false);
// };