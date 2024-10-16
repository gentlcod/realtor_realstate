import React, { useState } from 'react';
import { Flex, Select, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { filterData, getFilterValues } from '../utils/filterData';

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if(item.value && filterValues?.[item.name]) {
      query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query });
  };

  return (
    <Flex
      p='4'
      px='5rem' // Adding padding left and right of 5rem
      bg='gray.100'
      flexWrap='wrap'
      justifyContent='center' // Centering the content
    >
      {filters.map((filter) => (
        <Box key={filter.queryName} m='2'>
          <Select
            p='2'
            w='fit-content'
            placeholder={filter.placeholder}
            onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
          >
            {filter?.items?.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
