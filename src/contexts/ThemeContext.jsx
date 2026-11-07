import { createContext, useContext } from 'react';

const ThemeContext = createContext();

/* eslint-disable react/only-export-components */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider value={{ isDark: false, toggleTheme: () => {} }}>{children}</ThemeContext.Provider>;
};
