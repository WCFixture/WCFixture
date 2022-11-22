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
import NavItemMobile from '../SideBar/NavItemMobile';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Auth/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { chequearEmail, getCountries, getMatchsFromGroups, getProde, getProdePoints } from '../../Redux/actions';
import LogoutButton from '../Auth/Logout';

export default function SidebarMobile() {
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
    <Flex
      transition="all .5s ease"
      pos="sticky"
      left="5"
      h={navSize === 'small' ? '70px' : '90px'}
      bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize === 'small' ? '15px' : '30px'}
      w={"100vw"}
      flexDir="row"
      justifyContent="space-between"
      alignItems={"center"}
    >
      <Flex
       
        flexDir="row"
        w="100%"
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
        as="nav"
      >
        <IconButton
          background="none"
          color="#b2b7d7"
          ml="10px"
          _hover={{ background: '#6a73ab' }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize === 'small') changeNavSize('large');
            else changeNavSize('small');
          }}
        />
        <NavItemMobile
          navSize={navSize}
          icon={FiHome}
          title="Home"
          description=""
          link="/"
        />
        <NavItemMobile
          navSize={navSize}
          icon={BiFootball}
          title="Prode"
          link="/pickem"
        />
        <NavItemMobile
          navSize={navSize}
          icon={FiCalendar}
          title="Fixture"
          link="/fixture"
        />
        <NavItemMobile
          navSize={navSize}
          icon={GiTrophyCup}
          title="Ranking"
          link="/leaderboard"
        />
        {isAuthenticated ? (
        <Flex flexDir="row" w="100%" alignItems="center" >
          <Flex
            
            alignItems="center"
            justifyContent={"center"}
            borderRadius="md"
            transition="all .25s ease"
            _hover={{ filter: 'brightness(130%)' }}
          >
            <Avatar size="sm" src={user.picture} />
            <Center display={navSize === 'small' ? 'none' : 'flex'}>
            <LogoutButton />
          </Center>
          </Flex>
          
        </Flex>
      ) : (
        <Flex >
          <LoginButton type="Login" />
          
        </Flex>
      )}
      </Flex>

      
    </Flex>
  );
}
