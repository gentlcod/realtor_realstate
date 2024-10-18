import React from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useColorMode, Flex, Text } from '@chakra-ui/react';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      {colorMode === 'dark' ? (
        <Flex
          alignItems="center"
          fontSize="sm"
          cursor="pointer"
          onClick={toggleColorMode} // Toggle between dark/light
        >
          <HiSun style={{ fontSize: '24px', marginRight: '8px' }} />
          <Text>Light Mode</Text>
        </Flex>
      ) : (
        <Flex
          alignItems="center"
          fontSize="sm"
          cursor="pointer"
          onClick={toggleColorMode} // Toggle between light/dark
        >
          <HiMoon style={{ fontSize: '24px', marginRight: '12px' }} />
          <Text>Dark Mode</Text>
        </Flex>
      )}
    </div>
  );
};

export default ThemeToggle;
