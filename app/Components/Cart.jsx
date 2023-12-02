import { Link, useFetcher } from '@remix-run/react';
import { CartForm } from '@shopify/hydrogen';
import { flattenConnection, Image, Money } from '@shopify/hydrogen-react';
import { AiOutlineDelete } from 'react-icons/ai';
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

function ItemRemoveButton({ lineIds }) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesRemove}
      inputs={{ lineIds }}
    >
      <button id="remove-product"
        className="bg-white p-2 border-black text-black hover:text-white hover:bg-black rounded-md font-small text-center my-2 max-w-xl leading-none border w-10 h-10 flex items-center justify-center"
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
    <div className="all-info  mt-5 row">
      <div className="col-lg-3 col-md-3 col-sm-4  mt-2">
        <Link to={`/product/${merchandise.product.handle}`} className="">
          <Image
            data={merchandise.image}
            className="cart-item-img"
          />
        </Link>
      </div>
      {/* PROTIEN INFO */}
      <div className="col-lg-4 col-md-4 col-sm-4 ">
        <div className="protien-info">
          <Link
            to={`/product/${merchandise.product.handle}`}
            className="text-start"
            id="protien-name"
          >
            {merchandise.product.title}
          </Link>
          <Money className='price-cart' data={lineItem.cost.totalAmount} />
        </div>
      </div>

      <div className="col-lg-2 col-md-2 col-sm-4">
        <ItemRemoveButton lineIds={[lineItem.id]} />
      </div>
      <div className=" col-lg-3 col-md-3 quantity-button">
        <div className='d-flex justify-content-center align-items-center'>
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
              <button className="minus">-</button>
            </CartForm>
          </div>
          <div className='ml-3 mr-3'>
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
                    quantity: quantity + 1,
                  },
                ],
              }}
            >
              <button className="plus">+</button>
            </CartForm>
          </div>
        </div>
      </div>
    </div>
  );
}
export function CartSummary({ cost, checkoutUrl }) {
  if (!checkoutUrl) return null;
  return (
    <>
      <div className="card-1 px-4 py-2">
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
        <Link
          to={checkoutUrl}
          className="btn w-100 checkout-button"
        >
          Checkout
        </Link>
      </div>
    </>
  );
}
