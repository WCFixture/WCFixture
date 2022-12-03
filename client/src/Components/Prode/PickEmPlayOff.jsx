import React from "react";
import PlayOffAllMatches from "./PlayOffAllMatches";
import { Flex } from "@chakra-ui/react"
import PrincipalMatch from "./PrincipalMatch";
import { useState } from "react";

export default function PickEmPlayOff() {
  const [matchFocus, setMatchFocus] = useState('49');
  return (
    <Flex direction={"column"}>
      <PrincipalMatch match={matchFocus}></PrincipalMatch>
    <PlayOffAllMatches setMatch={setMatchFocus}></PlayOffAllMatches>
    </Flex>
    
  )
}