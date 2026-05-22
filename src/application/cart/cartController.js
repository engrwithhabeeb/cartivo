import {
  addItemToCart,
  removeItemFromCart,
  increaseItemQty,
  decreaseItemQty,
} from "../../domain/cart/cartMutation";

import {
  validateCartIsArray,
  validateItemIsRealObject,
} from "../../domain/cart/cartValidator";

import {
  getCartSummary as domainGetCartSummary,
  getItemTotal as domainGetItemTotal,
} from "../../domain/cart/cartQuery";

export function handleAddItem(item, cart) {
  try {
    validateCartIsArray(cart);
    validateItemIsRealObject(item);
    const updatedCart = addItemToCart(item, cart);
    return {
      ok: true,
      updatedCart,
      error: null,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
}

export function handleRemoveItem(itemId, cart) {
  try {
    validateCartIsArray(cart);
    const updatedCart = removeItemFromCart(itemId, cart);
    return {
      ok: true,
      updatedCart,
      error: null,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
}

export function handleItemQtyIncrement(itemId, cart) {
  try {
    validateCartIsArray(cart);
    const updatedCart = increaseItemQty(itemId, cart);
    return {
      ok: true,
      updatedCart,
      error: null,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
}

export function handleItemQtyDecrement(itemId, cart) {
  try {
    validateCartIsArray(cart);
    const updatedCart = decreaseItemQty(itemId, cart);
    return {
      ok: true,
      updatedCart,
      error: null,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
}

export function getCartSummary(cart) {
  return domainGetCartSummary(cart);
}

export function getItemTotal(item) {
  return domainGetItemTotal(item);
}
