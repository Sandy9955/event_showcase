import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check if we're in demo mode (missing or placeholder values)
const isDemoMode =
  !supabaseUrl ||
  supabaseUrl === "your_supabase_url" ||
  !supabaseAnonKey ||
  supabaseAnonKey === "your_supabase_anon_key";

export function createClient() {
  if (isDemoMode) {
    // Return a mock client or null in demo mode
    return null;
  }

  return createSupabaseClient(supabaseUrl, supabaseAnonKey);
}

export function isSupabaseConfigured() {
  return !isDemoMode;
}
