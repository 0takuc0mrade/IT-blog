// useAuthActions.js
import { supabase } from '../supabaseClient';

export const login = async (email, password) => {
  const { error, session } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { error, session };
};

export const signup = async (email, password) => {
  const { error, user } = await supabase.auth.signUp({ email, password });
  return { error, user };
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};
