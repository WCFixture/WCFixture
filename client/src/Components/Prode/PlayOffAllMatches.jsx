import React from "react";
import PlayOffMatch from "./PlayOffMatch";
import { Flex } from "@chakra-ui/react"
import { useSelector } from "react-redux";
export default function PlayOffAllMatches({setMatch}) {
  const matches = useSelector((state) => state.matchsFromPlayoff)
  
  return (
    <Flex h="70vh" w="80vw" direction={"row"} >
 <Flex  direction={"column"} justifyContent="space-around">
      {matches?.filter((m) => m.date == "2022-12-03T00:00:00.000Z" || m.date == "2022-12-05T00:00:00.000Z").map((m) => {
        return (
          <PlayOffMatch match={m} setMatch={setMatch}></PlayOffMatch>
        )
      })}
      </Flex> 
      <Flex ml="1vw" mr="1%" direction={"column"} justifyContent="space-around">
      {matches?.filter((m) => m.date == "2022-12-09T00:00:00.000Z").map((m) => {
        return (
          <PlayOffMatch match={m} ></PlayOffMatch>
        )
      })}
      </Flex> 
      <Flex ml="1%"  direction={"column"} justifyContent="space-around">
      {matches?.filter((m) => m.date == "2022-12-13T00:00:00.000Z").map((m) => {
        return (
          <PlayOffMatch match={m}></PlayOffMatch>
        )
      })}
      </Flex> 
      <Flex ml="1%" mr="1%" direction={"column"} justifyContent="space-around">
      {matches?.filter((m) => m.date == "2022-12-18T00:00:00.000Z").map((m) => {
        return (
          <PlayOffMatch match={m}></PlayOffMatch>
        )
      })}
      </Flex> 
      <Flex  mr="1%" direction={"column"} justifyContent="space-around">
      {matches?.filter((m) => m.date == "2022-12-14T00:00:00.000Z").map((m) => {
        return (
          <PlayOffMatch match={m}></PlayOffMatch>
        )
      })}
      </Flex> 
      <Flex ml="1%" mr="1%"  direction={"column"} justifyContent="space-around">
      {matches?.filter((m) => m.date == "2022-12-10T00:00:00.000Z").map((m) => {
        return (
          <PlayOffMatch match={m}></PlayOffMatch>
        )
      })}
      </Flex>
      <Flex direction={"column"} justifyContent="space-around">
      {matches?.filter((m) => m.date == "2022-12-04T00:00:00.000Z" || m.date == "2022-12-06T00:00:00.000Z").map((m) => {
        return (
          <PlayOffMatch match={m} setMatch={setMatch}></PlayOffMatch>
        )
      })}
      </Flex> 

    </Flex>
     
     
      
   
    
  )
}