import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  createIcon,
  Center,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GroupMatchs from './GroupMatchs';
import AllGroups from './AllGroups';
import PrincipalMatch from './PrincipalMatch';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getCountries,
  getMatchsFromGroup,
  getProde,
} from '../../Redux/actions';
import { useAuth0 } from '@auth0/auth0-react';
import PickEmPlayOffMobile from './PickemPlayOffMobile';

export default function PickEmMobile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allCountries = useSelector((state) => state.allCountries);
  const allGroupsMatchs = useSelector((state) => state.allGroupsMatchs);
  const matchsFromGroup = useSelector((state) => state.matchsFromGroup);
  const userProde = useSelector((state) => state.userProde);
  const [groupFocus, setGroupFocus] = useState('A');
  const [matchFocus, setMatchFocus] = useState('1');
  const [faseFocus, setFaseFocus] = useState('0');
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    dispatch(getMatchsFromGroup(groupFocus));
    if (!allCountries.length) {
      dispatch(getCountries());
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getProde(user.email));
    }
  }, [user]);

  return (
    <>
      {!isLoading &&
      (userProde || !isAuthenticated) &&
      allCountries.length &&
      allGroupsMatchs.length &&
      matchsFromGroup.length ? (
        <Flex
          minW="100vw"
          h="100%"
          flexDirection="row"
          alignItems={faseFocus === "0" ? 'flex-start' : "center"}
          justifyContent="center"
        >
          {faseFocus === '0' ? (
            <>
              <AllGroups groupFocus={groupFocus} setGroup={setGroupFocus} />
              <Center mt={'1%'} flexDirection="column" w={'88vw'} h="100%">
                <Button
                  w={"20vw"}
                  backgroundColor={'rgba(25,10,83,1)'}
                  _hover={{ backgroundColor: '#2D033B' }}
                  color="white"
                  my="1%"
                  onClick={() => setFaseFocus('1')}
                >
                  PlayOff
                </Button>
                <PrincipalMatch match={matchFocus} />
                <GroupMatchs group={groupFocus} setMatch={setMatchFocus} />
              </Center>
            </>
          ) : (
            <Flex direction={"column"} justifyContent="center" alignItems={"center"}>
              <Button
                w={"20vw"}
                backgroundColor={'rgba(25,10,83,1)'}
                _hover={{
                  backgroundColor: '#2D033B',
                }}
                color="white"
                my="1%"
                onClick={() => setFaseFocus('0')}
              >
                Groups
              </Button>
              <PickEmPlayOffMobile />
            </Flex>
          )}
        </Flex>
      ) : (
        <></>
      )}
    </>
  );
}
