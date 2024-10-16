import React, {useState, useEffect} from 'react'
import { Flex, Select, Spinner, Icon, Button, Input, Text, Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {MdCancel} from 'react-icons/md'
import Image from 'next/image'

import {filterData, getFilterValues} from '../utils/filterData'

const SearchFilters = () => {

  const [filters, setFilters] = useState(filterData);
  const router = useRouter();
  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const {query} = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      query[item.name] = item.value
    })

    router.push({ pathname: path, query})


  }


  return (
    <Flex
    p='4'
    bg='gray.100'
    flexWrap='wrap'
    justifyContent='center'
    >
      {filters.map((filter) => (
      <Box key={filter.queryName}>
        <Select
        p='2'
        w='fit-content'
        placeholder={filter.placeholder}
        onChange={(e) => searchProperties({ [filter.queryName] : e.target.value})}
        >
          {filter?.items?.map((item) => (
            <option 
            key={item.value}
            value={item.value}
            >
              {item.name}
            </option>
          ))}
        </Select>
      </Box>
      )
    )}

    </Flex>
  )
}

export default SearchFilters
