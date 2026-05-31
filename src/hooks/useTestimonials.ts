import { useCallback, useEffect, useState } from 'react';
import { fetchTestimonials } from '../services/testimonialsService';
import type { Testimonial } from '../types/testimonial';

export interface UseTestimonialsState {
  testimonials: Testimonial[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useTestimonials(): UseTestimonialsState {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    const result = await fetchTestimonials();

    if (result.error) {
      setTestimonials([]);
      setError(result.error);
    } else {
      setTestimonials(result.data ?? []);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setLoading(true);
      setError(null);

      const result = await fetchTestimonials();
      if (cancelled) return;

      if (result.error) {
        setTestimonials([]);
        setError(result.error);
      } else {
        setTestimonials(result.data ?? []);
      }

      setLoading(false);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { testimonials, loading, error, refetch: load };
}
