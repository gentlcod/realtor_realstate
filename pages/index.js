import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import localFont from "next/font/local";
import { baseUrl, fetchApi } from "@/utils/fetchApi";
import Property from "@/components/Property";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Banner = function({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) {
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      py="5rem"
      maxWidth="1200px"
      m="0 auto"
    >
      <Image src={imageUrl} width={500} height={300} alt="banner" style={{ width: 'auto', height: 'auto' }} priority />
      <Box p="5">
        <Text fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1}
          <br />
          {title2}
        </Text>
        <Text fontSize="lg" pb="3" pt="3">
          {desc1}
          <br />
          {desc2}
        </Text>
        <Button fontSize="xl">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <Box p="0 5rem">
        <Banner
          purpose="RENT A HOME"
          title1="Rental Homes for"
          title2="Everyone"
          desc1=" Explore from Apartments, builder floors, villas"
          desc2="and more"
          buttonText="Explore Renting"
          linkName="/search?purpose=for-rent"
          overflow="hidden" borderRadius="10px"
          priority
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        />
        <Flex flexWrap="wrap" justifyContent="center">
          {propertiesForRent.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>

        <Banner
          purpose="BUY A HOME"
          title1=" Find, Buy & Own Your"
          title2="Dream Home"
          desc1=" Explore from Apartments, land, builder floors,"
          desc2=" villas and more"
          buttonText="Explore Buying"
          linkName="/search?purpose=for-sale"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
          priority
        />

        <Flex flexWrap="wrap" justifyContent="center">
          {propertiesForSale.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
      </Box>
    </div>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits
    },
  };
}
