import { useLoaderData } from '@remix-run/react';
import { useEffect } from 'react';

const TopSelling = ({ collection }) => {
  useEffect(() => {
    console.log(collection);
  }, []);
  return (
    <>
      <section id="featured-section">
        <div
          id="carouselExampleControls1"
          className="carousel slide "
          data-ride="carousel"
        >
          <h1 className="d-flex justify-content-center font-weight-bold custom-heading">
            <em>FEATURED PRODUCTS</em>
          </h1>
          <div className="carousel-inner" id="featured-carousel">
            {collection.products.nodes.map((product, index) => (
              <div
                className={
                  index === 0 ? 'carousel-item active' : 'carousel-item'
                }
              >
                <div className="row ">
                  <div className="col-md-5 col-lg-6 d-flex justify-content-center">
                    <img
                      className="featured-img"
                      src={product.variants.nodes[0].image?.url || ''}
                      alt={product.variants.nodes[0].image?.altText || ''}
                    />
                  </div>
                  <div className="col featured-details ">
                    <h2>{product.title}</h2>
                    <h4>
                      {product.variants.nodes[0].compareAtPrice && (
                        <del className="discount-text">
                          ₹{product.variants.nodes[0].compareAtPrice.amount}
                        </del>
                      )}{' '}
                      ₹ {product.variants.nodes[0].price.amount}
                    </h4>
                    {product.descriptionHtml}
                    <a href="/products" className="btn featured-btn">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls1"
            id="carousel-controls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls1"
            id="carousel-controls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default TopSelling;

// {
//     "id": "gid://shopify/Collection/454116835616",
//     "title": "all",
//     "products": {
//         "nodes": [
//             {
//                 "id": "gid://shopify/Product/8456567423264",
//                 "title": "The Complete Snowboard",
//                 "publishedAt": "2023-08-03T13:25:22Z",
//                 "descriptionHtml": "This <b>PREMIUM</b> <i>snowboard</i> is so <b>SUPER</b><i>DUPER</i> awesome!",
//                 "handle": "the-complete-snowboard",
//                 "variants": {
//                     "nodes": [
//                         {
//                             "id": "gid://shopify/ProductVariant/45792784089376",
//                             "image": {
//                                 "url": "https://cdn.shopify.com/s/files/1/0794/9395/5872/products/Main_589fc064-24a2-4236-9eaf-13b2bd35d21d.jpg?v=1690103536",
//                                 "altText": "Top and bottom view of a snowboard. The top view shows abstract circles and lines in shades of teal.\n          The bottom view shows abstract circles and lines in shades of purple and blue with the text “SHOPIFY” in a\n          sans serif typeface on top.",
//                                 "width": 1600,
//                                 "height": 1600
//                             },
//                             "price": {
//                                 "amount": "699.95",
//                                 "currencyCode": "INR"
//                             },
//                             "compareAtPrice": null
//                         }
//                     ]
//                 }
//             },
//             {
//                 "id": "gid://shopify/Product/8456567324960",
//                 "title": "The Minimal Snowboard",
//                 "publishedAt": "2023-08-03T13:25:22Z",
//                 "descriptionHtml": "",
//                 "handle": "the-minimal-snowboard",
//                 "variants": {
//                     "nodes": [
//                         {
//                             "id": "gid://shopify/ProductVariant/45733373051168",
//                             "image": null,
//                             "price": {
//                                 "amount": "885.95",
//                                 "currencyCode": "INR"
//                             },
//                             "compareAtPrice": null
//                         }
//                     ]
//                 }
//             },
//             {
//                 "id": "gid://shopify/Product/8456567882016",
//                 "title": "The 3p Fulfilled Snowboard",
//                 "publishedAt": "2023-08-03T13:25:23Z",
//                 "descriptionHtml": "",
//                 "handle": "the-3p-fulfilled-snowboard",
//                 "variants": {
//                     "nodes": [
//                         {
//                             "id": "gid://shopify/ProductVariant/45733373837600",
//                             "image": {
//                                 "url": "https://cdn.shopify.com/s/files/1/0794/9395/5872/products/Main_b9e0da7f-db89-4d41-83f0-7f417b02831d.jpg?v=1690103537",
//                                 "altText": "Top and bottom view of a snowboard. The top view shows 7 stacked hexagons and the bottom view shows\n          a small, centred hexagonal logo for Hydrogen.",
//                                 "width": 1600,
//                                 "height": 1600
//                             },
//                             "price": {
//                                 "amount": "2629.95",
//                                 "currencyCode": "INR"
//                             },
//                             "compareAtPrice": null
//                         }
//                     ]
//                 }
//             },
//             {
//                 "id": "gid://shopify/Product/8456567783712",
//                 "title": "The Multi-location Snowboard",
//                 "publishedAt": "2023-08-03T13:25:22Z",
//                 "descriptionHtml": "",
//                 "handle": "the-multi-location-snowboard",
//                 "variants": {
//                     "nodes": [
//                         {
//                             "id": "gid://shopify/ProductVariant/45733373739296",
//                             "image": {
//                                 "url": "https://cdn.shopify.com/s/files/1/0794/9395/5872/products/Main_0a4e9096-021a-4c1e-8750-24b233166a12.jpg?v=1690103536",
//                                 "altText": "Top and bottom view of a snowboard. The top view shows a pixelated Shopify bag logo and a pixelated\n          character reviewing a clipboard with a questioning expression with a bright green-blue background. The bottom\n          view is a pattern of many pixel characters with a bright green-blue background.",
//                                 "width": 1600,
//                                 "height": 1600
//                             },
//                             "price": {
//                                 "amount": "729.95",
//                                 "currencyCode": "INR"
//                             },
//                             "compareAtPrice": null
//                         }
//                     ]
//                 }
//             },
//             {
//                 "id": "gid://shopify/Product/8456568045856",
//                 "title": "The Collection Snowboard: Liquid",
//                 "publishedAt": "2023-08-03T13:25:23Z",
//                 "descriptionHtml": "",
//                 "handle": "the-collection-snowboard-liquid",
//                 "variants": {
//                     "nodes": [
//                         {
//                             "id": "gid://shopify/ProductVariant/45733374001440",
//                             "image": {
//                                 "url": "https://cdn.shopify.com/s/files/1/0794/9395/5872/products/Main_b13ad453-477c-4ed1-9b43-81f3345adfd6.jpg?v=1690103539",
//                                 "altText": "Top and bottom view of a snowboard. The top view shows a stylized scene of water, trees, mountains,\n        sky and a moon in blue colours. The bottom view has a blue liquid, drippy background with the text “liquid” in\n        a stylized script typeface.",
//                                 "width": 1600,
//                                 "height": 1600
//                             },
//                             "price": {
//                                 "amount": "749.95",
//                                 "currencyCode": "INR"
//                             },
//                             "compareAtPrice": null
//                         }
//                     ]
//                 }
//             },
//             {
//                 "id": "gid://shopify/Product/8456567914784",
//                 "title": "The Collection Snowboard: Oxygen",
//                 "publishedAt": "2023-08-03T13:25:23Z",
//                 "descriptionHtml": "",
//                 "handle": "the-collection-snowboard-oxygen",
//                 "variants": {
//                     "nodes": [
//                         {
//                             "id": "gid://shopify/ProductVariant/45733373870368",
//                             "image": {
//                                 "url": "https://cdn.shopify.com/s/files/1/0794/9395/5872/products/Main_d624f226-0a89-4fe1-b333-0d1548b43c06.jpg?v=1690103537",
//                                 "altText": "Top and bottom view of a snowboard. The top view shows a stylized scene of trees, mountains, sky and\n        a sun in red colours. The bottom view has blue wavy lines in the background with the text “Oxygen” in a\n        stylized script typeface.",
//                                 "width": 1600,
//                                 "height": 1600
//                             },
//                             "price": {
//                                 "amount": "1025.0",
//                                 "currencyCode": "INR"
//                             },
//                             "compareAtPrice": null
//                         }
//                     ]
//                 }
//             },
//             {
//                 "id": "gid://shopify/Product/8456567849248",
//                 "title": "The Multi-managed Snowboard",
//                 "publishedAt": "2023-08-03T13:25:22Z",
//                 "descriptionHtml": "",
//                 "handle": "the-multi-managed-snowboard",
//                 "variants": {
//                     "nodes": [
//                         {
//                             "id": "gid://shopify/ProductVariant/45733373804832",
//                             "image": {
//                                 "url": "https://cdn.shopify.com/s/files/1/0794/9395/5872/products/Main_9129b69a-0c7b-4f66-b6cf-c4222f18028a.jpg?v=1690103536",
//                                 "altText": "Top and bottom view of a snowboard. The top view shows an illustration with varied outlined shapes\n          in black. The bottom view shows a black box character with an H pointing, and surrounded by black outlined\n          illustrative elements.",
//                                 "width": 1600,
//                                 "height": 1600
//                             },
//                             "price": {
//                                 "amount": "629.95",
//                                 "currencyCode": "INR"
//                             },
//                             "compareAtPrice": null
//                         }
//                     ]
//                 }
//             },
//             {
//                 "id": "gid://shopify/Product/8456567750944",
//                 "title": "The Inventory Not Tracked Snowboard",
//                 "publishedAt": "2023-08-03T13:25:22Z",
//                 "descriptionHtml": "",
//                 "handle": "the-inventory-not-tracked-snowboard",
//                 "variants": {
//                     "nodes": [
//                         {
//                             "id": "gid://shopify/ProductVariant/45733373706528",
//                             "image": {
//                                 "url": "https://cdn.shopify.com/s/files/1/0794/9395/5872/products/snowboard_purple_hydrogen.png?v=1690103536",
//                                 "altText": "Top and bottom view of a snowboard. The top view shows a centred hexagonal logo for Hydrogen that\n          appears to radiate outwards, as well as some overlapping hexagons at the bottom. The bottom view shows an\n          abstract angular grid in purples.",
//                                 "width": 3097,
//                                 "height": 3908
//                             },
//                             "price": {
//                                 "amount": "949.95",
//                                 "currencyCode": "INR"
//                             },
//                             "compareAtPrice": null
//                         }
//                     ]
//                 }
//             },
//             {
//                 "id": "gid://shopify/Product/8456567685408",
//                 "title": "The Compare at Price Snowboard",
//                 "publishedAt": "2023-08-03T13:25:22Z",
//                 "descriptionHtml": "",
//                 "handle": "the-compare-at-price-snowboard",
//                 "variants": {
//                     "nodes": [
//                         {
//                             "id": "gid://shopify/ProductVariant/45733373673760",
//                             "image": {
//                                 "url": "https://cdn.shopify.com/s/files/1/0794/9395/5872/products/snowboard_sky.png?v=1690103536",
//                                 "altText": "Top and bottom view of a snowboard. The top view shows pixelated clouds, with the top-most one being\n        the shape of the Shopify bag logo. The bottom view has a pixelated cloudy sky with blue, pink and purple\n        colours.",
//                                 "width": 3097,
//                                 "height": 3908
//                             },
//                             "price": {
//                                 "amount": "785.95",
//                                 "currencyCode": "INR"
//                             },
//                             "compareAtPrice": {
//                                 "amount": "885.95",
//                                 "currencyCode": "INR"
//                             }
//                         }
//                     ]
//                 }
//             },
//             {
//                 "id": "gid://shopify/Product/8456567652640",
//                 "title": "The Out of Stock Snowboard",
//                 "publishedAt": "2023-08-03T13:25:22Z",
//                 "descriptionHtml": "",
//                 "handle": "the-out-of-stock-snowboard",
//                 "variants": {
//                     "nodes": [
//                         {
//                             "id": "gid://shopify/ProductVariant/45733373640992",
//                             "image": {
//                                 "url": "https://cdn.shopify.com/s/files/1/0794/9395/5872/products/Main_f44a9605-cd62-464d-b095-d45cdaa0d0d7.jpg?v=1690103536",
//                                 "altText": "Top and bottom view of a snowboard. The top view shows a toggle at the top in shades of blue and\n        yellow. The bottom view shows an abstract illustration of toggles in blues and yellows.",
//                                 "width": 3908,
//                                 "height": 3908
//                             },
//                             "price": {
//                                 "amount": "885.95",
//                                 "currencyCode": "INR"
//                             },
//                             "compareAtPrice": null
//                         }
//                     ]
//                 }
//             }
//         ]
//     }
// }
