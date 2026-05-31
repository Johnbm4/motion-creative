import { getSupabase } from '../supabaseClient';
import type { Testimonial } from '../types/testimonial';

export type TestimonialsServiceResult =
  | { data: Testimonial[]; error: null }
  | { data: null; error: string };

function mapRow(row: Record<string, unknown>): Testimonial {
  return {
    id: String(row.id),
    quote: String(row.quote),
    author_name: String(row.author_name),
    author_role: String(row.author_role),
    company: row.company ? String(row.company) : null,
    avatar_url: row.avatar_url ? String(row.avatar_url) : null,
  };
}

export async function fetchTestimonials(): Promise<TestimonialsServiceResult> {
  const supabase = getSupabase();
  if (!supabase) {
    return {
      data: null,
      error:
        'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env',
    };
  }

  const { data, error } = await supabase
    .from('testimonials')
    .select('id, quote, author_name, author_role, company, avatar_url')
    .order('created_at', { ascending: false });

  if (error) {
    return { data: null, error: error.message };
  }

  return { data: (data ?? []).map(mapRow), error: null };
}
