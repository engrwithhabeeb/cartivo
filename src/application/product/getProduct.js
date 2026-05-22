import { mapProduct } from "../../domain/product/mapProduct";
import { fetchProducts, logger } from "../../infrastructure/";
function mapServiceError(error) {
  logger.error(error.message);
  if (error.type === "NETWORK_FAILURE")
    return {
      status: "error",
      products: null,
      error: {
        type: "PRODUCT_OFFLINE",
      },
    };
  return {
    status: "error",
    products: null,
    error: {
      type: "PRODUCT_FETCH_FAILED",
    },
  };
}

function mapSuccess(data) {
  try {
    const mapped = mapProduct(data);
    return { status: "success", products: mapped, error: null };
  } catch (error) {
    logger.error(error.message);
    return {
      status: "error",
      products: null,
      error: { type: "PRODUCT_MAPPING_FAILED" },
    };
  }
}

async function getProducts() {
  const result = await fetchProducts();

  if (!result.ok) {
    return mapServiceError(result.error);
  }
  return mapSuccess(result.data);
}

export { getProducts };
