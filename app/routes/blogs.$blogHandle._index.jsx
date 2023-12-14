import { json } from '@shopify/remix-oxygen';
import { Link, useLoaderData } from '@remix-run/react';
import { Image, Pagination, getPaginationVariables } from '@shopify/hydrogen';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Brand from '../Components/Home/Brand';
export const meta = ({ data }) => {
  return [{ title: `BuildMyBody|${data.blog.title}` }];
};

export const loader = async ({ request, params, context: { storefront } }) => {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 4,
  });

  if (!params.blogHandle) {
    throw new Response(`blog not found`, { status: 404 });
  }

  const { blog } = await storefront.query(BLOGS_QUERY, {
    variables: {
      blogHandle: params.blogHandle,
      ...paginationVariables,
    },
  });

  if (!blog?.articles) {
    throw new Response('Not found', { status: 404 });
  }

  return json({ blog });
};

export default function Blog() {
  const { blog } = useLoaderData();
  const { articles } = blog;

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>{blog.title}</h1>
        <div className="blog row">
          <div className="col-lg-4 col-md-4 ">

          </div>
          <div className="blog-grid col-lg-8 col-md-8 col-sm-12">
            <Pagination connection={articles}>
              {({ nodes, isLoading, PreviousLink, NextLink }) => {
                return (
                  <>
                    <PreviousLink>
                      {isLoading ? 'Loading...' : <span>↑ Load previous</span>}
                    </PreviousLink>
                    {nodes.map((article, index) => {
                      return (
                        <ArticleItem
                          article={article}
                          key={article.id}
                          loading={index < 2 ? 'eager' : 'lazy'}
                        />
                      );
                    })}
                    <NextLink>
                      {isLoading ? 'Loading...' : <span>Load more ↓</span>}
                    </NextLink>
                  </>
                );
              }}
            </Pagination>
          </div>
        </div>
      </div>
      <Brand />
      <Footer />
    </>
  );
}

function ArticleItem({ article, loading }) {
  const publishedAt = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article.publishedAt));
  return (
    <div className="blog-article d-flex flex-column" key={article.id}>
      <h3 className='mt-2'>{article.title}</h3>
      <Link to={`/blogs/${article.blog.handle}/${article.handle}`}>
        {article.image && (
          <div className="blog-article-image mt-3">
            <Image
              alt={article.image.altText || article.title}
              style={{ height: '100%' }}
              data={article.image}
              loading={loading}

            />
          </div>
        )}


        <small className='mt-2 text-dark'>{publishedAt}</small>
      </Link>

      <Link to={`/blogs/${article.blog.handle}/${article.handle}`}>
        <button className=" w-50 p-2 mt-2 " id='flash-button'>
          Read More
        </button>
      </Link>
    </div>
  );
}

// NOTE: https://shopify.dev/docs/api/storefront/latest/objects/blog
const BLOGS_QUERY = `#graphql
  query Blog(
    $language: LanguageCode
    $blogHandle: String!
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(language: $language) {
    blog(handle: $blogHandle) {
      title
      seo {
        title
        description
      }
      articles(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ArticleItem
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
  fragment ArticleItem on Article {
    author: authorV2 {
      name
    }
    contentHtml
    handle
    id
    image {
      id
      altText
      url
      width
      height
    }
    publishedAt
    title
    blog {
      handle
    }
  }
`;
