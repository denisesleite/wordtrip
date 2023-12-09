import { Box } from "@chakra-ui/react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import TravelTypes from "../../components/TravelTypes";
import Carousel from "../../components/Carousel";

export default function Home () {
  return (
    <>
      <Header />

      <Banner />

      <TravelTypes />

      <Box width="90px" borderColor="heading.dark" borderWidth="1px" m="auto" />

      <Carousel />
    </>
  )
}