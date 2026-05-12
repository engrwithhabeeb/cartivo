export function validateCartIsArray(cart) {
  if (!Array.Array(cart)) throw new Error("Invalid cart type");
}

export function validateItemIsRealObject(item) {
  if (item && Array.isArray(item)) throw new Error("Invalid item type");
}

export function validateQuantityLimit(quantity) {
  if (quantity < 1) throw new Error("Quantity must be at least 1.");

  if (quantity > 50) throw new Error("Max quantity of 50 reached.");
}

export function validateItemAlreadyInCartByIndex(itemIndex, cart) {
  if (itemIndex !== -1)
    throw new Error(`${cart[itemIndex].name} already in cart.`);
}
