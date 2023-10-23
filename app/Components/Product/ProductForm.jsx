import { CartForm } from '@shopify/hydrogen';
import { useState } from 'react';

export default function ProductForm({ variantId, custom = false, button }) {
  const lines = [{ merchandiseId: variantId, quantity: 1 }];
  const [showAlert, setShowAlert] = useState(false);

  const showAlertAndDismiss = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  return (
    <CartForm route="/cart" action={CartForm.ACTIONS.LinesAdd} inputs={{ lines }}>
      {custom ? (
        button
      ) : (
        <button className="btn" onClick={showAlertAndDismiss}>
          Add to Cart
        </button>
      )}

      {showAlert && (
        <div className="cart-popup">
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <div className="cart-popup-content">
              <span className="product-thumbnail">
                {/* <img src="product-image.jpg" alt="Product Thumbnail" /> */}
              </span>
              <span className="message">Added To the Cart!</span>
            </div>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => setShowAlert(false)}
            >
              <span aria-hidden="true" className='cross'>&times;</span>
            </button>
          </div>
        </div>
      )}

    </CartForm>
  );
}
