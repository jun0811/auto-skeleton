import { useState, useCallback } from 'react';

type Status = 'idle' | 'pending' | 'success' | 'error';

export function useAsync<T, E = string>(asyncFunction: () => Promise<T>) {
  const [status, setStatus] = useState<Status>('idle');
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  const execute = useCallback(() => {
    setStatus('pending');
    setData(null);
    setError(null);

    return asyncFunction()
      .then((response) => {
        setData(response);
        setStatus('success');
      })
      .catch((error) => {
        setError(error);
        setStatus('error');
      });
  }, [asyncFunction]);

  return { execute, status, data, error };
}
