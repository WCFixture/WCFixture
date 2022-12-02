import {
  Flex,
  Heading,
  SimpleGrid,
  Divider,
  Text,
  Button,
  Center,
  Image,
  useMediaQuery,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMatchsFromGroup } from '../../Redux/actions';

const LandingProde = ({ setLocal }) => {
  const matchs = useSelector((state) => state.matchsFromGroup);
  const userProde = useSelector((state) => state.userProde);
  const dispatch = useDispatch();
  const [isShorterThan900] = useMediaQuery('(max-width: 900px)');

  return (
    <Center mt={'5vh'} flexDirection={'column'} color="whiteAlpha.800">
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
      >
        <Text
          as={'span'}
          color="#DBDFF5"
          position={'relative'}
          _after={{
            content: "''",
            width: 'full',
            height: '30%',
            position: 'absolute',
            bottom: 1,
            left: 0,
            bg: '#723A88',
            zIndex: -1,
          }}
        >
          Bienvenido a nuestro prode!
        </Text>
      </Heading>
      <br />
      <br />
      <Text fontSize={'2vw'}>Completa <b>todos</b> los resultados</Text>
      <Text fontSize={'1vw'}>
        Si no completas uno de los encuentros no participas en el prode.
      </Text>
      <br />
      <br />
      <Text fontSize={'2vw'}>Tabla de puntos:</Text>
      <br />
      <SimpleGrid columns={2} row={4} border={'1px solid white'}>
        <Text
          p={'1.6vw'}
          border={'1px solid white'}
          align={'center'}
          fontSize="1.5vw"
        >
          Prediccion
        </Text>
        <Text
          p={'1.6vw'}
          border={'1px solid white'}
          align={'center'}
          fontSize="1.5vw"
        >
          Puntos
        </Text>
        <Text p={'1.6vw'} border={'1px solid white'} align={'justify'}>
          Acertar solo ganador
        </Text>
        <Text p={'1.6vw'} border={'1px solid white'} align={'center'}>
          5
        </Text>
        <Text p={'1.6vw'} border={'1px solid white'} align={'justify'}>
          Acertar ganador y resultado
        </Text>
        <Text p={'1.6vw'} border={'1px solid white'} align={'center'}>
          15
        </Text>
        <Text p={'1.6vw'} border={'1px solid white'} align={'justify'}>
          Acertar ganador y resultado con un total de goles mayor a 4
        </Text>
        <Text p={'1.6vw'} border={'1px solid white'} align={'center'}>
          25
        </Text>
      </SimpleGrid>
      <Button fontSize={"1.7vw"} p="2vw" mt={'2vh'} bg={'blue'} onClick={ () => {setLocal(true)} } _hover={{background: "blue.500"}}>
        Continuar
      </Button>
    </Center>
  );
};

export default LandingProde;
