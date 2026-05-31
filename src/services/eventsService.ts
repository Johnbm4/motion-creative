import type { Event } from '../types/event';
import { getSupabase } from '../lib/supabase';

export type EventsServiceResult =
  | { data: Event[]; error: null }
  | { data: null; error: string };

function mapRow(row: Record<string, unknown>): Event {
  return {
    id: String(row.id),
    title: String(row.title),
    date: String(row.date),
    location: String(row.location),
    description: String(row.description),
    status: row.status as Event['status'],
    marketing_url: row.marketing_url ? String(row.marketing_url) : null,
  };
}

export async function fetchEvents(): Promise<EventsServiceResult> {
  const supabase = getSupabase();
  if (!supabase) {
    return {
      data: null,
      error:
        'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env',
    };
  }

  const { data, error } = await supabase
    .from('events')
    .select('id, title, date, location, description, status, marketing_url')
    .order('date', { ascending: true });

  if (error) {
    return { data: null, error: error.message };
  }

  return { data: (data ?? []).map(mapRow), error: null };
}
