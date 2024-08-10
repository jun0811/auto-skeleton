import React from 'react';
import { useTheme } from '../themes/theme';

interface SkeletonProps {
  width?: string;
  height?: string;
  animated?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '20px',
  animated = true,
}) => {
  const theme = useTheme();

  return (
    <div
      data-testid="skeleton"
      style={{
        width,
        height,
        backgroundColor: theme.skeleton.backgroundColor,
        borderRadius: '4px',
        animation: animated ? 'pulse 1.5s ease-in-out 0.5s infinite' : 'none',
      }}
    />
  );
};

// CSS-in-JS로 키프레임 애니메이션 정의
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);
