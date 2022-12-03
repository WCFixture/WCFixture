import React from 'react';
import PlayOffAllMatches from './PlayOffAllMatches';
import { Flex, Center } from '@chakra-ui/react';
import PrincipalMatch from './PrincipalMatch';
import { useState } from 'react';
import InstanceMatchs from './InstanceMatchs';

export default function PickEmPlayOffMobile() {
  const [matchFocus, setMatchFocus] = useState('49');
  return (
    <Center mt={'1%'} flexDirection="column" w={'88vw'} h="100%">
      <PrincipalMatch match={matchFocus} />
      <InstanceMatchs setMatch={setMatchFocus}/>
    </Center>
  );
}
