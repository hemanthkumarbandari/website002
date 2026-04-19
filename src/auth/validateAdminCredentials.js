import {
  ADMIN_CREDENTIALS_TABLE,
  getSupabaseClient,
} from '../lib/supabaseClient';

export function isAdminAuthConfigured() {
  return Boolean(getSupabaseClient());
}

export async function validateAdminCredentials(username, password) {
  const supabase = getSupabaseClient();
  const normalizedUsername = username?.trim() ?? '';
  if (!supabase || !normalizedUsername || !password) {
    return false;
  }

  const { data, error } = await supabase
    .from(ADMIN_CREDENTIALS_TABLE)
    .select('username,password')
    .eq('username', normalizedUsername)
    .maybeSingle();

  if (error || !data) {
    return false;
  }

  return data.password === password;
}
