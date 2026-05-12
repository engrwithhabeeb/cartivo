export function validateCartIsArray(cart) {
  if (!Array.Array(cart)) throw new Error("Invalid cart type");
}

export function validateItemIsRealObject(item) {
  if (item && Array.isArray(item)) throw new Error("Invalid item type");
}
