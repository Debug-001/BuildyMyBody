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
  console.log(cart);
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
        </div>
        {/* end of container */}
      </asection>

      <Footer />
    </>
  );
};

export default Cart;

// {
//     "id": "gid://shopify/Cart/c1-2ebcd576cecfa490ccf003b3bb3f36d5",
//     "checkoutUrl": "https://buildmybodytest.myshopify.com/cart/c/c1-2ebcd576cecfa490ccf003b3bb3f36d5",
//     "totalQuantity": 9,
//     "buyerIdentity": {
//         "countryCode": "US",
//         "customer": null,
//         "email": null,
//         "phone": null
//     },
//     "lines": {
//         "edges": [
//             {
//                 "node": {
//                     "id": "gid://shopify/CartLine/15c99f61-95e1-4eee-8c30-9b28c3ff298a?cart=c1-2ebcd576cecfa490ccf003b3bb3f36d5",
//                     "quantity": 7,
//                     "attributes": [],
//                     "cost": {
//                         "totalAmount": {
//                             "amount": "63.0",
//                             "currencyCode": "USD"
//                         },
//                         "amountPerQuantity": {
//                             "amount": "9.0",
//                             "currencyCode": "USD"
//                         },
//                         "compareAtAmountPerQuantity": null
//                     },
//                     "merchandise": {
//                         "id": "gid://shopify/ProductVariant/45792784089376",
//                         "availableForSale": true,
//                         "compareAtPrice": null,
//                         "price": {
//                             "currencyCode": "USD",
//                             "amount": "9.0"
//                         },
//                         "requiresShipping": true,
//                         "title": "Chocolate / 1lb",
//                         "image": {
//                             "id": "gid://shopify/ProductImage/42117652087072",
//                             "url": "https://cdn.shopify.com/s/files/1/0794/9395/5872/products/Main_589fc064-24a2-4236-9eaf-13b2bd35d21d.jpg?v=1690103536",
//                             "altText": "Top and bottom view of a snowboard. The top view shows abstract circles and lines in shades of teal.\n          The bottom view shows abstract circles and lines in shades of purple and blue with the text “SHOPIFY” in a\n          sans serif typeface on top.",
//                             "width": 1600,
//                             "height": 1600
//                         },
//                         "product": {
//                             "handle": "the-complete-snowboard",
//                             "title": "The Complete Snowboard",
//                             "id": "gid://shopify/Product/8456567423264"
//                         },
//                         "selectedOptions": [
//                             {
//                                 "name": "Flavor",
//                                 "value": "Chocolate"
//                             },
//                             {
//                                 "name": "Weight",
//                                 "value": "1lb"
//                             }
//                         ]
//                     }
//                 }
//             },
//             {
//                 "node": {
//                     "id": "gid://shopify/CartLine/6f85c509-4ff3-4c84-8eab-a39e5cf7a7bd?cart=c1-2ebcd576cecfa490ccf003b3bb3f36d5",
//                     "quantity": 1,
//                     "attributes": [],
//                     "cost": {
//                         "totalAmount": {
//                             "amount": "8.0",
//                             "currencyCode": "USD"
//                         },
//                         "amountPerQuantity": {
//                             "amount": "8.0",
//                             "currencyCode": "USD"
//                         },
//                         "compareAtAmountPerQuantity": null
//                     },
//                     "merchandise": {
//                         "id": "gid://shopify/ProductVariant/45733373804832",
//                         "availableForSale": true,
//                         "compareAtPrice": null,
//                         "price": {
//                             "currencyCode": "USD",
//                             "amount": "8.0"
//                         },
//                         "requiresShipping": true,
//                         "title": "Default Title",
//                         "image": {
//                             "id": "gid://shopify/ProductImage/42117652742432",
//                             "url": "https://cdn.shopify.com/s/files/1/0794/9395/5872/products/Main_9129b69a-0c7b-4f66-b6cf-c4222f18028a.jpg?v=1690103536",
//                             "altText": "Top and bottom view of a snowboard. The top view shows an illustration with varied outlined shapes\n          in black. The bottom view shows a black box character with an H pointing, and surrounded by black outlined\n          illustrative elements.",
//                             "width": 1600,
//                             "height": 1600
//                         },
//                         "product": {
//                             "handle": "the-multi-managed-snowboard",
//                             "title": "The Multi-managed Snowboard",
//                             "id": "gid://shopify/Product/8456567849248"
//                         },
//                         "selectedOptions": [
//                             {
//                                 "name": "Title",
//                                 "value": "Default Title"
//                             }
//                         ]
//                     }
//                 }
//             },
//             {
//                 "node": {
//                     "id": "gid://shopify/CartLine/6ed9c20e-e6f7-4f76-999a-baf2c373d251?cart=c1-2ebcd576cecfa490ccf003b3bb3f36d5",
//                     "quantity": 1,
//                     "attributes": [],
//                     "cost": {
//                         "totalAmount": {
//                             "amount": "11.0",
//                             "currencyCode": "USD"
//                         },
//                         "amountPerQuantity": {
//                             "amount": "11.0",
//                             "currencyCode": "USD"
//                         },
//                         "compareAtAmountPerQuantity": null
//                     },
//                     "merchandise": {
//                         "id": "gid://shopify/ProductVariant/45733373051168",
//                         "availableForSale": true,
//                         "compareAtPrice": null,
//                         "price": {
//                             "currencyCode": "USD",
//                             "amount": "11.0"
//                         },
//                         "requiresShipping": true,
//                         "title": "Default Title",
//                         "image": null,
//                         "product": {
//                             "handle": "the-minimal-snowboard",
//                             "title": "The Minimal Snowboard",
//                             "id": "gid://shopify/Product/8456567324960"
//                         },
//                         "selectedOptions": [
//                             {
//                                 "name": "Title",
//                                 "value": "Default Title"
//                             }
//                         ]
//                     }
//                 }
//             }
//         ]
//     },
//     "cost": {
//         "subtotalAmount": {
//             "currencyCode": "USD",
//             "amount": "82.0"
//         },
//         "totalAmount": {
//             "currencyCode": "USD",
//             "amount": "82.0"
//         },
//         "totalDutyAmount": null,
//         "totalTaxAmount": null
//     },
//     "note": "",
//     "attributes": [],
//     "discountCodes": []
// }
