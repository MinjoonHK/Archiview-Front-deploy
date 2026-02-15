import { useEffect, useRef, useState } from 'react';

export const useMinLoading = (isLoading: boolean, minDurationMs = 1000) => {
  const [showLoading, setShowLoading] = useState(isLoading);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (isLoading) {
      startTimeRef.current = Date.now();
      setShowLoading(true);
    } else if (startTimeRef.current !== null) {
      const elapsed = Date.now() - startTimeRef.current;
      const remaining = minDurationMs - elapsed;

      if (remaining > 0) {
        const timer = setTimeout(() => setShowLoading(false), remaining);
        return () => clearTimeout(timer);
      } else {
        setShowLoading(false);
      }
    }
  }, [isLoading, minDurationMs]);

  return showLoading;
};
