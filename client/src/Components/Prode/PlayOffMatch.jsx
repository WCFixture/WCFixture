import React from "react";
import { Text, Flex, Image } from "@chakra-ui/react"
import { useSelector } from "react-redux";

export default function PlayOffMatch({match, setMatch}) {
  const allCountries = useSelector((state) => state.allCountries)
  const userProde = useSelector((state) => state.userProde);
  const countryOne = allCountries.find((c) => {
    return c.id === match.countries[0];
  });
  const countryTwo = allCountries.find((c) => {
    return c.id === match.countries[1];
  });

  return (
  <>
    { allCountries.length ?
      <Flex bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)" h="auto" w="180px"  _hover={{
        backgroundColor: 'rgba(25,10,83,1)',
        cursor: 'pointer',
        boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.35)',
      }}   onClick={() => {
        setMatch(match.id);
      }} justifyContent="space-evenly" flexDirection={"column"}>
        <Flex border="2px" borderColor={"black"} flexDirection={"row"} alignItems="center" justifyContent={"space-between"}>
          <Image  h="30px" w="45px" src={countryOne ? countryOne.flag : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_with_question_mark.svg/2560px-Flag_with_question_mark.svg.png"}></Image>
            <Text ml="14px" color="white"> {countryOne ? countryOne.name : "Undefined"} </Text>
            {userProde.hasOwnProperty(match.id) ? (
          <Text color="white">{userProde[match.id].local}</Text>) : null }
        </Flex>  
        <Flex border="2px" borderColor={"black"} flexDirection={"row"} alignItems="center" justifyContent={"space-between"}>
          <Image h="30px" w="45px" src={countryTwo ? countryTwo.flag : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_with_question_mark.svg/2560px-Flag_with_question_mark.svg.png"}></Image>
            <Text ml="14px" color="white"> {countryTwo ? countryTwo.name : "Undefined"} </Text>
            {userProde.hasOwnProperty(match.id) ? (
          <Text color="white">{userProde[match.id].away}</Text>) : null }
          
        </Flex>
      </Flex> : <></> 
    }
</>
 
  )
}