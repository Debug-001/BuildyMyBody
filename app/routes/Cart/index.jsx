import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import {Link, useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
import {CartForm} from '@shopify/hydrogen';
import {CartLineItems, CartSummary} from '~/Components/Cart';
import {useState} from 'react';

export async function action({request, context}) {
  const {cart} = context;

  const formData = await request.formData();
  const {action, inputs} = CartForm.getFormInput(formData);

  let result;

  switch (action) {
    case CartForm.ACTIONS.LinesAdd:
      result = await cart.addLines(inputs.lines);
      break;
    case CartForm.ACTIONS.LinesUpdate:
      result = await cart.updateLines(inputs.lines);
      break;
    case CartForm.ACTIONS.LinesRemove:
      result = await cart.removeLines(inputs.lineIds);
      break;
    default:
      invariant(false, `${action} cart action is not defined`);
  }

  // The Cart ID might change after each mutation, so update it each time.
  const headers = cart.setCartId(result.cart.id);

  return json(result, {status: 200, headers});
}
export async function loader({context}) {
  const {cart} = context;
  return json({cart: await cart.get()});
}

const Cart = () => {
  const {cart} = useLoaderData();
  const [btnClass, setBtnClass] = useState('transparent');
  function toggleColor() {
    // const [btnClass, setBtnClass] = useState('blue-color');
    if (btnClass === 'transparent') {
      setBtnClass('red-color');
    } else {
      setBtnClass('transparent');
    }
  }
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert('Please add items to cart');
      setNum(0);
    }
  };

  const removeItem = () => {};

  return (
    <>
      <Navbar />
      <section className="main-div ">
        <div className="container-fullwidth mx-5 mt-4">
          {cart?.lines.length > 0 ? (
            <div className="row ">
              <div
                className="col h-100 col-12 col-sm-12 col-md-12 col-lg-7"
                id="leftside"
              >
                {cart?.totalQuantity > 0 && (
                  <CartLineItems linesObj={cart.lines} />
                )}
              </div>

              <div className="col  h-100 col-12 col-sm-12 col-md-12 col-lg-5 order-summary mt-1 mt-md-3 px-5">
                <CartSummary
                  cost={cart?.cost || 0}
                  checkoutUrl={cart?.checkoutUrl || ''}
                />
              </div>
            </div>
          ) : (
            <div className="row">
              <h4 className='d-flex justify-content-center px-3'>Your Cart is Empty, Please add some items to your cart.</h4>
            </div>
          )}
        </div>
        {/* end of container */}
      </section>
      <Footer />
    </>
  );
};

export default Cart;
