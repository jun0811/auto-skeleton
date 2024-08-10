import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { AsyncSkeleton } from './AsyncSkeleton';

describe('AsyncSkeleton', () => {
  it('renders skeleton while loading', async () => {
    const mockAsyncFunc = () => new Promise((resolve) => setTimeout(() => resolve('data'), 100));

    render(
      <AsyncSkeleton asyncFunction={mockAsyncFunc}>
        {(data: any) => <div>{data}</div>}
      </AsyncSkeleton>,
    );

    expect(screen.getByTestId('skeleton')).toBeInTheDocument();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 150));
    });

    expect(screen.queryByTestId('skeleton')).not.toBeInTheDocument();
    expect(screen.getByText('data')).toBeInTheDocument();
  });

  it('renders error message on failure', async () => {
    const mockAsyncFunc = () => Promise.reject('Error occurred');

    render(
      <AsyncSkeleton asyncFunction={mockAsyncFunc}>{(data) => <div>{data}</div>}</AsyncSkeleton>,
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    expect(screen.queryByTestId('skeleton')).not.toBeInTheDocument();
    expect(screen.getByText('Error: Error occurred')).toBeInTheDocument();
  });
});
