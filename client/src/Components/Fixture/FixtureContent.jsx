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
  useMediaQuery
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function Fixturecontent() {
  const allCountries = useSelector((state) => state.allCountries);
  const allGroupsMatchs = useSelector((state) => state.allGroupsMatchs);
  const [isShorterThan900] = useMediaQuery('(max-width: 900px)');
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
    <Container maxW="80%" display={"flex"} flexDirection="column" justifyContent="center" alignItems={"center"}>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
        mt={"5vh"}
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
          Consultá la fecha de los partidos
        </Text>
      </Heading>

      {fechas.map((fecha) => {
        return (
          <>
            <Text fontSize="3xl" color="#DBDFF5" mt="3%">
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
                    my="3%"
                    
                    w={isShorterThan900? "130%" :"60%"}
                    h={isShorterThan900? "8vh" :"12vh"}
                    bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)"
                    borderRadius="20px"
                    direction={'row'}
                    justifyContent={'center'}
                    alignItems="center"
                    overflow="hidden"
                  >
                    <Text
                      w="25%"
                      align="center"
                      
                      fontSize={isShorterThan900? "16px" :"2xl"}
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
                      h={isShorterThan900? "70%": '80%'}
                      w="15%"
                      
                      src={
                        allCountries.find((c) => {
                          return c.id === m.countries[0];
                        }).flag
                      }
                    ></Image>
                    {m.status === 'pendient' ? (
                      <Text ml={isShorterThan900?"2%" :"4%"} mr={isShorterThan900?"2%" :"4%"} fontSize={isShorterThan900? "16px" :"2xl"} color="#DBDFF5">
                        {m.date.slice(11, 16)}
                      </Text>
                    ) : (
                      <Text ml={isShorterThan900?"2%" :"4%"} mr={isShorterThan900?"2%" :"4%"} fontSize={isShorterThan900? "16px" :"2xl"} color="#DBDFF5">
                        {m.result.local + " - " + m.result.away}
                      </Text>
                    )}

                    <Image
                      borderRadius={'5px'}
                      my="1.3%"
                      h={isShorterThan900? "70%": '80%'}
                      w="15%"
                      src={
                        allCountries.find((c) => {
                          return c.id === m.countries[1];
                        }).flag
                      }
                    ></Image>
                    <Text
                      w="25%"
                      align="center"
                      
                      fontSize={isShorterThan900? "16px" :"2xl"}
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
