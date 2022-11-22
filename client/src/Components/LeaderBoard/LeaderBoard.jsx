import React from "react";
import {Flex, Box, Text, Image, Center, Divider} from "@chakra-ui/react"
import TotalUsersStats from "./TotalUsersStats";

export default function LeaderBoard(){
  
    return(
        <Center       
        minH="100vh"
        w="100%"
        pt="24px"
        pl="10px"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems={"flex-start"}>
        <TotalUsersStats></TotalUsersStats>
        </Center>
    )
}