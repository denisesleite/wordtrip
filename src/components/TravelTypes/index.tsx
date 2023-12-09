import { Box, Container, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react"

const types = [
  {
    text: 'vida noturna',
    alt: 'Ícone coquetel',
    src: 'cocktail.svg'
  },
  {
    text: 'praia',
    alt: 'Ícone surf',
    src: 'surf.svg'
  },
  {
    text: 'moderno',
    alt: 'Ícone prédio',
    src: 'building.svg'
  },
  {
    text: 'clássico',
    alt: 'Ícone museu',
    src: 'museum.svg'
  },
  {
    text: 'e mais...',
    alt: 'Ícone terra',
    src: 'earth.svg'
  },
]

export default function TravelTypes () {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')

  return (
    <Container maxW="1440px" py={[8, 20]}>
      <Flex wrap="wrap" justify="space-around">
        {types.map(types => (
          isLargerThan1024 ? (
            <Flex key={types.text} align="center" direction="column">
              <Image src={`src/assets/${types.src}`} alt={types.alt} width="80px" height="80px" /> 
              <Text fontWeight="medium" fontSize={['18px', '16px']} mt={5}>{types.text}</Text>
            </Flex>
          ) : (
            <Flex key={types.text} align="center" mb="16px" mx="25px">
              <Box w="8px" h="8px" background="highlight.default" borderRadius="full" mr={2} />
              <Text fontWeight="medium" fontSize={['18px', '16px']}>{types.text}</Text>
            </Flex>
          )
        ))}
      </Flex>
    </Container>
  )
}