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
      <asection className="main-div ">
        <div className="container-fullwidth mx-5 mt-4">
          <div className="row ">
            <div
              className="col h-100 col-12 col-sm-12 col-md-12 col-lg-7"
              id="leftside"
            >
              <div className="card mt-0">
                <div className="row d-flex justify-content-center">
                  <div className="col-12">
                    <ul id="progressbar" className="text-center">
                      <li className="step0"></li>
                      <li className="step0"></li>
                      <li className="step0"></li>
                    </ul>
                  </div>
                </div>
              </div>
              {cart?.totalQuantity > 0 && (
                <CartLineItems linesObj={cart.lines} />
              )}
            </div>

            <div className="col  h-100 col-12 col-sm-12 col-md-12 col-lg-5 order-summary mt-1 mt-md-3 px-5">
              <CartSummary
                cost={cart?.cost || 0}
                checkoutUrl={cart?.checkoutUrl || ''}
              />

              <div className="card-1 p-1 mt-3 px-2 font-weight-bold">
                <div className="col h-100 mt-2">
                  <p className="text-start">Have a Coupon?</p>
                  <input
                    type="email"
                    className="form-control input mb-3 mt-3"
                    id="inputEmail"
                    placeholder="Enter code"
                  />
                </div>
              </div>

              <div className="card-1 mt-3 mb-5">
                {/* <div className="col"> */}
                <div className="container-fullwidth text-center">
                  <div className="row d-flex align-items-center">
                    <div className="col-1 d-flex align-items-center justify-content-center">
                      <a
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                      >
                        <div className="carousel-nav-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 129 129"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="col-10">
                      {/*Start carousel*/}
                      <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="row">
                              <div
                                style={{
                                  backgroundImage: 'url("/img/tp2.jpg")',
                                  mixBlendMode: 'multiply',
                                }}
                                className="col-12 col-md d-flex align-items-center justify-content-center"
                              ></div>
                              <div
                                style={{
                                  backgroundImage: 'url("/img/tp2.jpg")',
                                  mixBlendMode: 'multiply',
                                }}
                                className="col-12 col-md d-flex align-items-center justify-content-center"
                              ></div>
                              <div
                                style={{
                                  backgroundImage: 'url("/img/tp3.jpg")',
                                  mixBlendMode: 'multiply',
                                }}
                                className="col-12 col-md d-flex align-items-center justify-content-center"
                              ></div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="row">
                              <div
                                style={{
                                  backgroundImage: 'url("/img/tp4.jpg")',
                                  mixBlendMode: 'multiply',
                                }}
                                className="col-12 col-md d-flex align-items-center justify-content-center"
                              >
                                <img src="" alt="" />
                              </div>
                              <div
                                style={{
                                  backgroundImage: 'url("/img/tp5.jpg")',
                                  mixBlendMode: 'multiply',
                                }}
                                className="col-12 col-md d-flex align-items-center justify-content-center"
                              ></div>
                              <div
                                style={{
                                  backgroundImage: 'url("/img/tp6.jpg")',
                                  mixBlendMode: 'multiply',
                                }}
                                className="col-12 col-md d-flex align-items-center justify-content-center"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End carousel*/}
                    </div>
                    <div className="col-1 d-flex align-items-center justify-content-center">
                      <a href="#carouselExampleIndicators" data-slide="next">
                        <div className="carousel-nav-icon2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 129 129"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of container */}
      </asection>

      <Footer />
    </>
  );
};

export default Cart;

// export default function Cart() {

//   if (cart?.totalQuantity > 0)
//     return (
//       <div className="w-full max-w-6xl mx-auto pb-12 grid md:grid-cols-2 md:items-start gap-8 md:gap-8 lg:gap-12">
//         <div className="flex-grow md:translate-y-4">
//           <CartLineItems linesObj={cart.lines} />
//         </div>
//         <div className="fixed left-0 right-0 bottom-0 md:sticky md:top-[65px] grid gap-6 p-4 md:px-6 md:translate-y-4 bg-gray-100 rounded-md w-full">
//           <CartSummary cost={cart.cost} />
//           <CartActions checkoutUrl={cart.checkoutUrl} />
//         </div>
//       </div>
//     );
//   return (
//     <div className="flex flex-col space-y-7 justify-center items-center md:py-8 md:px-12 px-4 py-6 h-screen">
//       <h2 className="whitespace-pre-wrap max-w-prose font-bold text-4xl">
//         Your cart is empty
//       </h2>
//       <Link
//         to="/"
//         className="inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none bg-black text-white w-full"
//       >
//         Continue shopping
//       </Link>
//     </div>
//   );
// }
