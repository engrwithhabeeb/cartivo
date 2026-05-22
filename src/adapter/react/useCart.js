import { useState } from "react";

import {
  handleAddItem,
  handleRemoveItem,
  handleItemQtyIncrement,
  handleItemQtyDecrement,
  getCartSummary,
  getItemTotal as getSubTotal,
} from "../../application/cart/cartController";

export function useCart() {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  const { cartCount, cartTotal } = getCartSummary(cart);

  function onItemAddition(item) {
    const result = handleAddItem(item, cart);
    if (result.ok) {
      setCart(result.updatedCart);
      setError(null);
    } else setError(result.error);
  }

  function onItemRemoval(itemId) {
    const result = handleRemoveItem(itemId, cart);
    if (result.ok) {
      setCart(result.updatedCart);
      setError(null);
    } else setError(result.error);
  }

  function onQtyIncrement(itemId) {
    const result = handleItemQtyIncrement(itemId, cart);
    if (result.ok) {
      setCart(result.updatedCart);
      setError(null);
    } else setError(result.error);
  }

  function onQtyDecrement(itemId) {
    const result = handleItemQtyDecrement(itemId, cart);
    if (result.ok) {
      setCart(result.updatedCart);
      setError(null);
    } else setError(result.error);
  }

  function onGetItemTotal(item) {
    return getSubTotal(item);
  }

  return {
    cart,
    error,
    cartTotal,
    cartCount,
    onItemAddition,
    onItemRemoval,
    onQtyDecrement,
    onQtyIncrement,
    onGetItemTotal,
  };
}
