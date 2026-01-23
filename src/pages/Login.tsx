import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Sparkles, ArrowRight } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const login = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }
    navigate("/challenges", { replace: true });
  };

  const signup = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) alert(error.message);
    else alert('📩 Check your email for verification');
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-black relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="w-full max-w-md relative z-10 px-6">
        {/* Glow effect container */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition duration-1000"></div>
          
          <div className="relative bg-zinc-900/90 backdrop-blur-2xl border border-zinc-800/50 rounded-2xl p-8 shadow-2xl">
            {/* Header with icon */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20 rotate-3 hover:rotate-0 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent mb-2">
                Welcome Back 👋
              </h2>
              <p className="text-zinc-400 text-center">
                Login or create your account
              </p>
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="text-sm text-zinc-400 font-medium flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4" />
                Email
              </label>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-800/50 text-white border border-zinc-700/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 placeholder:text-zinc-500"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-8">
              <label className="text-sm text-zinc-400 font-medium flex items-center gap-2 mb-2">
                <Lock className="w-4 h-4" />
                Password
              </label>
              <div className="relative group">
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-800/50 text-white border border-zinc-700/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 placeholder:text-zinc-500"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button
                onClick={login}
                disabled={loading}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    Logging in...
                  </>
                ) : (
                  <>
                    Login
                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                  </>
                )}
              </button>

              <button
                onClick={signup}
                disabled={loading}
                className="w-full py-3 rounded-xl border border-zinc-700/50 text-white hover:bg-zinc-800/50 hover:border-emerald-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group"
              >
                <span className="relative z-10">Create new account</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>

            {/* Decorative line */}
            <div className="mt-8 pt-6 border-t border-zinc-800/50">
              <p className="text-center text-xs text-zinc-500">
                Secured with end-to-end encryption 🔒
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}