/**
 * Thin wrapper that reads from the shared QuoteProductsContext.
 * All existing page imports (`import { useQuoteProducts } from '../../hooks/useQuoteProducts'`)
 * continue to work without any changes.
 */
import { useContext } from 'react';
import { QuoteProductsContext } from '../context/QuoteProductsContext';

export const useQuoteProducts = () => {
  const ctx = useContext(QuoteProductsContext);
  if (!ctx) throw new Error('useQuoteProducts must be used inside QuoteProductsProvider');
  return ctx;
};
