import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import millify from 'millify' // to minimize the price number or large numbers in general for ex example if the number is 190000 so instead is going to be 190k
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import defaultImage from '../public/assets/images/house.jpg'

const Property = ({property : {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID}}) => {
  return (
    <Link
    href={`/property/${externalID}`}
    passHref
    >
      <Flex
      flexWrap='wrap'
      width='420px'
      p='5'
      paddingTop='0'
      justifyContent='flex-start'
      cursor='pointer'
      >
        <Box>
            <Image
            src={coverPhoto ? coverPhoto.url : defaultImage}
            width={400}
            height={260}
            alt='house'
            />
        </Box>

        <Box w='full'>
            <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
            <Flex
            alignItems='center'
            >
                <Box paddingRight='3' color='green.400'>
                    {isVerified && (
                        <GoVerified/>
                    )}
                </Box>
                <Text
                fontWeight='bold'
                fontSize='lg'
                >
                    AED 
                    {millify(price)}
                    {rentFrequency && `/${rentFrequency}`}
                </Text>
            </Flex>
            <Box>
                <Avatar size='sm' src={agency?.logo?.url}></Avatar>
            </Box>
            </Flex>

            <Flex
            p='1'
            w='250px'
            color='blue.400'
            alignItems='center'
            justifyContent='space-between'
            >
                {rooms} <FaBed/> | {baths} <FaBath/> | {millify(area)} sqft {/* rendering the area in square feet */} <BsGridFill/>
            </Flex>
            <Text
            fontSize='lg'
            >
                {title.length > 30 ? `${title.substring(0, 30)}...` : title }
            </Text>
        </Box>

      </Flex>
    </Link>
  )
}

export default Property
