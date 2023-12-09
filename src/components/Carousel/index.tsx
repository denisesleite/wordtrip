import { useEffect, useState } from "react";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";

type ContinentProps = {
  id: string;
  name: string;
  title: string;
  image: string;
  countries: Array<string>
}

export default function Carousel () {
  const [continents, setContinents] = useState<ContinentProps[]>([])
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:3000/continents');
      const json = await data.json();
      setContinents(json)
    }

    fetchData()
  }, [])

  return (
    <Container maxW="1440px" mt={8} mb={8}>
      <Text as="h2" align="center" fontSize={['20px', '_', '4xl']} color="heading.dark">
        Vamos nessa?<br />
        Então escolha seu continente
      </Text>

      <Box mt={8}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination
          navigation
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {continents.map(continent => (
            <SwiperSlide key={continent.id}>
              <Link to={`continent/${continent.id}`}>
                <Flex align="center" justifyContent="center" position="relative">
                  <Text as="h1" css={{ position: 'absolute' }} fontSize={['24px', '_', '5xl']} color="white" fontWeight="bold">{continent.title}</Text>
                  <Image src={continent.image} w="100%" h={["250px", "600px"]} objectFit="cover" />
                </Flex>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  )
}