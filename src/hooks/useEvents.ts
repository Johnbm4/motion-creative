import { useCallback, useEffect, useState } from 'react';
import { fetchEvents } from '../services/eventsService';
import type { Event } from '../types/event';

export interface UseEventsState {
  events: Event[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useEvents(): UseEventsState {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    const result = await fetchEvents();

    if (result.error) {
      setEvents([]);
      setError(result.error);
    } else {
      setEvents(result.data ?? []);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setLoading(true);
      setError(null);

      const result = await fetchEvents();
      if (cancelled) return;

      if (result.error) {
        setEvents([]);
        setError(result.error);
      } else {
        setEvents(result.data ?? []);
      }

      setLoading(false);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { events, loading, error, refetch: load };
}
