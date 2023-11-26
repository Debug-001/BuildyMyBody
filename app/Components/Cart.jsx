import {Link, useFetcher} from '@remix-run/react';
import {CartForm} from '@shopify/hydrogen';
import {flattenConnection, Image, Money} from '@shopify/hydrogen-react';
import {AiOutlineDelete} from 'react-icons/ai';
export function CartLineItems({linesObj}) {
  const lines = flattenConnection(linesObj);
  return (
    <div className="space-y-8">
      {lines.map((line) => {
        return <LineItem key={line.id} lineItem={line} />;
      })}
    </div>
  );
}

function ItemRemoveButton({lineIds}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesRemove}
      inputs={{lineIds}}
    >
      <button
        className="bg-white border-black text-black hover:text-white hover:bg-black rounded-md font-small text-center my-2 max-w-xl leading-none border w-10 h-10 flex items-center justify-center"
        type="submit"
      >
        <AiOutlineDelete />
      </button>
    </CartForm>
  );
}

function LineItem({lineItem}) {
  const {merchandise, quantity} = lineItem;
  return (
    <div className="all-info d-flex mt-5 row">
      <div className="col-5   mt-2">
        <Link to={`/product/${merchandise.product.handle}`} className="">
          <Image
            data={merchandise.image}
            className=""
            style={{objectFit: 'contain', transform: 'scale(1.4)'}}
            //   height={110}
          />
        </Link>
      </div>
      {/* PROTIEN INFO */}
      <div className="col">
        <div className="protien-info">
          <Link
            to={`/product/${merchandise.product.handle}`}
            className="text-start"
            id="protien-name"
          >
            {merchandise.product.title}
          </Link>
          <Money data={lineItem.cost.totalAmount} />
        </div>
      </div>

      <div className="col">
        <ItemRemoveButton lineIds={[lineItem.id]} />
      </div>
      <div className="add-to-cart  ml-lg-2 ml-md-2">
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
        <span className="num">{quantity}</span>
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
  );
}
export function CartSummary({cost, checkoutUrl}) {
  if (!checkoutUrl) return null;
  return (
    <>
      <div className="card-1 px-4 py-2">
        <p className="text-start mt-2" id="order">
          My Order Summary
        </p>
        <div
          className="text-start d-flex justify-content-between mt-4"
          id="mrp"
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
          id="mrp"
        >
          Total{' '}
          {cost?.totalAmount?.amount ? (
            <Money data={cost?.totalAmount} className="text-success" />
          ) : (
            '-'
          )}
        </div>
        <hr className="bg-light mt-3 " />
        <Link
          to={checkoutUrl}
          className="btn btn-warning w-100 text-dark font-weight-bold"
        >
          Checkout
        </Link>
      </div>
    </>
  );
}
