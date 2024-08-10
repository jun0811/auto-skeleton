import React, { ReactDOM, ReactElement, useEffect } from 'react';
import { Skeleton } from './Skeleton';
import { useAsync } from '../core/useAsync';

interface AsyncSkeletonProps<T> {
  asyncFunction: () => Promise<T>;
  children: (data: T) => React.ReactNode | undefined;
  width?: string;
  height?: string;
}

export function AsyncSkeleton<T>({
  asyncFunction,
  children,
  width,
  height,
}: AsyncSkeletonProps<T>) {
  const { execute, status, data, error } = useAsync<T>(asyncFunction);

  useEffect(() => {
    execute();
  }, [execute]);

  if (status === 'pending') {
    return <Skeleton width={width} height={height} />;
  }

  if (status === 'error') {
    return <div>Error: {error}</div>;
  }

  if (status === 'success' && data) {
    return <>{children(data)}</>;
  }

  return null;
}
