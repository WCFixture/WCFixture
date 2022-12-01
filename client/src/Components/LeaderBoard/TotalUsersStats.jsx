import React from "react";
import {Flex, Box, Text, Image, Center, Divider, useMediaQuery} from "@chakra-ui/react"
import { useSelector } from "react-redux";
import { useState } from "react";

export default function TotalUsersStats() {
    const allProdeInfo = useSelector((state) => state.allProdePoints)
    const [isShorterThan900] = useMediaQuery('(max-width: 900px)');
    let puesto = 1;
    return(
        <Flex  
        color={'whiteAlpha.600'}
        mr="10px"
        p="20px"
        borderRadius="25px"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)">
            <Text color={"white"} fontSize={isShorterThan900 ? "30px" :"4vw"}>N° | User name | Points</Text>
            <Divider />
            {allProdeInfo?.map((el, total) => {
                if (total != 0 && allProdeInfo[total-1].prode.points != el.prode.points) {
                    puesto = total + 1;
                }
                return (
                    <Flex w="100%" flexDirection={"row"} alignItems="center" justifyContent={"space-evenly"} p="3%">
                        <Flex w="15%" >
                            {puesto}
                        </Flex>
                        <Flex w="70%" alignItems="center" justifyContent={"flex-start"} >
                            <Image mr="3%" borderRadius={"full"} maxW={isShorterThan900 ? "18%" :"10%"} maxH="10%" src={el.picture}></Image>
                            <Text fontSize={"120%"} color={"white"}> {el.name} </Text>
                        </Flex>
                    <Flex w="10%" >
                        <Text fontSize={"120%"}  color={"white"}> {el.prode.points} </Text>
                    </Flex>
                    
                    </Flex>
                );
            })}
        </Flex>
    )
}