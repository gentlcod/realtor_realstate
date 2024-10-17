import React, { createContext } from 'react';
import { useColorMode } from '@chakra-ui/react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode(); // Chakra UI hook

  return (
    <ThemeContext.Provider value={{ theme: colorMode, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
