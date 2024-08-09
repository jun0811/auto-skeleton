import React from 'react';

interface SkeletonProps {
  width?: string;
  height?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ width = '100%', height = '20px' }) => {
  return (
    <div
      data-testid="skeleton"
      style={{
        width,
        height,
        backgroundColor: '#e0e0e0',
        borderRadius: '4px',
      }}
    />
  );
};
