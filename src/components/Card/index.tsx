import { Box, Flex, Image, Text } from "@chakra-ui/react";

type CountriesProps = {
  name: string;
  city: string;
  image: string;
  flag: string;
}

type CardProps = {
  countries: Array<CountriesProps>
}

export const Card = ({ countries }: CardProps) => {
  return (
    <Flex gap={8} flexWrap="wrap" flexDir={['column', 'row']} mb={8} px={[12, 'auto']}>
      {countries.map(country => (
        <Box key={country.name} borderColor="highlight.50" borderWidth="1px" borderRadius="4px" width={["100%", "calc(20% + 2rem)"]}>
          <Image 
            src={country.image} 
            width="100%" 
            height="173px" 
            objectFit="cover"
            borderTopLeftRadius="4px"
            borderTopRightRadius="4px"
          />
          <Flex padding={4} justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontSize="xl" fontWeight="semibold" textStyle="styleCard">{country.name}</Text>
              <Text fontSize="md" fontWeight="medium" color="info.default" as="span" textStyle="styleCard">{country.city}</Text>
            </Box>
            <Image src={country.flag} width="30px" height="30px" objectFit="cover" rounded="50%" />
          </Flex>
        </Box>
      ))}
    </Flex>
  )
}