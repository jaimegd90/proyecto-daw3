import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zawuaekqmgvjizjhqwey.supabase.co'; // Reemplaza con tu URL de Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inphd3VhZWtxbWd2aml6amhxd2V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4MDA5MjcsImV4cCI6MjA0NjM3NjkyN30.QPOFqqJul8Llx4nLhJEEOCJTNHq4_meyThK1yxf_ceE'; // Reemplaza con tu clave anónima
export const supabase = createClient(supabaseUrl, supabaseKey);

export const signInWithEmail = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data.user;
  };
  

export const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
};

export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return data.user;
};

export const getUserProfile = async () => {
  try {
    const user = supabase.auth.user()

    if (user) {

      const { data, error, status } = await supabase
        .from('profiles')
        .select('full_name, updated_at')
        .single()

      if (error && status === 406) {
        throw new Error('An error has ocurred')
      }

      return {
        username: data.full_name
      }
    }
  } catch (error) {
    console.log(error)
  }
}