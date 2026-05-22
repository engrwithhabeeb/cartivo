export function mapProductErrorToMessage(error) {
  if (!error) return null;

  switch (error?.type) {
    case "PRODUCT_OFFLINE":
      return "It looks like you are offline. Please check your internet connection and try again.";
    case "PRODUCT_FETCH_FAILED":
      return "We are having trouble loading the products right now. Please try reloading.";
    case "PRODUCT_MAPPING_FAILED":
      return "We encountered an issue displaying these products. Our team has been notified.";
    default:
      return "Something unexpected went wrong. Please try again later.";
  }
}
