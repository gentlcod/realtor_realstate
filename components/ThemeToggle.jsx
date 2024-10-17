import React, { useContext } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { ThemeContext } from '../context/ThemeContext'; // Use Chakra's context
import { Flex, Text } from '@chakra-ui/react';

const ThemeToggle = () => {
  const { theme, toggleColorMode } = useContext(ThemeContext); // Make sure you use Chakra's context

  return (
    <div>
      {theme === 'dark' ? (
        <Flex
          alignItems="center"
          fontSize="sm"
          cursor="pointer"
          onClick={toggleColorMode}
        >
          <HiSun style={{ fontSize: '24px', marginRight: '8px' }} />
          <Text>Light Mode</Text>
        </Flex>
      ) : (
        <Flex
          alignItems="center"
          fontSize="sm"
          cursor="pointer"
          onClick={toggleColorMode}
        >
          <HiMoon style={{ fontSize: '24px', marginRight: '12px' }} />
          <Text>Dark Mode</Text>
        </Flex>
      )}
    </div>
  );
};

export default ThemeToggle;
