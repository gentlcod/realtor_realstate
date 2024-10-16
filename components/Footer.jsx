import React from 'react'
import { Box } from '@chakra-ui/react'

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <Box
    textAlign='center'
    p='5'
    px='6.5rem'
    color='gray.600'
    borderTop='1px'
    borderColor='gray.100'
    >
      &copy;{year} Realtor, Inc.
    </Box>
  )
}

export default Footer
