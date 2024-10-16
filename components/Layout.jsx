import React from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({children}) => {
  return (
    <>

    <Head>
      <title>Realtor Real-State</title>
    </Head>

    <Box
    m='auto'
    maxWidth='1820px'
    >
      <header>
        <Navbar />
      </header>

      <main>
        {children}
      </main>

      <footer>
        <Footer/>
      </footer>
    </Box>
      
    </>
  )
}

export default Layout
