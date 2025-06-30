import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types matching your actual schema
export interface QuizQuestion {
  id: number;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
}

export interface UserProfile {
  id: string;
  email: string;
  password: string;
  phone_number: string;
  name: string;
  username: string;
  age: number;
  gender: string;
  location: string;
  nationality: string;
  pro_user: boolean;
  badges: any;
  quiz_data: any;
  startup_result: any;
  created_at: string;
}