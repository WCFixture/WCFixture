import {
  Flex,
  Image,
  Text,
  Center,
  Box,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MatchCard = ({ match }) => {
  const allCountries = useSelector((state) => state.allCountries);
  const userProde = useSelector((state) => state.userProde);
  const navigate = useNavigate();
  const [isShorterThan900] = useMediaQuery('(max-width: 900px)');
  const countryOne = allCountries.find((c) => {
    return c.id === match.countries[0];
  });
  const countryTwo = allCountries.find((c) => {
    return c.id === match.countries[1];
  });

  /* useEffect(()=>{
  }, [userProde]) */
  return (
    <>
      {isShorterThan900 ? (
        <>
          <Flex flexDirection={'column'} alignItems="center">
            <Image src={countryOne.flag} h="8vw" minW="40px" borderRadius={2} />
            <Text color="white" fontWeight={500} fontSize="3vw" align={"center"}>{countryOne.name}</Text>
          </Flex>

          {userProde.hasOwnProperty(match.id) ? (
            <Text fontWeight={500} color={'white'} fontSize="3vw" mx={2}>
              {userProde[match.id].local}&nbsp;-&nbsp;{userProde[match.id].away}
            </Text>
          ) : (
            <Text fontWeight={500} color={'white'} fontSize="2vw" mx={2}>&nbsp;-&nbsp;</Text>
          )}

          <Flex flexDirection={'column'} alignItems="center">
            <Image src={countryTwo.flag} h="8vw" minW="40px" borderRadius={2} />
            <Text color="white" fontWeight={500} fontSize="3vw" align={"center"}>{countryTwo.name}</Text>
          </Flex>
        </>
      ) : (
        <>
          <Image src={countryOne.flag} h="35px" w="57px" borderRadius={2} />
          <Text>{countryOne.name}</Text>
          {userProde.hasOwnProperty(match.id) ? (
            <Text fontWeight={500} color={'white'}>
              {userProde[match.id].local}&nbsp;-&nbsp;{userProde[match.id].away}
            </Text>
          ) : (
            <Text>&nbsp;-&nbsp;</Text>
          )}

          <Text>{countryTwo.name}</Text>
          <Image src={countryTwo.flag} h="35px" w="57px" borderRadius={2} />
        </>
      )}
    </>
  );
};

export default MatchCard;
