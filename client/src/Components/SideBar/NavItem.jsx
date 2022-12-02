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

export default function NavItem({
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
      mt={30}
      flexDir="column"
      w="100%"
      color="#b2b7d7"
      alignItems={navSize === 'small' ? 'center' : 'flex-start'}
      onClick={()=>{navigate(link)}}
    >
      <Link
        to={link}
        backgroundColor={active && '#AEC8CA'}
        p={3}
        borderRadius={8}
        _hover={{ textDecor: 'none', backgroundColor: '#4d547d' }}
        w={navSize === 'large' && '100%'}
      >
        <Flex>
          <Icon
            as={icon}
            mt={1}
            fontSize="xl"
            color={active ? '#82AAAD' : 'gray.500'}
          />
          <Text ml={5} display={navSize === 'small' ? 'none' : 'flex'}>
            {title}
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}
