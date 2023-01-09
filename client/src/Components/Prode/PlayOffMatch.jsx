import React from 'react';
import { Text, Flex, Image, Box, Avatar, Center } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

export default function PlayOffMatch({ match, setMatch }) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const allCountries = useSelector((state) => state.allCountries);
  const userProde = useSelector((state) => state.userProde);
  const countryOne = allCountries.find((c) => {
    return c.id === match.countries[0];
  });
  const countryTwo = allCountries.find((c) => {
    return c.id === match.countries[1];
  });

  return (
    <>
      {allCountries.length ? (
        <Flex
          bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)"
          h="80px"
          w={'10.3vw'}
          _hover={{
            backgroundColor: 'rgba(25,10,83,1)',
            cursor: 'pointer',
            boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.35)',
          }}
          onClick={() => {
            setMatch(match.id);
          }}
          justifyContent="space-evenly"
          flexDirection={'column'}
        >
          <Flex
            h={'50%'}
            w="100%"
            border="2px"
            borderColor={'black'}
            flexDirection={'row'}
            alignItems="center"
            justifyContent={'space-between'}
          >
            <Flex alignItems="center" h={"100%"} w="65%">
              <Image
                h="35px"
                w="55px"
                src={
                  countryOne
                    ? countryOne.flag
                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_with_question_mark.svg/2560px-Flag_with_question_mark.svg.png'
                }
              ></Image>
              <Text ml="5px" color="white" fontSize={'0.6vw'}>
                {' '}
                {countryOne ? countryOne.name : 'Undefined'}{' '}
              </Text>
            </Flex>

            <Flex alignItems="center" h={"100%"} w={userProde.hasOwnProperty(match.id) && match.status == 'finished' ? "35%" : "17.5%" }>
              {match.status == 'finished' ? (
                <Flex
                  w={userProde.hasOwnProperty(match.id) ? "50%" : "100%"}
                  borderLeft="2px"
                  h={'40px'}
                  borderColor={'black'}
                  alignItems="center"
                  justifyContent={'center'}
                >
                  <Text color="white">{match.result.local}</Text>
                </Flex>
              ) : null}
              {userProde.hasOwnProperty(match.id) ? (
                <Flex
                  w={match.status == 'finished' ? "50%" : "100%"}
                  h={'40px'}
                  borderLeft="2px"
                  borderColor={'black'}
                  alignItems="center"
                  justifyContent={'center'}
                >
                  <Center
                    position={'absolute'}
                    mb="75px"
                    h="35px"
                    w={'35px'}
                    bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)"
                    borderTop={"2px"}
                    borderRight={"2px"}
                    borderLeft={"2px"}
                    borderColor="black"
                  >
                    <Avatar h="28px" w={'28px'} src={user.picture} />
                  </Center>

                  <Text color="white">{userProde[match.id].local}</Text>
                </Flex>
              ) : null}
            </Flex>
          </Flex>
          <Flex
            h={'50%'}
            borderRight="2px"
            borderLeft={'2px'}
            borderBottom="2px"
            borderColor={'black'}
            flexDirection={'row'}
            alignItems="center"
            justifyContent={'space-between'}
          >
            <Flex alignItems="center" h={"100%"} w="65%">
              <Image
                h="35px"
                w="55px"
                src={
                  countryTwo
                    ? countryTwo.flag
                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_with_question_mark.svg/2560px-Flag_with_question_mark.svg.png'
                }
              ></Image>
              <Text ml="5px" color="white" fontSize={'0.6vw'}>
                {' '}
                {countryTwo ? countryTwo.name : 'Undefined'}{' '}
              </Text>
            </Flex>

            <Flex alignItems="center" h={"100%"} w={userProde.hasOwnProperty(match.id) && match.status == 'finished' ? "35%" : "17.5%" }>
              {match.status == 'finished' ? (
                <Flex
                  w={userProde.hasOwnProperty(match.id) ? "50%" : "100%"}
                  borderLeft="2px"
                  h={'40px'}
                  borderColor={'black'}
                  alignItems="center"
                  justifyContent={'center'}
                >
                  <Text color="white">{match.result.away}</Text>
                </Flex>
              ) : null}
              {userProde.hasOwnProperty(match.id) ? (
                <Flex
                  w={match.status == 'finished' ? "50%" : "100%"}
                  h={'40px'}
                  borderLeft="2px"
                  borderColor={'black'}
                  alignItems="center"
                  justifyContent={'center'}
                >

                  <Text color="white">{userProde[match.id].away}</Text>
                </Flex>
              ) : null}
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <></>
      )}
    </>
  );
}
