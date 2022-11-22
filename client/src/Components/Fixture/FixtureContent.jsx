import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Image,
  Box,
  NumberInputStepper,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function Fixturecontent() {
  const allCountries = useSelector((state) => state.allCountries);
  const allGroupsMatchs = useSelector((state) => state.allGroupsMatchs);
  const fechas = [
    '2022-11-20',
    '2022-11-21',
    '2022-11-22',
    '2022-11-23',
    '2022-11-24',
    '2022-11-25',
    '2022-11-26',
    '2022-11-27',
    '2022-11-28',
    '2022-11-29',
    '2022-11-30',
    '2022-12-01',
    '2022-12-02',
  ];
  return (
    /* {allCountries.length &&
      allGroupsMatchs.length ? } */
    <Container maxW="80%">
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
        mt={"5vh"}
      >
        <Text
          ml="22%"
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
          Consultá la fecha de los partidos
        </Text>
      </Heading>

      {fechas.map((fecha) => {
        return (
          <>
            <Text fontSize="3xl" color="#DBDFF5" mt="5%" ml="15%">
              {fecha.slice(-2) +
                ' ' +
                (fecha.slice(5, 7) == '11' ? 'Nov' : 'Dic') +
                ' ' +
                fecha.slice(0, 4)}
            </Text>
            {allGroupsMatchs
              .filter((m) => {
                return m.date.startsWith(fecha);
              })
              .map((m) => {
                return (
                  <Flex
                    my="5%"
                    ml="20%"
                    w="60%"
                    h="12vh"
                    bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)"
                    borderRadius="20px"
                    direction={'row'}
                    justifyContent={'space-around'}
                    overflow="hidden"
                  >
                    <Text
                      minW="20%"
                      align="center"
                      mt="4%"
                      fontSize="2xl"
                      color="#DBDFF5"
                    >
                      {
                        allCountries.find((c) => {
                          return c.id === m.countries[0];
                        }).name
                      }
                    </Text>
                    <Image
                      borderRadius={'5px'}
                      h={'80%'}
                      w="15%"
                      my="1.3%"
                      src={
                        allCountries.find((c) => {
                          return c.id === m.countries[0];
                        }).flag
                      }
                    ></Image>
                    {m.status === 'pendient' ? (
                      <Text mt="4%" fontSize="2xl" color="#DBDFF5">
                        {m.date.slice(11, 16)}
                      </Text>
                    ) : (
                      <Text mt="4%" fontSize="2xl" color="#DBDFF5">
                        {m.result.local + " - " + m.result.away}
                      </Text>
                    )}

                    <Image
                      borderRadius={'5px'}
                      my="1.3%"
                      h={'80%'}
                      w="15%"
                      src={
                        allCountries.find((c) => {
                          return c.id === m.countries[1];
                        }).flag
                      }
                    ></Image>
                    <Text
                      minW="20%"
                      align="center"
                      mt="4%"
                      fontSize="2xl"
                      color="#DBDFF5"
                    >
                      {
                        allCountries.find((c) => {
                          return c.id === m.countries[1];
                        }).name
                      }
                    </Text>
                  </Flex>
                );
              })}
          </>
        );
      })}
    </Container>
  );
}
