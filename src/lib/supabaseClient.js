import { createClient } from '@supabase/supabase-js';

let supabaseUrl;
let supabaseAnonKey;

if (process.env.VITE_SUPABASE_URL && process.env.VITE_SUPABASE_ANON_KEY) {
	supabaseUrl = process.env.VITE_SUPABASE_URL;
	supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
} else {
	supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
	supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
