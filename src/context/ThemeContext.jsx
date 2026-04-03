import React, { createContext, useContext, useState, useEffect } from 'react';

/* ── 1. Create context ── */
const ThemeContext = createContext(null);

/* ── 2. Helper: detect OS preference ── */
const getSystemTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

/* ── 3. Provider ── */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Priority: localStorage → system preference
    const saved = localStorage.getItem('theme-preference');
    return saved || getSystemTheme();
  });

  // Apply theme attribute and persist to localStorage whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme-preference', theme);
  }, [theme]);

  // Listen for OS-level theme changes (only applies when no saved preference)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const saved = localStorage.getItem('theme-preference');
      if (!saved) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/* ── 4. Custom hook ── */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
