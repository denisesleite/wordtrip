import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { Tooltip, useMediaQuery } from '@chakra-ui/react'
import { Box, Container, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { Card } from "../../components/Card";

type QuantitiesProps = {
  countries: number;
  languages: number;
  cities: number;
}

type CountriesProps = {
  name: string;
  city: string;
  image: string;
  flag: string;
}

type ContinentProps = {
  id: string;
  name: string;
  title: string;
  image: string;
  countries: Array<CountriesProps>;
  description: string;
  quantities: QuantitiesProps
}

export default function Continent () {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')
  const { pathname } = useLocation();
  const idContinent = pathname[pathname.length - 1];
  const [continent, setContinent] = useState<ContinentProps>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:3000/continents/${idContinent}`);
      const json = await data.json();
      setContinent(json)
    }

    fetchData()
  }, [idContinent])

  return (
    <>
      <Header />
      
      <Flex position="relative" align="flex-end">
        <Text as="h1" css={{ position: 'absolute' }} padding={8} fontSize={['2xl', '_', '5xl']} color="white" fontWeight="bold">{continent?.title}</Text>
        <Image src={continent?.image} w="100%" h={["150px", '_', "500px"]} objectFit="cover" />
      </Flex>

      <Container maxW="1440px">
        <Grid templateColumns={['repeat(1, 1fr)', '_', 'repeat(2, 1fr)']} gap={6} py={[8, 12]}>
          <GridItem>
            <Text color="heading.dark" fontSize={['md', 'xl']}>
              {continent?.description}
            </Text>
          </GridItem>

          <GridItem>
            <Flex justifyContent={["space-between", "space-around"]}>
              <Box textAlign={["left", "center"]}>
                <Text textStyle="styleQuantities">{continent?.quantities.countries}</Text>
                <Text as="span" textStyle="styleTextQuantities">países</Text>
              </Box>

              <Box textAlign={["left", "center"]}>
                <Text textStyle="styleQuantities">{continent?.quantities.languages}</Text>
                <Text as="span" textStyle="styleTextQuantities">línguas</Text>
              </Box>

              <Box textAlign={["left", "center"]}>
                <Text textStyle="styleQuantities">{continent?.quantities.cities}</Text>
                <Flex align="center">
                  <Text as="span" textStyle="styleTextQuantities" mr={2}>
                    cidades +100
                  </Text>
                  {isLargerThan1024 && <Tooltip label="Veja mais opções de cidades abaixo" aria-label='Tooltip para as cidades' placement="top">
                    <Text as="span" cursor="pointer">
                      <FiAlertCircle size={18} color="lightgray" />
                    </Text>
                  </Tooltip>}
                </Flex>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      
        <Box mb={4}>
          <Text as="h2" color="heading.dark" fontSize={['2xl', '_', '4xl']} fontWeight="500">Cidades +100</Text>
        </Box>

        {continent?.countries && <Card countries={continent.countries} />}
      </Container>
    </>
  )
}