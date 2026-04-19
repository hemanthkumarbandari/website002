/**
 * Client-side admin gate. For production, set VITE_ADMIN_USERNAME and
 * VITE_ADMIN_PASSWORD in your environment; values are visible in the bundle.
 */
export function getConfiguredAdminCredentials() {
  const fromEnv = {
    username: import.meta.env.VITE_ADMIN_USERNAME?.trim() ?? '',
    password: import.meta.env.VITE_ADMIN_PASSWORD?.trim() ?? '',
  };
  if (fromEnv.username && fromEnv.password) {
    return fromEnv;
  }
  if (import.meta.env.DEV) {
    return { username: 'admin', password: 'admin' };
  }
  return { username: '', password: '' };
}

export function validateAdminCredentials(username, password) {
  const expected = getConfiguredAdminCredentials();
  if (!expected.username || !expected.password) {
    return false;
  }
  return username === expected.username && password === expected.password;
}

export function isAdminAuthConfigured() {
  const { username, password } = getConfiguredAdminCredentials();
  return Boolean(username && password);
}
