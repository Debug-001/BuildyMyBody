import { Link} from '@remix-run/react';
import { CartForm } from '@shopify/hydrogen';
import { flattenConnection, Image, Money } from '@shopify/hydrogen-react';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const meta = () => {
  return [{ title: `BuildMyBody|Cart` }];
};


export function CartLineItems({ linesObj }) {
  const lines = flattenConnection(linesObj);
  return (
    <div className="space-y-8">
      {lines.map((line) => {
        return <LineItem key={line.id} lineItem={line} />;
      })}
    </div>
  );
}
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3, // Show 3 slides on large screens
  arrows: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992, // Medium screens
      settings: {
        slidesToShow: 3, // Show 2 slides on medium screens
      },
    },
    {
      breakpoint: 576, // Small screens
      settings: {
        slidesToShow: 2, // Show 1 slide on small screens
      },
    },
  ],
};

function ItemRemoveButton({ lineIds }) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesRemove}
      inputs={{ lineIds }}
    >
      <button
        id="remove-product"
        className="text-dark mt-4"
        style={{ background: 'white' }}
        type="submit"
      >
        <p>Remove</p>
      </button>
    </CartForm>
  );
}

function LineItem({ lineItem }) {
  const { merchandise, quantity } = lineItem;
  return (
    <>
      <div className="all-info  mt-5 row">
        <div className=" col-6 mt-0 mt-lg-2 mt-md-2">
          <Link to={`/product/${merchandise.product.handle}`} className="">
            <Image data={merchandise.image} className="cart-item-img" />
          </Link>
        </div>
        {/* PROTIEN INFO */}
        <div className=" col-6 ">
          <div className="protien-info mt-5 mt-md-0 mt-lg-0">
            <Link
              to={`/product/${merchandise.product.handle}`}
              className="text-start "
              id="protien-name"
            >
              {merchandise.product.title}
              <br />
            </Link>
            {merchandise.selectedOptions &&
              merchandise.selectedOptions.map((option) => (
                <div>
                  ({option.name}: {option.value})
                </div>
              ))}
            <Money className="price-cart" data={lineItem.cost.totalAmount} />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6 ">
          <div className="d-flex justify-content-left justify-content-lg-center justify-content-md-center ">
            <div
              className="d-flex p-2 mt-4 flex-row-reverse"
              style={{ border: '1px solid black', borderRadius: '4px' }}
            >
              <div>
                <CartForm
                  route="/cart"
                  action={CartForm.ACTIONS.LinesUpdate}
                  inputs={{
                    lines: [
                      {
                        id: lineItem.id,
                        merchandiseId: merchandise.id,
                        quantity: quantity + 1,
                      },
                    ],
                  }}
                >
                  <button
                    style={{ border: 'none', background: 'none' }}
                    className="ml-4"
                  >
                    {' '}
                    <FaPlus />
                  </button>
                </CartForm>
              </div>

              <div className="">
                <span className="num">{quantity}</span>
              </div>
              <div>
                <CartForm
                  route="/cart"
                  action={CartForm.ACTIONS.LinesUpdate}
                  inputs={{
                    lines: [
                      {
                        id: lineItem.id,
                        merchandiseId: merchandise.id,
                        quantity: quantity - 1,
                      },
                    ],
                  }}
                >
                  <button
                    style={{ border: 'none', background: 'none' }}
                    className="mr-4"
                  >
                    {' '}
                    <FaMinus />
                  </button>
                </CartForm>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-end">
            <div className=" d-flex">
              <ItemRemoveButton lineIds={[lineItem.id]} className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function CartSummary({ cost, checkoutUrl, collection }) {
  if (!checkoutUrl) return null;
  return (
    <>
      <div className="card-1 px-4 py-2 mt-2">
        <p className="text-start mt-2" id="order">
          My Order Summary
        </p>
        <div
          className="text-start d-flex justify-content-between mt-4"
          id="mrp1"
        >
          Subtotal
          {cost?.subtotalAmount?.amount ? (
            <Money data={cost?.subtotalAmount} />
          ) : (
            '-'
          )}
        </div>
        <div
          className="text-start d-flex justify-content-between mt-4"
          id="mrp2"
        >
          Total{' '}
          {cost?.totalAmount?.amount ? (
            <Money data={cost?.totalAmount} className="text-success" />
          ) : (
            '-'
          )}
        </div>
        <hr className="cart-hr bg-dark w-100 mt-3 " />
        <Link to={checkoutUrl} className="btn w-100 checkout-button" target="_blank" rel=" noopener noreferrer ">
          Checkout
        </Link>
      </div>

    </>
  );
}
