import { Link, useLocation } from "react-router-dom";
import { Box, Container, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import logoImg from '../../assets/logo.svg'
import { FiChevronLeft } from "react-icons/fi";

export default function Header() {
  const { pathname } = useLocation();
  console.log('pathname', pathname)
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')

  const isMobile = pathname.includes('continent') && !isLargerThan1024
  console.log('isDesktop', isMobile)

  return (
    <Container maxW="1440px" py={5}>
      <Flex align="center" justify="center">
        {isMobile && (
          <Box mr="auto">
            <Link to="/">
              <FiChevronLeft size={16} />
            </Link>
          </Box>
        )}
        <Box mr={isMobile ? 'auto' : 'inherit'} textAlign="center">
          <Link to="/">
            <Image src={logoImg} alt="Logo" w={['81px', '185px']} />
          </Link>
        </Box>
      </Flex>
    </Container>
  )
}