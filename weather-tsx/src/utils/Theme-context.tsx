import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface ThemeContextType {
  lightTheme: boolean;
  setLightTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create the provider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lightTheme, setLightTheme] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ lightTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};