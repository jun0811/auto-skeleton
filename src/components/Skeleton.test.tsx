import React from 'react';
import { render, screen } from '@testing-library/react';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('renders with default props', () => {
    render(<Skeleton />);
    const skeletonElement = screen.getByTestId('skeleton');
    expect(skeletonElement).toBeInTheDocument();
    expect(skeletonElement).toHaveStyle('width: 100%');
    expect(skeletonElement).toHaveStyle('height: 20px');
  });

  it('renders with custom width and height', () => {
    render(<Skeleton width="200px" height="50px" />);
    const skeletonElement = screen.getByTestId('skeleton');
    expect(skeletonElement).toHaveStyle('width: 200px');
    expect(skeletonElement).toHaveStyle('height: 50px');
  });

  it('applies animation when animated prop is true', () => {
    render(<Skeleton animated />);
    const skeletonElement = screen.getByTestId('skeleton');
    expect(skeletonElement).toHaveStyle('animation: pulse 1.5s ease-in-out 0.5s infinite');
  });

  it('does not apply animation when animated prop is false', () => {
    render(<Skeleton animated={false} />);
    const skeletonElement = screen.getByTestId('skeleton');
    expect(skeletonElement).not.toHaveStyle('animation: pulse 1.5s ease-in-out 0.5s infinite');
  });
});
