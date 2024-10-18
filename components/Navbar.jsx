import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'; // Use Chakra's built-in icon for better styling control
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const backgroundColor = useColorModeValue('white', 'gray.800'); // Light mode: white, Dark mode: gray
  const textColor = useColorModeValue('black', 'white'); // Light mode: black, Dark mode: white
  const menuIconColor = useColorModeValue('gray.600', 'gray.400'); // Color for the menu icon

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex
      p="2"
      px="6.5rem"
      borderBottom="1px"
      borderColor="gray.400"
      alignItems="center"
      position={isSticky ? 'fixed' : 'relative'}
      top={0}
      width="100%"
      backgroundColor={backgroundColor} // Dynamic background color
      color={textColor} // Dynamic text color
      zIndex={1000}
      transition="all 0.3s ease-in-out"
      boxShadow={isSticky ? '0px 1px 3px rgba(0, 0, 0, 0.1)' : 'none'}
    >
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" pl="2">
          Realtor
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon style={{fontSize: '25px'}}/>} // Use Chakra's icon for better control
            variant="outline"
            color={menuIconColor}  // Set menu icon color dynamically
          />
          <MenuList>
            <Link href="/" passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href="/search" passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
            <MenuItem>
              <ThemeToggle />
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
