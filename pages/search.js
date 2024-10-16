import { useState } from "react";
import { useRouter } from "next/router";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import { fetchApi, baseUrl } from "@/utils/fetchApi";
import Image from "next/image";
import SearchFilters from "@/components/SearchFilters";
import Property from "@/components/Property";
import noresult from '../public/assets/images/noresult.svg';

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      {/* Search Filters Toggle */}
      <Flex
        p='2'
        cursor='pointer'
        bg='gray.100'
        borderBottom='1px'
        borderColor='gray.200'
        fontWeight='black'
        fontSize='lg'
        justifyContent='center'
        alignItems='center'
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft='2' width='7' as={BsFilter} />
      </Flex>

      {/* Search Filters Component */}
      {searchFilters && <SearchFilters />}

      {/* Property List Title */}
      <Text
        p='4'
        fontWeight='bold'
        fontSize='2xl'
        textAlign='center' // Centering the title
      >
        Properties {router.query.purpose}
      </Text>

      {/* Properties Display */}
      <Flex
        flexWrap='wrap'
        justifyContent='center' // Centering the property cards
      >
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>

      {/* No Results Found */}
      {properties.length === 0 && (
        <Flex
          justifyContent='center'
          alignItems='center'
          flexDirection='column' // Correct flex direction for vertical alignment
          marginBottom='5'
          marginTop='5'
        >
          <Image src={noresult} alt="no result" />
          <Text
            marginTop='3'
            fontSize='2xl'
            textAlign='center' // Centering the no results message
          >
            No Results Found
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default Search;

// Server-side fetching of properties
export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

  return {
    props: {
      properties: data?.hits.slice(0, 24)
    },
  };
}
