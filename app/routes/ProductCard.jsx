import { Link } from '@remix-run/react';
import { Image, Money } from '@shopify/hydrogen';
import { useEffect } from 'react';
import ProductForm from '~/Components/Product/ProductForm';

export default function ProductCard({ product }) {
  const { price, compareAtPrice } = product.variants?.nodes[0] || {};
  const isDiscounted = compareAtPrice?.amount > price?.amount;
  return (
    <div className="col">
      <Link to={`/product/${product.handle}`} className="">
        <div className="card">
          <div className="card-img-all">
            <Image
              data={product.variants.nodes[0].image}
              alt={product.title}
              sizes="(max-width: 768px) 100vw, 50vw"

              className="all-img"
            />{' '}
          </div>
          <div className="card-content-all mt-4">
            <h3 className="font-weight-bolder text-center" style={{ color: 'white' }}> {product.title}</h3>
            <p className="card-text mt-3 text-center">
              <Money withoutTrailingZeros data={price} />
              {isDiscounted && (
                <Money
                  style={{ color: '#ff2828', textDecoration: 'dashed' }}
                  className="line-through opacity-50"
                  withoutTrailingZeros
                  data={compareAtPrice}
                />
              )}
            </p>
          </div>
        </div>
      </Link>
      <div className="all-btn mt-3 d-flex flex-md-column flex-lg-row">
        <ProductForm variantId={product.variants?.nodes[0].id} />
        <a href="/buy" className="buy-button ml-lg-4 ml-md-0 ml-sm-0">
          Buy Now
        </a>
      </div>
    </div>
  );
}
