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
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MatchCard from './MatchCard';

const InstanceMatchs = ({ instance, setMatch }) => {
  const matchs = useSelector((state) => state.matchsFromPlayoff);
  const userProde = useSelector((state) => state.userProde);
  const dispatch = useDispatch();
  const [isShorterThan900] = useMediaQuery('(max-width: 900px)');
  const matchsIds = matchs.map((m) => {
    return m.id;
  });
  let instanceComplete =
    userProde.hasOwnProperty(matchsIds[8]) &&
    userProde.hasOwnProperty(matchsIds[9]) &&
    userProde.hasOwnProperty(matchsIds[10]) &&
    userProde.hasOwnProperty(matchsIds[11]);

  useEffect(() => {
    if (matchs.length) {
      setMatch(matchs[8].id);
    }
   
  }, [matchs]);

  return (
    <>
      <Flex
        w={'94%'}
        h="100%"
        flexDirection="column"
        color={'whiteAlpha.600'}
        borderRadius="25px"
        bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)"
      >
        {matchs.length ? (
          <>
            <Flex justifyContent="space-around" alignItems="center">
              <Text paddingY={'3%'}>Round of 16</Text>
              <Image
                h={'3vh'}
                src={
                  instanceComplete
                    ? 'https://cdn-icons-png.flaticon.com/512/1443/1443000.png'
                    : 'https://i.ibb.co/cFygpXg/matiii.png'
                }
              ></Image>
            </Flex>
            <Divider borderColor={'blackAlpha.800'} />
            <Flex wrap="wrap" justifyItems="center">
              {matchs?.slice(8, 12).map((m) => {
                return (
                  <Center
                    onClick={() => {
                      setMatch(m.id);
                    }}
                    h="8vh"
                    w="48%"
                    padding={2}
                    marginX={'1%'}
                    my="7%"
                    justifyContent={'space-between'}
                    _hover={{
                      backgroundColor: 'rgba(25,10,83,1)',
                      cursor: 'pointer',
                      boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.35)',
                    }}
                    borderRadius="15px"
                    fontSize={'1vw'}
                  >
                    <MatchCard match={m} />
                  </Center>
                );
              })}
            </Flex>
          </>
        ) : (
          <Text> loading... </Text>
        )}
      </Flex>
    </>
  );
};

export default InstanceMatchs;
