import { getSupabase } from '../supabaseClient';
import type { ProductionItem } from '../types/production';

export type ProductionServiceResult =
  | { data: ProductionItem[]; error: null }
  | { data: null; error: string };

function mapRow(row: Record<string, unknown>): ProductionItem {
  return {
    id: String(row.id),
    title: String(row.title),
    category: String(row.category),
    description: String(row.description),
    image_url: String(row.image_url),
    status: row.status as ProductionItem['status'],
  };
}

export async function fetchProductionItems(): Promise<ProductionServiceResult> {
  const supabase = getSupabase();
  if (!supabase) {
    return {
      data: null,
      error:
        'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env',
    };
  }

  const { data, error } = await supabase
    .from('production')
    .select('id, title, category, description, image_url, status')
    .order('created_at', { ascending: false });

  if (error) {
    return { data: null, error: error.message };
  }

  return { data: (data ?? []).map(mapRow), error: null };
}
