const OPERATION = {
  "+": (oldQuantity, incrementValue) => oldQuantity + incrementValue,
  "-": (oldQuantity, decrementValue) => oldQuantity - decrementValue,
};

export function calculateItemTotal(item) {
  return item.price * item.quantity;
}

export function calculateCartTotal(cart) {
  return cart.reduce((total, item) => {
    return total + calculateItemTotal(item);
  }, 0);
}

export function calculateTotalItemInCart(cart) {
  return cart.length;
}

export function calculateItemNewQuantity(oldQuantity, operator, value) {
  return OPERATION[operator]
    ? OPERATION[operator](oldQuantity, value)
    : oldQuantity;
}
