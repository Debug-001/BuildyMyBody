import {CartForm} from '@shopify/hydrogen';

export default function ProductForm({variantId, custom = false, button}) {
  const lines = [{merchandiseId: variantId, quantity: 1}];

  return (
    <CartForm route="/cart" action={CartForm.ACTIONS.LinesAdd} inputs={{lines}}>
      {custom ? button : <button className="btn">Add to Cart</button>}
    </CartForm>
  );
}
