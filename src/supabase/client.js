// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zawuaekqmgvjizjhqwey.supabase.co'; // Reemplaza con tu URL de Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inphd3VhZWtxbWd2aml6amhxd2V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4MDA5MjcsImV4cCI6MjA0NjM3NjkyN30.QPOFqqJul8Llx4nLhJEEOCJTNHq4_meyThK1yxf_ceE'; // Reemplaza con tu clave anónima
export const supabase = createClient(supabaseUrl, supabaseKey);
