import { useCallback, useMemo, useState } from 'react';
import { validateAdminCredentials } from '../auth/validateAdminCredentials';
import { AuthContext } from './authContext';

const ADMIN_SESSION_KEY = 'aspAdminSession';

function readSession() {
  try {
    return sessionStorage.getItem(ADMIN_SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(readSession);

  const login = useCallback(async (username, password) => {
    const isValid = await validateAdminCredentials(username, password);
    if (!isValid) {
      return false;
    }
    try {
      sessionStorage.setItem(ADMIN_SESSION_KEY, '1');
    } catch {
      return false;
    }
    setAuthenticated(true);
    return true;
  }, []);

  const logout = useCallback(() => {
    try {
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
    } catch {
      /* ignore */
    }
    setAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      isAuthenticated: authenticated,
      login,
      logout,
    }),
    [authenticated, login, logout]
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}
