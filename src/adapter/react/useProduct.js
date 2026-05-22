import { useState, useEffect } from "react";
import { getProducts } from "../../application/product/getProduct";
import { mapProductErrorToMessage } from "../shared/product/mapProductErrorToMessage";

export default function useProduct() {
  const [fetchState, setFetchState] = useState({
    status: "loading",
    products: null,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;
    const loadProduct = async () => {
      const result = await getProducts();
      if (!isMounted) return;
      setFetchState({
        ...result,
        error: mapProductErrorToMessage(result.error),
      });
    };
    void loadProduct();
    return () => {
      isMounted = false;
    };
  }, []);
  const reloadProductOnFail = async () => {
    setFetchState({
      status: "loading",
      products: null,
      error: null,
    });
    const result = await getProducts();
    setFetchState({ ...result, error: mapProductErrorToMessage(result.error) });
  };
  return {
    fetchState,
    reloadProductOnFail,
  };
}
