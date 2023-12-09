import { Box, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react'
import backgroundImg from '../../assets/background.svg'
import airplaneImg from '../../assets/airplane.svg'

export default function Banner () {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')

  return (
    <Flex 
      css={{ backgroundImage: `url(${backgroundImg})` }} 
      height={['_', '163px', '335px']} 
      align="center" 
      justify="space-around"
      px={4}
      py={8}
    >
      <Box>
        <Text as="h1" fontSize={['20px', '_', '4xl']} color="white" fontWeight="medium" pb={3}>
          5 Continentes,<br />
          infinitas possibilidades.
        </Text>

        <Text as="h2" color="white" fontSize={['sm', '_', 'xl']}>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
        </Text>
      </Box>
      
      {isLargerThan1024 && <Image src={airplaneImg} alt="Airplane" w="417px" mt={32} />}
    </Flex>
  )
}