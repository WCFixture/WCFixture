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
import LandingPage from './LandingProde'
import PrincipalMatch from './PrincipalMatch';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getCountries,
  getMatchsFromGroup,
  getProde,
} from '../../Redux/actions';
import { useAuth0 } from '@auth0/auth0-react';
import PickEmPlayOff from './PickEmPlayOff';

export default function PickEm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allCountries = useSelector((state) => state.allCountries);
  const allGroupsMatchs = useSelector((state) => state.allGroupsMatchs);
  const matchsFromGroup = useSelector((state) => state.matchsFromGroup);
  const userProde = useSelector((state) => state.userProde);
  const [groupFocus, setGroupFocus] = useState('A');
  const [matchFocus, setMatchFocus] = useState('1');
  const [faseFocus, setFaseFocus] = useState("0");
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  const [prodeStartedLocal, setProdeStartedLocal] = useState(false);

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
        <Center
          minH="100vh"
          w="100%"
          flexDirection="column"
          justifyContent="flex-start"
        >

          {userProde.prodeStarted || prodeStartedLocal ? (
            <>
              <Heading color="white" my="5%" h={'20%'}>
                Bienvenido a nuestro prode!
              </Heading>
         { faseFocus === "0" ? <> <Button backgroundColor={"rgba(25,10,83,1)"} _hover={{
        backgroundColor: '#2D033B'
      }}   color="white"  my="1%" onClick={() => setFaseFocus("1")}>PlayOff</Button>
              <PrincipalMatch match={matchFocus} />
              <Center w="98%" mt={"1%"} justifyContent="space-between">
                <AllGroups groupFocus={groupFocus} setGroup={setGroupFocus} />
                <GroupMatchs group={groupFocus} setMatch={setMatchFocus} />
              </Center> </> : <><Button backgroundColor={"rgba(25,10,83,1)"} _hover={{
        backgroundColor: '#2D033B'
      }}   color="white" my="1%" onClick={() => setFaseFocus("0")}>Groups</Button> <PickEmPlayOff></PickEmPlayOff></>}
              </Center>
            </>
          ) : (
            <LandingPage setLocal={setProdeStartedLocal}></LandingPage>
          )}
        </Center>

      ) : (
        <></>
      )}
    </>
  );
}
