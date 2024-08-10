import React from 'react';
import { render, screen } from '@testing-library/react';
import { Skeleton } from '../components/Skeleton';
import { ThemeProvider } from './theme';

describe('Theme', () => {
  it('applies default theme to Skeleton', () => {
    render(
      <ThemeProvider>
        <Skeleton />
      </ThemeProvider>,
    );
    const skeletonElement = screen.getByTestId('skeleton');
    expect(skeletonElement).toHaveStyle('background-color: #e0e0e0');
  });

  it('applies custom theme to Skeleton', () => {
    const customTheme = {
      skeleton: {
        backgroundColor: '#beb9eb',
      },
    };
    render(
      <ThemeProvider theme={customTheme}>
        <Skeleton />
      </ThemeProvider>,
    );
    const skeletonElement = screen.getByTestId('skeleton');
    expect(skeletonElement).toHaveStyle('background-color: #beb9eb');
  });
});
