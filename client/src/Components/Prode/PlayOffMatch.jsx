import React from "react";
import { Text, Flex, Image } from "@chakra-ui/react"
import { useSelector } from "react-redux";

export default function PlayOffMatch({match}) {
  const allCountries = useSelector((state) => state.allCountries)

  return (
  <>
    { allCountries.length?
      <Flex bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)" h="auto" w="200px"  _hover={{
        backgroundColor: 'rgba(25,10,83,1)',
        cursor: 'pointer',
        boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.35)',
      }}  justifyContent="space-evenly" flexDirection={"column"}>
        <Flex border="2px" borderColor={"black"} flexDirection={"row"} alignItems="center">
          <Image  h="30px" w="45px" src={allCountries[0].flag}></Image>
          <Text ml="14px" color="white"> {match.countries[0]} </Text>
          
        </Flex>  
        <Flex border="2px" borderColor={"black"} flexDirection={"row"} alignItems="center">
          <Image h="30px" w="45px" src={allCountries[1].flag}></Image>
          <Text ml="14px" color="white"> {allCountries[1].name} </Text>
          
        </Flex>
      </Flex> : <></> 
    }
</>
 
  )
}