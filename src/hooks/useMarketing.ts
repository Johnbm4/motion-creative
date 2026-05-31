import { useCallback, useEffect, useState } from 'react';
import { fetchMarketingItems } from '../services/marketingService';
import type { MarketingItem } from '../types/marketing';

export interface UseMarketingState {
  items: MarketingItem[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useMarketing(): UseMarketingState {
  const [items, setItems] = useState<MarketingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    const result = await fetchMarketingItems();

    if (result.error) {
      setItems([]);
      setError(result.error);
    } else {
      setItems(result.data ?? []);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setLoading(true);
      setError(null);

      const result = await fetchMarketingItems();
      if (cancelled) return;

      if (result.error) {
        setItems([]);
        setError(result.error);
      } else {
        setItems(result.data ?? []);
      }

      setLoading(false);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { items, loading, error, refetch: load };
}
