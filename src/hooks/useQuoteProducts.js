import { useCallback, useState } from 'react';

const QUOTE_PRODUCTS_STORAGE_KEY = 'quoteProducts';

const getStoredQuoteProducts = () => {
  try {
    const savedProducts = localStorage.getItem(QUOTE_PRODUCTS_STORAGE_KEY);
    if (!savedProducts) {
      return [];
    }

    const parsedProducts = JSON.parse(savedProducts);
    return Array.isArray(parsedProducts) ? parsedProducts : [];
  } catch (error) {
    console.error('Unable to parse quote products from localStorage.', error);
    return [];
  }
};

const storeQuoteProducts = (products) => {
  localStorage.setItem(QUOTE_PRODUCTS_STORAGE_KEY, JSON.stringify(products));
};

export const useQuoteProducts = () => {
  const [quoteProducts, setQuoteProducts] = useState(() => getStoredQuoteProducts());

  const addProduct = useCallback((productName) => {
    setQuoteProducts((previousProducts) => {
      if (previousProducts.includes(productName)) {
        return previousProducts;
      }

      const updatedProducts = [...previousProducts, productName];
      storeQuoteProducts(updatedProducts);
      return updatedProducts;
    });
  }, []);

  const removeProduct = useCallback((productName) => {
    setQuoteProducts((previousProducts) => {
      const updatedProducts = previousProducts.filter((savedProduct) => savedProduct !== productName);
      storeQuoteProducts(updatedProducts);
      return updatedProducts;
    });
  }, []);

  const isProductAdded = useCallback(
    (productName) => quoteProducts.includes(productName),
    [quoteProducts]
  );

  return {
    quoteProducts,
    addProduct,
    removeProduct,
    isProductAdded,
    hasProducts: quoteProducts.length > 0
  };
};
