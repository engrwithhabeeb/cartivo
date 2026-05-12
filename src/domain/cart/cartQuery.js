import {
  calculateCartTotal,
  calculateItemTotal,
  calculateTotalItemInCart,
} from "./cartMath";

export function findItemIndexById(itemId, cart) {
  return cart.findIndex((item) => item.id === itemId);
}

export function getCartSummary(cart) {
  const cartCount = calculateTotalItemInCart(cart);
  const cartTotal = calculateCartTotal(cart);
  return { cartCount, cartTotal };
}

export function getItemTotal(item) {
  return calculateItemTotal(item);
}
