import React, { createContext, useContext, ReactNode } from 'react';

interface SkeletonTheme {
  backgroundColor: string;
}

interface Theme {
  skeleton: SkeletonTheme;
}

const defaultTheme: Theme = {
  skeleton: {
    backgroundColor: '#e0e0e0',
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

interface ThemeProviderProps {
  theme?: Partial<Theme>;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme = {}, children }) => {
  const mergedTheme = { ...defaultTheme, ...theme };
  return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
