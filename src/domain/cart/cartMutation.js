import { findItemIndexById } from "./cartQuery";
import { calculateItemNewQuantity } from "./cartMath";
import {
  validateQuantityLimit,
  validateItemAlreadyInCartByIndex,
} from "./cartValidator";

export function addItemToCart(item, cart) {
  const itemIndex = findItemIndexById(item.id, cart);
  validateItemAlreadyInCartByIndex(itemIndex, cart);
  return [...cart, { ...item, quantity: 1 }];
}

export function removeItemFromCart(itemId, cart) {
  return cart.filter(({ id }) => id !== itemId);
}

export function increaseItemQty(itemId, cart) {
  const itemIndex = findItemIndexById(itemId, cart);
  const cartCopy = [...cart];
  const newQuantity = calculateItemNewQuantity(
    cartCopy[itemIndex].quantity,
    "+",
    1,
  );
  cartCopy[itemIndex] = {
    ...cartCopy[itemIndex],
    quantity: newQuantity,
  }; // mutates selected item in cartCopy
  validateQuantityLimit(newQuantity);
  return cartCopy;
}

export function decreaseItemQty(itemId, cart) {
  const itemIndex = findItemIndexById(itemId, cart);
  const cartCopy = [...cart];
  const newQuantity = calculateItemNewQuantity(
    cartCopy[itemIndex].quantity,
    "-",
    1,
  );
  cartCopy[itemIndex] = {
    ...cartCopy[itemIndex],
    quantity: newQuantity,
  }; // mutates selected item in cartCopy
  validateQuantityLimit(newQuantity);
  return cartCopy;
}
