import { useCallback, useEffect, useState } from 'react';
import { fetchProductionItems } from '../services/productionService';
import type { ProductionItem } from '../types/production';

export interface UseProductionState {
  items: ProductionItem[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useProduction(): UseProductionState {
  const [items, setItems] = useState<ProductionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    const result = await fetchProductionItems();

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

      const result = await fetchProductionItems();
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
