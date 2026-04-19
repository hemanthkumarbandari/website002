import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, LogOut } from 'lucide-react';
import ASPlogo from '../../../ASPlogo.jpg';
import { useAuth } from '../../context/useAuth';
import { mapSubmissionRowToCustomer } from '../../lib/contactSubmissionRow';
import {
  CONTACT_SUBMISSIONS_TABLE,
  getSupabaseClient,
} from '../../lib/supabaseClient';

const Admin = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [customers, setCustomers] = useState([]);
  const [submissionsLoading, setSubmissionsLoading] = useState(() =>
    Boolean(getSupabaseClient())
  );
  const [submissionsError, setSubmissionsError] = useState(() =>
    getSupabaseClient()
      ? ''
      : 'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.'
  );

  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) {
      return undefined;
    }

    let cancelled = false;

    const load = async () => {
      setSubmissionsLoading(true);
      setSubmissionsError('');
      const { data, error } = await supabase
        .from(CONTACT_SUBMISSIONS_TABLE)
        .select('*')
        .order('created_at', { ascending: false });

      if (cancelled) return;

      if (error) {
        setSubmissionsError(error.message || 'Could not load submissions.');
        setCustomers([]);
      } else {
        setCustomers((data || []).map(mapSubmissionRowToCustomer));
      }
      setSubmissionsLoading(false);
    };

    load();

    const channel = supabase
      .channel('contact_submissions_realtime')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: CONTACT_SUBMISSIONS_TABLE,
        },
        (payload) => {
          if (payload.eventType === 'INSERT' && payload.new) {
            const row = mapSubmissionRowToCustomer(payload.new);
            setCustomers((prev) => {
              if (prev.some((c) => c.id === row.id)) return prev;
              return [row, ...prev];
            });
          } else if (payload.eventType === 'UPDATE' && payload.new) {
            const row = mapSubmissionRowToCustomer(payload.new);
            setCustomers((prev) =>
              prev.map((c) => (c.id === row.id ? row : c))
            );
          } else if (payload.eventType === 'DELETE' && payload.old?.id) {
            const removedId = payload.old.id;
            setCustomers((prev) => prev.filter((c) => c.id !== removedId));
          }
        }
      )
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, []);

  const updateStatus = async (id, newStatus) => {
    const supabase = getSupabaseClient();
    if (!supabase) return;

    const previous = customers;
    setCustomers((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
    );

    const { error } = await supabase
      .from(CONTACT_SUBMISSIONS_TABLE)
      .update({ status: newStatus })
      .eq('id', id);

    if (error) {
      setCustomers(previous);
      setSubmissionsError(error.message || 'Could not update status.');
    }
  };

  const displayedCustomers = customers.filter(c => {
    if (activeTab === 'dashboard') return true;
    if (activeTab === 'approved') return c.status === 'approved';
    if (activeTab === 'pending') return c.status === 'pending';
    if (activeTab === 'rejected') return c.status === 'rejected';
    return false;
  });

  const counts = {
    total: customers.length,
    approved: customers.filter(c => c.status === 'approved').length,
    pending: customers.filter(c => c.status === 'pending').length,
    rejected: customers.filter(c => c.status === 'rejected').length,
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="font-montserrat bg-gradient-to-br from-slate-50 via-indigo-50/40 to-purple-50/40 min-h-screen flex flex-col">
      <header className="flex-shrink-0 flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-indigo-900/10 bg-white/60 backdrop-blur-xl">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-gray-700 hover:bg-white/80 border border-transparent hover:border-indigo-100 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back
        </button>
        <button
          type="button"
          onClick={handleLogout}
          className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-sm hover:shadow-md transition-shadow"
        >
          <LogOut className="h-4 w-4" aria-hidden />
          Logout
        </button>
      </header>
      <div className="flex flex-1 min-h-0 w-full">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0 py-10 pl-6 pr-4 border-r border-indigo-900/10 hidden md:block bg-white/40 backdrop-blur-xl shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10">
              <div className="pl-4 mb-12">
                  <img src={ASPlogo} alt="ASP Logo" className="h-16 object-contain mix-blend-multiply" />
              </div>

              {/* Menu */}
              <div className="flex flex-col space-y-4 text-gray-500 font-medium">

                  <a 
                      className={`flex items-center space-x-3 py-3 px-4 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-gradient-to-r from-indigo-50 to-white/50 text-indigo-700 font-bold border-l-4 border-indigo-600 shadow-sm' : 'hover:bg-white/50 hover:text-indigo-600'}`} 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); setActiveTab('dashboard'); }}
                  >
                      <svg className={`h-5 w-5 ${activeTab === 'dashboard' ? 'stroke-indigo-600' : 'stroke-gray-400 group-hover:stroke-indigo-600'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                      </svg>
                      <span>Dashboard</span>
                  </a>
                  
                  <a 
                      className={`flex items-center space-x-3 py-3 px-4 rounded-xl transition-all ${activeTab === 'approved' ? 'bg-gradient-to-r from-emerald-50 to-white/50 text-emerald-700 font-bold border-l-4 border-emerald-600 shadow-sm' : 'hover:bg-white/50 hover:text-emerald-600 group'}`} 
                      href="#approved" 
                      onClick={(e) => { e.preventDefault(); setActiveTab('approved'); }}
                  >
                      <svg className={`h-5 w-5 ${activeTab === 'approved' ? 'stroke-emerald-600' : 'stroke-gray-400 group-hover:stroke-emerald-600'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                      <span>Approved</span>
                  </a>
                  
                  <a 
                      className={`flex items-center space-x-3 py-3 px-4 rounded-xl transition-all ${activeTab === 'pending' ? 'bg-gradient-to-r from-amber-50 to-white/50 text-amber-700 font-bold border-l-4 border-amber-600 shadow-sm' : 'hover:bg-white/50 hover:text-amber-600 group'}`} 
                      href="#pending" 
                      onClick={(e) => { e.preventDefault(); setActiveTab('pending'); }}
                  >
                      <svg className={`h-5 w-5 ${activeTab === 'pending' ? 'stroke-amber-600' : 'stroke-gray-400 group-hover:stroke-amber-600'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"></path>
                      </svg>
                      <span>Pending</span>
                  </a>

                  <a 
                      className={`flex items-center space-x-3 py-3 px-4 rounded-xl transition-all ${activeTab === 'rejected' ? 'bg-gradient-to-r from-rose-50 to-white/50 text-rose-700 font-bold border-l-4 border-rose-600 shadow-sm' : 'hover:bg-white/50 hover:text-rose-600 group'}`} 
                      href="#rejected" 
                      onClick={(e) => { e.preventDefault(); setActiveTab('rejected'); }}
                  >
                      <svg className={`h-5 w-5 ${activeTab === 'rejected' ? 'stroke-rose-600' : 'stroke-gray-400 group-hover:stroke-rose-600'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                      </svg>
                      <span>Rejected</span>
                  </a>

                  <a 
                      className={`flex items-center space-x-3 py-3 px-4 rounded-xl transition-all ${activeTab === 'settings' ? 'bg-gradient-to-r from-indigo-50 to-white/50 text-indigo-700 font-bold border-l-4 border-indigo-600 shadow-sm' : 'hover:bg-white/50 hover:text-indigo-600 group'}`} 
                      href="#"
                      onClick={(e) => { e.preventDefault(); setActiveTab('settings'); }}
                  >
                      <svg className={`h-5 w-5 ${activeTab === 'settings' ? 'stroke-indigo-600' : 'stroke-gray-400 group-hover:stroke-indigo-600'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span>Settings</span>
                  </a>
              </div>
          </aside>

          <main className="flex-1 py-10 px-8 relative z-0">
              <div className="text-3xl font-extrabold text-gray-800 mb-8 tracking-tight">
                  {activeTab === 'dashboard' && 'Overview'}
                  {activeTab === 'settings' && 'Settings'}
                  {activeTab === 'approved' && 'Approved Customers'}
                  {activeTab === 'pending' && 'Pending Customers'}
                  {activeTab === 'rejected' && 'Rejected Customers'}
              </div>

              {submissionsError ? (
                  <div className="mb-6 rounded-xl border border-rose-200 bg-rose-50/90 px-4 py-3 text-sm font-medium text-rose-800">
                      {submissionsError}
                  </div>
              ) : null}
              
              {activeTab === 'settings' ? (
                  <div className="bg-white/60 backdrop-blur-2xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 p-8 max-w-4xl">
                      <h2 className="text-xl font-bold text-gray-800 mb-8 border-b border-gray-200/50 pb-4">Profile Settings</h2>
                      
                      <div className="flex flex-col md:flex-row gap-10">
                          {/* Profile Picture */}
                          <div className="flex flex-col items-center space-y-4 w-full md:w-1/3">
                              <div className="relative group cursor-pointer">
                                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                  <img 
                                      src="https://ui-avatars.com/api/?name=Admin+User&background=4f46e5&color=fff&size=150" 
                                      alt="Admin Profile" 
                                      className="relative w-36 h-36 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                      <span className="bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md">Upload New</span>
                                  </div>
                              </div>
                              <div className="text-center">
                                  <h3 className="text-xl font-bold text-gray-800">Admin User</h3>
                                  <p className="text-sm font-medium text-indigo-500 uppercase tracking-wide mt-1">Administrator</p>
                              </div>
                          </div>

                          {/* Form Fields */}
                          <div className="w-full md:w-2/3 space-y-8">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div className="space-y-2">
                                      <label className="block text-sm font-bold text-gray-700">Full Name</label>
                                      <input type="text" defaultValue="Admin User" className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm" />
                                  </div>
                                  <div className="space-y-2">
                                      <label className="block text-sm font-bold text-gray-700">Email Address</label>
                                      <input type="email" defaultValue="admin@example.com" className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm" />
                                  </div>
                              </div>

                              <div className="pt-6 border-t border-gray-200/50">
                                  <h3 className="text-lg font-bold text-gray-800 mb-6">Security</h3>
                                  <div className="space-y-5">
                                      <div className="space-y-2">
                                          <label className="block text-sm font-bold text-gray-700">Current Password</label>
                                          <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm" />
                                      </div>
                                      <div className="space-y-2">
                                          <label className="block text-sm font-bold text-gray-700">New Password</label>
                                          <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm" />
                                      </div>
                                  </div>
                              </div>

                              <div className="flex justify-end pt-6">
                                  <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-200">
                                      Save Changes
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              ) : (
                  <>
                      {/* Summary Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                          <a href="#total" onClick={(e) => { e.preventDefault(); setActiveTab('dashboard'); }} className="group bg-white/50 backdrop-blur-md rounded-xl p-6 shadow-sm border border-white/40 border-t-4 border-t-indigo-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 relative overflow-hidden">
                              <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Total Customers</div>
                              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-600">{counts.total}</div>
                              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all"></div>
                          </a>
                          
                          <a href="#approved" onClick={(e) => { e.preventDefault(); setActiveTab('approved'); }} className="group bg-white/50 backdrop-blur-md rounded-xl p-6 shadow-sm border border-white/40 border-t-4 border-t-emerald-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 relative overflow-hidden">
                              <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Approved</div>
                              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-600">{counts.approved}</div>
                              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>
                          </a>

                          <a href="#pending" onClick={(e) => { e.preventDefault(); setActiveTab('pending'); }} className="group bg-white/50 backdrop-blur-md rounded-xl p-6 shadow-sm border border-white/40 border-t-4 border-t-amber-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 relative overflow-hidden">
                              <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Pending</div>
                              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-600">{counts.pending}</div>
                              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all"></div>
                          </a>

                          <a href="#rejected" onClick={(e) => { e.preventDefault(); setActiveTab('rejected'); }} className="group bg-white/50 backdrop-blur-md rounded-xl p-6 shadow-sm border border-white/40 border-t-4 border-t-rose-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all duration-300 relative overflow-hidden">
                              <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Rejected</div>
                              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-600">{counts.rejected}</div>
                              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/20 transition-all"></div>
                          </a>
                      </div>

                      {/* Data Table */}
                      <section className="bg-white/60 backdrop-blur-2xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 overflow-hidden">
                          {/* Table Header */}
                          <div className="bg-white/40 px-8 py-5 flex items-center gap-x-4 text-xs font-black uppercase tracking-wider text-gray-500 border-b border-gray-200/50">
                              <div className="text-left w-12">S.no</div>
                              <div className="text-left w-36">Name</div>
                              <div className="text-left w-64">Email</div>
                              <div className="text-left flex-1">Message</div>
                              <div className="text-left flex-1">Products</div>
                              <div className="text-center w-72">Actions</div>
                          </div>

                          {/* Table Body */}
                          <div className="text-sm text-gray-700 divide-y divide-gray-100/50">
                              {submissionsLoading ? (
                                  <div className="px-8 py-10 text-center text-gray-500 font-medium">
                                      Loading submissions…
                                  </div>
                              ) : displayedCustomers.length === 0 ? (
                                  <div className="px-8 py-10 text-center text-gray-500 font-medium">
                                      No customers found in this category.
                                  </div>
                              ) : (
                                  displayedCustomers.map((customer, index) => (
                                      <div key={customer.id} className="flex items-center gap-x-4 px-8 py-5 hover:bg-white/50 transition-colors duration-200">
                                          <div className="text-left w-12 font-bold text-gray-400">{(index + 1).toString().padStart(2, '0')}</div>
                                          <div className="text-left w-36 font-bold text-gray-800">{customer.name}</div>
                                          <div className="text-left w-64 truncate text-gray-500">{customer.email}</div>
                                          <div className="text-left flex-1 truncate text-gray-600">{customer.message}</div>
                                          <div className="text-left flex-1">
                                              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${customer.productClass}`}>
                                                  {customer.product}
                                              </span>
                                          </div>
                                          <div className="text-center w-72 flex justify-center space-x-2">
                                              {activeTab === 'dashboard' && customer.status !== 'new' ? (
                                                  <button disabled className={`px-4 py-2 rounded-xl shadow-sm text-xs font-bold opacity-80 cursor-not-allowed ${
                                                      customer.status === 'approved' ? 'bg-gradient-to-b from-emerald-400 to-emerald-500 text-white' :
                                                      customer.status === 'pending' ? 'bg-gradient-to-b from-amber-400 to-amber-500 text-white' :
                                                      'bg-gradient-to-b from-rose-400 to-rose-500 text-white'
                                                  }`}>
                                                      {customer.status === 'approved' ? 'Approved' : customer.status === 'pending' ? 'Pending' : 'Deleted'}
                                                  </button>
                                              ) : (
                                                  <>
                                                      {(customer.status === 'new' || customer.status === 'pending') && (
                                                          <button onClick={() => updateStatus(customer.id, 'approved')} className="px-4 py-2 rounded-xl bg-gradient-to-b from-emerald-400 to-emerald-500 text-white hover:from-emerald-500 hover:to-emerald-600 shadow-sm hover:shadow text-xs font-bold transition-all">Confirm</button>
                                                      )}
                                                      {customer.status !== 'pending' && (
                                                          <button onClick={() => updateStatus(customer.id, 'pending')} className="px-4 py-2 rounded-xl bg-gradient-to-b from-amber-400 to-amber-500 text-white hover:from-amber-500 hover:to-amber-600 shadow-sm hover:shadow text-xs font-bold transition-all">Pending</button>
                                                      )}
                                                      {(customer.status === 'new' || customer.status === 'pending') && (
                                                          <button onClick={() => updateStatus(customer.id, 'rejected')} className="px-4 py-2 rounded-xl bg-gradient-to-b from-rose-400 to-rose-500 text-white hover:from-rose-500 hover:to-rose-600 shadow-sm hover:shadow text-xs font-bold transition-all">Delete</button>
                                                      )}
                                                  </>
                                              )}
                                          </div>
                                      </div>
                                  ))
                              )}
                          </div>
                      </section>
                  </>
              )}


          </main>
      </div>
    </div>
  );
};

export default Admin;
