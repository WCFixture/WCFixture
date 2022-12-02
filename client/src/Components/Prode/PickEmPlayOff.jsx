import React from "react";
import PlayOffMatch from "./PlayOffMatch";
import { Flex } from "@chakra-ui/react"
import { useSelector } from "react-redux";
export default function PickEmPlayOff() {
  const matches = useSelector((state) => state.matchsFromPlayoff)
  
  return (

      <Flex h="100vh" direction={"column"} justifyContent="space-evenly">
      {matches?.slice(0, 4).map((m) => {
        return (
          <PlayOffMatch match={m}></PlayOffMatch>
        )
      })}
      </Flex> 
     
      
   
    
  )
}