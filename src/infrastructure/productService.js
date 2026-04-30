const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok)
      return {
        ok: false,
        error: {
          type: "HTTP_ERROR",
          message: response.status,
        },
      };
    const data = await response.json();
    return { ok: true, data };
  } catch (error) {
    return {
      ok: false,
      error: {
        type: "NETWORK_FAILURE",
        message: error.message,
      },
    };
  }
}
