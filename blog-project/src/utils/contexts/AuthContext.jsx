// AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userSession, setUserSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for an active session on initial load
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUserSession(session?.user ?? null);
      setLoading(false);
    };

    getSession();

    // Listen for session changes (login, logout, token refresh)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserSession(session?.user ?? null);
    });

    // Cleanup on unmount
    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ userSession, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
