import { act, renderHook, waitFor } from '@testing-library/react';
import { useAsync } from './index';

describe('useAsync', () => {
  it('should handle successful async operation', async () => {
    const mockAsyncFunc = jest.fn().mockResolvedValue('success');
    const { result } = renderHook(() => useAsync(mockAsyncFunc));

    expect(result.current.status).toBe('idle');
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    act(() => {
      result.current.execute();
    });

    expect(result.current.status).toBe('pending');

    await waitFor(() => expect(result.current.status).toBe('success'));
    await waitFor(() => expect(result.current.data).toBe('success'));
    await waitFor(() => expect(result.current.error).toBe(null));
  });

  it('should handle failed async operation', async () => {
    const mockError = new Error('Async error');
    const mockAsyncFunc = jest.fn().mockRejectedValue(mockError);
    const { result } = renderHook(() => useAsync(mockAsyncFunc));

    act(() => {
      result.current.execute();
    });

    await waitFor(() => expect(result.current.status).toBe('error'));
    await waitFor(() => expect(result.current.data).toBe(null));
    await waitFor(() => expect(result.current.error).toBe(mockError));
  });
});
