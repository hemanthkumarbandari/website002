import { useCallback, useState } from 'react';
import { QuoteProductsContext } from './QuoteProductsContext';

const QUOTE_PRODUCTS_STORAGE_KEY = 'quoteProducts';

const getStoredQuoteProducts = () => {
  try {
    const saved = localStorage.getItem(QUOTE_PRODUCTS_STORAGE_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const storeQuoteProducts = (products) => {
  localStorage.setItem(QUOTE_PRODUCTS_STORAGE_KEY, JSON.stringify(products));
};

export const QuoteProductsProvider = ({ children }) => {
  const [quoteProducts, setQuoteProducts] = useState(() => getStoredQuoteProducts());

  const addProduct = useCallback((productName) => {
    setQuoteProducts((prev) => {
      if (prev.includes(productName)) return prev;
      const updated = [...prev, productName];
      storeQuoteProducts(updated);
      return updated;
    });
  }, []);

  const removeProduct = useCallback((productName) => {
    setQuoteProducts((prev) => {
      const updated = prev.filter((p) => p !== productName);
      storeQuoteProducts(updated);
      return updated;
    });
  }, []);

  const isProductAdded = useCallback(
    (productName) => quoteProducts.includes(productName),
    [quoteProducts]
  );

  return (
    <QuoteProductsContext.Provider
      value={{
        quoteProducts,
        addProduct,
        removeProduct,
        isProductAdded,
        hasProducts: quoteProducts.length > 0,
      }}
    >
      {children}
    </QuoteProductsContext.Provider>
  );
};
