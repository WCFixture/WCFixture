import React from "react";
import { useSelector } from "react-redux";
import {Flex, Image, Text, Center, Divider} from "@chakra-ui/react";
import { useAuth0 } from '@auth0/auth0-react';

export default function CurrentUserStats(){
  const userProde = useSelector((state)=> state.userProde);
  const { user, isAuthenticated, isLoading } = useAuth0();
  return(
    <Flex color={'whiteAlpha.600'}
    w="30%"
    p="20px"
    borderRadius="25px"
    flexDirection={"column"}
    justifyContent="center"
    alignItems={"center"}
    bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)">
        <Flex justifyContent={"center"} p="10px" alignItems="center">
            {isAuthenticated ?  <Image borderRadius={"full"} mr="10px" w="20%" h="20%" src={user.picture}></Image> : null}
           
            <Text fontSize={"2vw"} color={"white"}>Tu puntaje actual</Text>
        </Flex>

        <Divider></Divider>
        <Flex direction={"column"} p="10px">
        <Text fontSize={"120%"} color={"white"}>Puesto: 3</Text>
        <Text fontSize={"120%"} color={"white"}>Points: {userProde.points} </Text>
        </Flex>
   
    </Flex>
  )
  
 }