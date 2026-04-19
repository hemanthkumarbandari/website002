import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let client;

/**
 * Shared browser client. Returns null when env vars are missing.
 */
export function getSupabaseClient() {
  if (!url || !anonKey) {
    return null;
  }
  if (!client) {
    client = createClient(url, anonKey);
  }
  return client;
}

export const CONTACT_SUBMISSIONS_TABLE = 'contact_submissions';
