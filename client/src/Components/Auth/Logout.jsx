import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@chakra-ui/react';


export default function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <Button colorScheme='blue' variant='ghost' onClick={() => logout({returnTo: window.location.origin})}>Logout</Button>
  )
}