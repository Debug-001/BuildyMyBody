import {Link, useFetcher} from '@remix-run/react';
import {CartForm} from '@shopify/hydrogen';
import {flattenConnection, Image, Money} from '@shopify/hydrogen-react';

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
        <IconRemove />
      </button>
    </CartForm>
  );
}

function IconRemove() {
  return (
    // <svg
    //   fill="transparent"
    //   stroke="currentColor"
    //   viewBox="0 0 20 20"
    //   className="w-5 h-5"
    // >
    //   <title>Remove</title>
    //   <path
    //     d="M4 6H16"
    //     strokeWidth="1.25"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path d="M8.5 9V14" strokeLinecap="round" strokeLinejoin="round" />
    //   <path d="M11.5 9V14" strokeLinecap="round" strokeLinejoin="round" />
    //   <path
    //     d="M5.5 6L6 17H14L14.5 6"
    //     strokeWidth="1.25"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M8 6L8 5C8 4 8.75 3 10 3C11.25 3 12 4 12 5V6"
    //     strokeWidth="1.25"
    //   />
    // </svg>
    <p>Remove</p>
  );
}

function LineItem({lineItem}) {
  const {merchandise, quantity} = lineItem;

  return (
    <div className="all-info d-flex mt-5">
      <Link to={`/product/${merchandise.product.handle}`} className="">
        <Image
          data={merchandise.image}
          //   width={110}
          className="w-25 protien-image"
          //   height={110}
        />
      </Link>
      {/* PROTIEN INFO */}
      <div className="protien-info">
        <Link
          to={`/products/${merchandise.product.handle}`}
          className="text-start"
          id="protien-name"
        >
          {merchandise.product.title}
        </Link>
        <Money data={lineItem.cost.totalAmount} />
        <ItemRemoveButton lineIds={[lineItem.id]} />
      </div>
      {/* <div className="add-to-cart  ml-lg-2 ml-md-2">
        <span className="minus" onClick={decNum}>
          -
        </span>
        <span className="num">{quantity}</span>
        <span className="plus" onClick={incNum}>
          +
        </span>
      </div> */}
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
        <p className="text-start d-flex justify-content-between mt-4" id="mrp">
          Total Mrp <span>Rs 16,097</span>
        </p>
        <p className="text-start d-flex justify-content-between text-secondary mt-2">
          Total Discount <span className="text-success">-Rs 16,097</span>{' '}
        </p>
        <hr className="bg-light mt-3 " />
        <p className="text-start d-flex justify-content-between  text-secondary ">
          Total{' '}
          <span>
            {cost?.subtotalAmount?.amount ? (
              <Money data={cost?.subtotalAmount} />
            ) : (
              '-'
            )}
          </span>{' '}
        </p>
        <hr className="bg-light mt-3 " />
        <Link
          to={checkoutUrl}
          className="btn btn-warning w-100 text-dark font-weight-bold"
        >
          Checkout
        </Link>
        <p className="text-center mt-3 py-1 " id="savings-2">
          You will save 4,399 & earn 2234 MB Cash * on this order
        </p>
      </div>
    </>
  );
}
