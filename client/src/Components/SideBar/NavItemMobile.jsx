import React from 'react';
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom'

export default function NavItemMobile({
  icon,
  title,
  description,
  active,
  navSize,
  link,
}) {
    const navigate = useNavigate()
  return (
    <Flex
      
      flexDir="column"
      w="100%"
      color="#b2b7d7"
      alignItems={"center"}
      onClick={()=>{navigate(link)}}
    >
      <Link
        to={link}
        backgroundColor={active && '#AEC8CA'}
       
        borderRadius={8}
        _hover={{ textDecor: 'none', backgroundColor: '#4d547d' }}
        w={navSize === 'large' && '100%'}
      >
        <Flex flexDir="column" justifyContent={"center"} alignItems="center">
          <Icon
            as={icon}
            mt={1}
            fontSize="xl"
            color={active ? '#82AAAD' : 'gray.500'}
          />
          <Text  display={navSize === 'small' ? 'none' : 'flex'}>
            {title}
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}
