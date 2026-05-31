import { getSupabase } from '../supabaseClient';
import type { MarketingItem } from '../types/marketing';

export type MarketingServiceResult =
  | { data: MarketingItem[]; error: null }
  | { data: null; error: string };

function mapRow(row: Record<string, unknown>): MarketingItem {
  return {
    id: String(row.id),
    title: String(row.title),
    category: String(row.category),
    description: String(row.description),
    image_url: String(row.image_url),
    status: row.status as MarketingItem['status'],
  };
}

export async function fetchMarketingItems(): Promise<MarketingServiceResult> {
  const supabase = getSupabase();
  if (!supabase) {
    return {
      data: null,
      error:
        'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env',
    };
  }

  const { data, error } = await supabase
    .from('marketing')
    .select('id, title, category, description, image_url, status')
    .order('created_at', { ascending: false });

  if (error) {
    return { data: null, error: error.message };
  }

  return { data: (data ?? []).map(mapRow), error: null };
}
