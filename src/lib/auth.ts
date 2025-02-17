import { createContext, useContext } from 'react';
import { supabase } from './supabase';
import type { Profile } from './types';

export async function signUp(email: string, password: string, role: 'user' | 'organizer', fullName: string) {
  const { data: auth, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) throw signUpError;

  if (auth.user) {
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: auth.user.id,
        username: email.split('@')[0],
        full_name: fullName,
        role: role,
      });

    if (profileError) throw profileError;
  }

  return auth;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data as Profile;
}

interface AuthContextType {
  user: Profile | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);