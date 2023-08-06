import {CartForm} from '@shopify/hydrogen';

export default function ProductForm({variantId}) {
  const lines = [{merchandiseId: variantId, quantity: 1}];

  return (
    <CartForm route="/cart" action={CartForm.ACTIONS.LinesAdd} inputs={{lines}}>
      <button className="btn">Add to Cart</button>
    </CartForm>
  );
}
