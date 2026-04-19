const PRODUCT_CLASSES = [
  'bg-indigo-50 text-indigo-600',
  'bg-blue-50 text-blue-600',
  'bg-purple-50 text-purple-600',
  'bg-emerald-50 text-emerald-600',
  'bg-amber-50 text-amber-600',
];

function normalizeQuoteProducts(value) {
  if (Array.isArray(value)) {
    return value.filter((p) => typeof p === 'string');
  }
  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed)
        ? parsed.filter((p) => typeof p === 'string')
        : [];
    } catch {
      return [];
    }
  }
  return [];
}

function pickProductClass(quoteProducts) {
  const list = normalizeQuoteProducts(quoteProducts);
  const key = list.join('|');
  let n = 0;
  for (let i = 0; i < key.length; i += 1) {
    n = (n + key.charCodeAt(i)) % PRODUCT_CLASSES.length;
  }
  return PRODUCT_CLASSES[list.length ? n : 0];
}

/**
 * Map a Supabase row to the shape used by the admin UI.
 */
export function mapSubmissionRowToCustomer(row) {
  const products = normalizeQuoteProducts(row.quote_products);
  const product =
    products.length > 0 ? products.join(', ') : 'General inquiry';
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    message: row.message,
    product,
    productClass: pickProductClass(products),
    status: row.status || 'new',
  };
}
