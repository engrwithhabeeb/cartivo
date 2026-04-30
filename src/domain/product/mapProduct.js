export function mapProduct(rawProducts) {
  if (!Array.isArray(rawProducts)) throw new Error("Invalid product data");

  return rawProducts.map((product) => ({
    id: product.id,
    name: product.title,
    image: product.image ?? "",
    price: product.price,
    category: product.category,
    description: product.description,
  }));
}
