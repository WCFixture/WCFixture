import {
  Flex,
  VStack,
  HStack,
  Image,
  Text,
  Button,
  Box,
  background,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { groupComplete } from './AllGroups';
const AllGroups = ({ groupFocus, setGroup }) => {
  const allCountries = useSelector((state) => state.allCountries);
  const userProde = useSelector((state) => state.userProde);
  const [isShorterThan900] = useMediaQuery('(max-width: 900px)');

  let groupAComplete =
    userProde.hasOwnProperty('1') &&
    userProde.hasOwnProperty('3') &&
    userProde.hasOwnProperty('18') &&
    userProde.hasOwnProperty('19') &&
    userProde.hasOwnProperty('33') &&
    userProde.hasOwnProperty('34');

  let groupBComplete =
    userProde.hasOwnProperty('2') &&
    userProde.hasOwnProperty('4') &&
    userProde.hasOwnProperty('17') &&
    userProde.hasOwnProperty('20') &&
    userProde.hasOwnProperty('35') &&
    userProde.hasOwnProperty('36');

  let groupCComplete =
    userProde.hasOwnProperty('5') &&
    userProde.hasOwnProperty('7') &&
    userProde.hasOwnProperty('22') &&
    userProde.hasOwnProperty('24') &&
    userProde.hasOwnProperty('39') &&
    userProde.hasOwnProperty('40');

  let groupDComplete =
    userProde.hasOwnProperty('6') &&
    userProde.hasOwnProperty('8') &&
    userProde.hasOwnProperty('21') &&
    userProde.hasOwnProperty('23') &&
    userProde.hasOwnProperty('37') &&
    userProde.hasOwnProperty('38');

  let groupEComplete =
    userProde.hasOwnProperty('10') &&
    userProde.hasOwnProperty('11') &&
    userProde.hasOwnProperty('25') &&
    userProde.hasOwnProperty('28') &&
    userProde.hasOwnProperty('43') &&
    userProde.hasOwnProperty('44');

  let groupFComplete =
    userProde.hasOwnProperty('9') &&
    userProde.hasOwnProperty('12') &&
    userProde.hasOwnProperty('26') &&
    userProde.hasOwnProperty('27') &&
    userProde.hasOwnProperty('41') &&
    userProde.hasOwnProperty('42');

  let groupGComplete =
    userProde.hasOwnProperty('13') &&
    userProde.hasOwnProperty('16') &&
    userProde.hasOwnProperty('29') &&
    userProde.hasOwnProperty('31') &&
    userProde.hasOwnProperty('47') &&
    userProde.hasOwnProperty('48');

  let groupHComplete =
    userProde.hasOwnProperty('14') &&
    userProde.hasOwnProperty('15') &&
    userProde.hasOwnProperty('30') &&
    userProde.hasOwnProperty('32') &&
    userProde.hasOwnProperty('45') &&
    userProde.hasOwnProperty('46');

  return (
    <>
      {isShorterThan900 ? (
        <Flex
          w={'12vw'}
          h={'100%'}
          direction={'column'}
          bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)"
          borderTopRightRadius="15px"
          borderBottomRightRadius="15px"
        >
          <Flex
            h="14%"
            py={1}
            display={groupFocus === 'A' ? 'none' : 'flex'}
            flexDirection="column"
            alignItems={"center"}
            _hover={{
              backgroundColor: '#222D80',
              cursor: 'pointer',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease-in-out',
            }}
            onClick={() => {
              setGroup('A');
            }}
          >
            {groupAComplete ? (
              <Image
                mt="10px"
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
            <Text color={'white'} mt="5px" fontSize="20px">
              Group A
            </Text>
          </Flex>
          <Flex
            h="14%"
            py={1}
            display={groupFocus === 'B' ? 'none' : 'flex'}
            flexDirection="column"
            alignItems={"center"}
            _hover={{
              backgroundColor: '#222D80',
              cursor: 'pointer',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease-in-out',
            }}
            onClick={() => {
              setGroup('B');
            }}
          >
            {groupBComplete ? (
              <Image
                mt="10px"
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
            <Text color={'white'} mt="5px" fontSize="20px">
              Group B
            </Text>
          </Flex>
          <Flex
            h="14%"
            py={1}
            display={groupFocus === 'C' ? 'none' : 'flex'}
            flexDirection="column"
            alignItems={"center"}
            _hover={{
              backgroundColor: '#222D80',
              cursor: 'pointer',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease-in-out',
            }}
            onClick={() => {
              setGroup('C');
            }}
          >
            {groupCComplete ? (
              <Image
                mt="10px"
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
            <Text color={'white'} mt="5px" fontSize="20px">
              Group C
            </Text>
          </Flex>
          <Flex
            h="14%"
            py={1}
            display={groupFocus === 'D' ? 'none' : 'flex'}
            flexDirection="column"
            alignItems={"center"}
            _hover={{
              backgroundColor: '#222D80',
              cursor: 'pointer',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease-in-out',
            }}
            onClick={() => {
              setGroup('D');
            }}
          >
            {groupDComplete ? (
              <Image
                mt="10px"
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
            <Text color={'white'} mt="5px" fontSize="20px">
              Group D
            </Text>
          </Flex>
          <Flex
            h="14%"
            py={1}
            display={groupFocus === 'E' ? 'none' : 'flex'}
            flexDirection="column"
            alignItems={"center"}
            _hover={{
              backgroundColor: '#222D80',
              cursor: 'pointer',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease-in-out',
            }}
            onClick={() => {
              setGroup('E');
            }}
          >
            {groupEComplete ? (
              <Image
                mt="10px"
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
            <Text color={'white'} mt="5px" fontSize="20px">
              Group E
            </Text>
          </Flex>
          <Flex
            h="14%"
            py={1}
            display={groupFocus === 'F' ? 'none' : 'flex'}
            flexDirection="column"
            alignItems={"center"}
            _hover={{
              backgroundColor: '#222D80',
              cursor: 'pointer',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease-in-out',
            }}
            onClick={() => {
              setGroup('F');
            }}
          >
            {groupFComplete ? (
              <Image
                mt="10px"
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
            <Text color={'white'} mt="5px" fontSize="20px">
              Group F
            </Text>
          </Flex>
          <Flex
            h="14%"
            py={1}
            display={groupFocus === 'G' ? 'none' : 'flex'}
            flexDirection="column"
            alignItems={"center"}
            _hover={{
              backgroundColor: '#222D80',
              cursor: 'pointer',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease-in-out',
            }}
            onClick={() => {
              setGroup('G');
            }}
          >
            {groupGComplete ? (
              <Image
                mt="10px"
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
            <Text color={'white'} mt="5px" fontSize="20px">
              Group G
            </Text>
          </Flex>
          <Flex
            h="14%"
            py={1}
            display={groupFocus === 'H' ? 'none' : 'flex'}
            flexDirection="column"
            alignItems={"center"}
            _hover={{
              backgroundColor: '#222D80',
              cursor: 'pointer',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease-in-out',
            }}
            onClick={() => {
              setGroup('H');
            }}
          >
            {groupHComplete ? (
              <Image
                mt="10px"
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
            <Text color={'white'} mt="5px" fontSize="20px">
              Group H
            </Text>
          </Flex>
          
        </Flex>
      ) : (
        <Flex
          w="39%"
          h={'48vh'}
          color={'whiteAlpha.600'}
          borderRadius="25px"
          bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)"
          direction={'column'}
          justifyContent={'space-evenly'}
          justify
          overflow="hidden"
        >
          <Flex
            h="14%"
            py={1}
            justifyContent={'space-evenly'}
            direction={'row'}
            display={groupFocus === 'A' ? 'none' : 'flex'}
            _hover={{
              backgroundColor: '#222D80',
              cursor: 'pointer',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease-in-out',
            }}
            onClick={() => {
              setGroup('A');
            }}
          >
            <Text color={'white'} mt="12px" fontSize="24px">
              Group A
            </Text>
            {allCountries?.slice(0, 4).map((el) => {
              return (
                <Image
                  w="45px"
                  h="34px"
                  m="10px"
                  borderRadius={2}
                  src={el.flag}
                ></Image>
              );
            })}
            {groupAComplete ? (
              <Image
                mt="10px"
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
          </Flex>
          <Flex
            h="14%"
            py={1}
            justifyContent={'space-evenly'}
            direction={'row'}
            display={groupFocus === 'B' ? 'none' : 'flex'}
            _hover={{
              backgroundColor: '#222D80',
              cursor: 'pointer',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease-in-out',
            }}
            onClick={() => {
              setGroup('B');
            }}
          >
            <Text color={'white'} mt="12px" fontSize="24px">
              Group B
            </Text>
            {allCountries?.slice(4, 8).map((el) => {
              return (
                <Image
                  w="45px"
                  h="34px"
                  m="10px"
                  borderRadius={2}
                  src={el.flag}
                ></Image>
              );
            })}
            {groupBComplete ? (
              <Image
                mt="10px"
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
          </Flex>
          <Flex
            h="14%"
            py={1}
            justifyContent={'space-evenly'}
            direction={'row'}
            display={groupFocus === 'C' ? 'none' : 'flex'}
            _hover={{
              backgroundColor: '#222D80',
              cursor: 'pointer',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease-in-out',
            }}
            onClick={() => {
              setGroup('C');
            }}
          >
            <Text color={'white'} mt="12px" fontSize="24px">
              Group C
            </Text>
            {allCountries?.slice(8, 12).map((el) => {
              return (
                <Image
                  w="45px"
                  h="34px"
                  m="10px"
                  borderRadius={2}
                  src={el.flag}
                ></Image>
              );
            })}
            {groupCComplete ? (
              <Image
                mt="10px"
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
          </Flex>
          <Flex
            h="14%"
            py={1}
            justifyContent={'space-evenly'}
            direction={'row'}
            display={groupFocus === 'D' ? 'none' : 'flex'}
            _hover={{
              backgroundColor: '#222D80',
              cursor: 'pointer',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease-in-out',
            }}
            onClick={() => {
              setGroup('D');
            }}
          >
            <Text color={'white'} mt="12px" fontSize="24px">
              Group D
            </Text>
            {allCountries?.slice(12, 16).map((el) => {
              return (
                <Image
                  w="45px"
                  h="34px"
                  m="10px"
                  borderRadius={2}
                  src={el.flag}
                ></Image>
              );
            })}
            {groupDComplete ? (
              <Image
                mt="10px"
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
          </Flex>
          <Flex
            h="14%"
            py={1}
            justifyContent={'space-evenly'}
            direction={'row'}
            display={groupFocus === 'E' ? 'none' : 'flex'}
            _hover={{
              backgroundColor: '#222D80',
              cursor: 'pointer',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease-in-out',
            }}
            onClick={() => {
              setGroup('E');
            }}
          >
            <Text color={'white'} mt="12px" fontSize="24px">
              Group E
            </Text>
            {allCountries?.slice(16, 20).map((el) => {
              return (
                <Image
                  w="45px"
                  h="34px"
                  m="10px"
                  borderRadius={2}
                  src={el.flag}
                ></Image>
              );
            })}
            {groupEComplete ? (
              <Image
                mt="10px"
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
          </Flex>
          <Flex
            h="14%"
            py={1}
            justifyContent={'space-evenly'}
            direction={'row'}
            display={groupFocus === 'F' ? 'none' : 'flex'}
            _hover={{
              backgroundColor: '#222D80',
              cursor: 'pointer',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease-in-out',
            }}
            onClick={() => {
              setGroup('F');
            }}
          >
            <Text color={'white'} mt="12px" fontSize="24px">
              Group F
            </Text>
            {allCountries?.slice(20, 24).map((el) => {
              return (
                <Image
                  w="45px"
                  h="34px"
                  m="10px"
                  borderRadius={2}
                  src={el.flag}
                ></Image>
              );
            })}
            {groupFComplete ? (
              <Image
                mt="10px"
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
          </Flex>
          <Flex
            h="14%"
            py={1}
            justifyContent={'space-evenly'}
            direction={'row'}
            display={groupFocus === 'G' ? 'none' : 'flex'}
            _hover={{
              backgroundColor: '#222D80',
              cursor: 'pointer',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease-in-out',
            }}
            onClick={() => {
              setGroup('G');
            }}
          >
            <Text color={'white'} mt="12px" fontSize="24px">
              Group G
            </Text>
            {allCountries?.slice(24, 28).map((el) => {
              return (
                <Image
                  w="45px"
                  h="34px"
                  m="10px"
                  borderRadius={2}
                  src={el.flag}
                ></Image>
              );
            })}
            {groupGComplete ? (
              <Image
                mt="10px"
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
          </Flex>
          <Flex
            h="14%"
            py={1}
            justifyContent={'space-evenly'}
            direction={'row'}
            display={groupFocus === 'H' ? 'none' : 'flex'}
            _hover={{
              backgroundColor: '#222D80',
              cursor: 'pointer',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease-in-out',
            }}
            onClick={() => {
              setGroup('H');
            }}
          >
            <Text color={'white'} mt="0.4%" fontSize="24px">
              Group H
            </Text>
            {allCountries?.slice(28, 32).map((el) => {
              return (
                <Image
                  w="45px"
                  h="34px"
                  m="10px"
                  borderRadius={2}
                  src={el.flag}
                ></Image>
              );
            })}
            {groupHComplete ? (
              <Image
                mt="10px"
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default AllGroups;
