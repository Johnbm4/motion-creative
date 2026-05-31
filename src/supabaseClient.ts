import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;

export function isSupabaseConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

/** Lazy init — avoids crashing the app when env vars are missing. */
export function getSupabase(): SupabaseClient | null {
  if (!isSupabaseConfigured()) {
    return null;
  }

  if (!client) {
    client = createClient(supabaseUrl!, supabaseAnonKey!);
  }

  return client;
}

/** @deprecated Use getSupabase() — kept for gradual migration. */
export const supabase = {
  from: (table: string) => {
    const instance = getSupabase();
    if (!instance) {
      throw new Error(
        'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env',
      );
    }
    return instance.from(table);
  },
};
