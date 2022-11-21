import React, { useState } from 'react';
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
  Link,
  Box,
  Center,
} from '@chakra-ui/react';
import { FiMenu, FiHome, FiCalendar } from 'react-icons/fi';
import { GiTrophyCup } from 'react-icons/gi';
import { BiFootball } from 'react-icons/bi';
import NavItem from '../SideBar/NavItem';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Auth/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { chequearEmail, getCountries, getMatchsFromGroups, getProde, getProdePoints } from '../../Redux/actions';
import LogoutButton from '../Auth/Logout';
import   "./navbar.css"

export default function Sidebar() {
  const [navSize, changeNavSize] = useState('large');
  const { user, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();
  let name = "";
  useEffect(() => {
    dispatch(getCountries())
    dispatch(getMatchsFromGroups())
    dispatch(getProdePoints())
  }, []);

  useEffect(() => {
    if(isAuthenticated){ 
      let name = "";
      if(user.email_verified? name=user.name : name=user.nickname)
      dispatch(chequearEmail(user.email, user.picture, name));
      dispatch(getProde(user.email))
    }
  }, [user]);

  return (
    <Box left="1%" sx={{ position: '-webkit-sticky', position: 'sticky', top: '0',}}>
    <Flex
      transition="all .5s ease"
      left="2%"
      h="95vh"
      bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize === 'small' ? '15px' : '30px'}
      w={navSize === 'small' ? '75px' : '270px'}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          color="#b2b7d7"
          _hover={{ background: '#6a73ab' }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize === 'small') changeNavSize('large');
            else changeNavSize('small');
          }}
        />
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Home"
          description=""
          link="/"
        />
        <NavItem
          navSize={navSize}
          icon={BiFootball}
          title="Prode"
          link="/pickem"
        />
        <NavItem
          navSize={navSize}
          icon={FiCalendar}
          title="Fixture"
          link="/fixture"
        />
        <NavItem
          navSize={navSize}
          icon={GiTrophyCup}
          title="Leaderboard"
          link="/leaderboard"
        />
      </Flex>

      {isAuthenticated ? (
        <Flex p="5%" flexDir="column" w="100%" alignItems="center" mb={4}>
          <Flex
            mt={4}
            mb={4}
            align="center"
            borderRadius="md"
            transition="all .25s ease"
            _hover={{ filter: 'brightness(130%)' }}
          >
            <Avatar size="sm" src={user.picture} />
            <Flex
              flexDir="column"
              ml={4}
              display={navSize === 'small' ? 'none' : 'flex'}
            >
              <Heading as="h3" size="sm" color="#6a73ab">
                {user.email_verified ? user.name : user.nickname} 
              </Heading>
              <Text color="gray" fontSize={10}>
                {user.email}
              </Text>
            </Flex>
          </Flex>
          <Divider display={navSize === 'small' ? 'none' : 'flex'} />

          <Center display={navSize === 'small' ? 'none' : 'flex'}>
            <LogoutButton />
          </Center>
        </Flex>
      ) : (
        <Center display={navSize === 'small' ? 'none' : 'flex'} flexDirection="column">
          <Flex w="100%" justifyContent={"center"}>
          <LoginButton type="Login" />
          </Flex>
         <Flex w="100%" mt="10px" justifyContent={"center"}>
         <LoginButton type="Register" />
         </Flex>
     
        </Center>
      )}
    </Flex>
    </Box>

  );
}
