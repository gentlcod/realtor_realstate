import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import {FiKey} from 'react-icons/fi'
 

const Navbar = () => {


  const [isSticky, setIsSticky] = useState(false);


  useEffect(function(){
    const handleScroll = function() {
      if(window.scrollY > 100) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    };

      // Adding event listener for scroll
      window.addEventListener('scroll', handleScroll);

      // Cleaning up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, [])

  return (
    <Flex
    p='2'
    px='6.5rem'
    borderBottom='1px'
    borderColor='gray.100'
    alignItems='center'
      position={isSticky ? 'fixed' : 'relative'}
      top={0}
      width='100%'
      backgroundColor='white'
      zIndex={1000}
      transition='all 0.3s ease-in-out'  // Smooth transition effect
      boxShadow={isSticky ? '0px 1px 3px rgba(0, 0, 0, 0.1)' : 'none'}
      
    >
      <Box
      fontSize='3xl'
      color='blue.400'
      fontWeight='bold'
      >
        <Link
        href='/'
        paddingLeft='2'
        >
        Realtor
        </Link>
      </Box>
      <Spacer/>
      <Box>
        <Menu>
          <MenuButton as={IconButton} icon={<FcMenu size={31}/>} variant='outlined' color='red.400 '/>
          <MenuList>

            <Link href='/' passHref>
            <MenuItem icon={<FcHome/>}>Home</MenuItem>
            </Link>

            <Link href='/search' passHref>
            <MenuItem icon={<BsSearch/>}>Search</MenuItem>
            </Link>

            <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
            </Link>

            <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  )
}

export default Navbar
