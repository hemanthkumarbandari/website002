import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Lock, User } from 'lucide-react';
import ASPlogo from '../../../ASPlogo.jpg';
import { useAuth } from '../../context/useAuth';
import { isAdminAuthConfigured } from '../../auth/validateAdminCredentials';

const AdminLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const configured = isAdminAuthConfigured();
  const from = location.state?.from?.pathname;

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from && from !== '/admin/login' ? from : '/admin', {
        replace: true,
      });
    }
  }, [isAuthenticated, navigate, from]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    if (!configured) {
      setError(
        'Admin sign-in is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.'
      );
      setIsSubmitting(false);
      return;
    }
    if (!(await login(username, password))) {
      setError('Invalid username or password.');
      setIsSubmitting(false);
      return;
    }
    navigate(from && from !== '/admin/login' ? from : '/admin', {
      replace: true,
    });
    setIsSubmitting(false);
  };

  return (
    <div className="font-montserrat min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50/40 to-purple-50/40 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/80 p-8 md:p-10">
          <div className="flex flex-col items-center mb-8">
            <img
              src={ASPlogo}
              alt="ASP Logo"
              className="h-14 object-contain mix-blend-multiply mb-4"
            />
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Admin sign in
            </h1>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Enter your credentials to open the dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label
                htmlFor="admin-username"
                className="block text-xs font-bold uppercase tracking-wide text-gray-600"
              >
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="admin-username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="admin-password"
                className="block text-xs font-bold uppercase tracking-wide text-gray-600"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="admin-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                  required
                />
              </div>
            </div>

            {error ? (
              <p className="text-sm text-rose-600 font-medium bg-rose-50 border border-rose-100 rounded-xl px-3 py-2">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-200"
            >
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <button
            type="button"
            onClick={() => navigate('/', { replace: true })}
            className="mt-6 w-full text-center text-sm font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Back to website
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
