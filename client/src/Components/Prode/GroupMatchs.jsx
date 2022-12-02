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
import { getMatchsFromGroup } from '../../Redux/actions';
import MatchCard from './MatchCard';

const GroupMatchs = ({ group, setMatch }) => {
  const matchs = useSelector((state) => state.matchsFromGroup);
  const userProde = useSelector((state) => state.userProde);
  const dispatch = useDispatch();
  const [isShorterThan900] = useMediaQuery('(max-width: 900px)');
  const matchsIds = matchs.map((m) => {
    return m.id;
  });
  let groupComplete =
    userProde.hasOwnProperty(matchsIds[0]) &&
    userProde.hasOwnProperty(matchsIds[1]) &&
    userProde.hasOwnProperty(matchsIds[2]) &&
    userProde.hasOwnProperty(matchsIds[3]) &&
    userProde.hasOwnProperty(matchsIds[4]) &&
    userProde.hasOwnProperty(matchsIds[5]);
  useEffect(() => {
    dispatch(getMatchsFromGroup(group));
  }, [group]);

  useEffect(() => {
    setMatch(matchs[0].id);
  }, [matchs]);

  return (
    <>
      {isShorterThan900 ? (
        <Flex
          w={'94%'}
          h="48vh"
          flexDirection="column"
          color={'whiteAlpha.600'}
          borderRadius="25px"
          bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)"
        >
          {matchs.length ? (
            <>
              <Flex justifyContent="space-around" alignItems="center">
                <Text paddingY={'3%'}>Group {group}</Text>
                <Image
                  h={'3vh'}
                  src={
                    groupComplete
                      ? 'https://cdn-icons-png.flaticon.com/512/1443/1443000.png'
                      : 'https://i.ibb.co/cFygpXg/matiii.png'
                  }
                ></Image>
              </Flex>
              <Divider borderColor={'blackAlpha.800'} />
              <Flex wrap="wrap" justifyItems="center">
                {matchs?.map((m) => {
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
      ) : (
        <Flex
          w={'60%'}
          h="53vh"
          overflow={"hidden"}
          flexDirection="column"
          color={'whiteAlpha.600'}
          borderRadius="25px"
          bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)"
        >
          {matchs.length ? (
            <>
              <Flex justifyContent="space-around" alignItems="center">
                <Heading paddingY={'3%'}>Group {group}</Heading>
                <Image
                  h={'5vh'}
                  src={
                    groupComplete
                      ? 'https://cdn-icons-png.flaticon.com/512/1443/1443000.png'
                      : 'https://i.ibb.co/cFygpXg/matiii.png'
                  }
                ></Image>
              </Flex>
              <Divider borderColor={'blackAlpha.800'} />
              <Flex wrap="wrap" justifyItems="center">
                {matchs?.map((m) => {
                  return (
                    <Center
                      onClick={() => {
                        setMatch(m.id);
                      }}
                      h="8vh"
                      w="48%"
                      padding={7}
                      marginX={'1%'}
                      my="2%"
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
      )}
    </>
  );
};

export default GroupMatchs;
