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
          direction={'column'}
          bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)"
          borderTopRightRadius="15px"
          borderBottomRightRadius="15px"
          overflow={"hidden"}
        >
          <Flex
            h="10%"

            flexDirection="column"
            alignItems={'center'}
            backgroundColor={groupFocus === 'A' ? '#222D80' : 'transparent'}
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
                w="30px"
                h="30px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="41px"
                h="30px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
            <Text color={'white'} mt="2px" fontSize="20px" align={'center'}>
              A
            </Text>
          </Flex>
          <Flex
            h="10%"
            flexDirection="column"
            backgroundColor={groupFocus === 'B' ? '#222D80' : 'transparent'}
            alignItems={'center'}
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
                w="30px"
                h="30px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="41px"
                h="30px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
            <Text color={'white'} mt="2px" fontSize="20px" align={'center'}>
              B
            </Text>
          </Flex>
          <Flex
            h="10%"
            flexDirection="column"
            backgroundColor={groupFocus === 'C' ? '#222D80' : 'transparent'}
            alignItems={'center'}
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
                w="30px"
                h="30px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="41px"
                h="30px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
            <Text color={'white'} mt="2px" fontSize="20px" align={'center'}>
              C
            </Text>
          </Flex>
          <Flex
            h="10%"
            
            flexDirection="column"
            backgroundColor={groupFocus === 'D' ? '#222D80' : 'transparent'}
            alignItems={'center'}
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
                w="30px"
                h="30px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="41px"
                h="30px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
            <Text color={'white'} mt="2px" fontSize="20px" align={'center'}>
            D
            </Text>
          </Flex>
          <Flex
            h="10%"
            flexDirection="column"
            backgroundColor={groupFocus === 'E' ? '#222D80' : 'transparent'}
            alignItems={'center'}
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
                w="30px"
                h="30px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="41px"
                h="30px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
            <Text color={'white'} mt="2px" fontSize="20px" align={'center'}>
              E
            </Text>
          </Flex>
          <Flex
            h="10%"
            flexDirection="column"
            backgroundColor={groupFocus === 'F' ? '#222D80' : 'transparent'}
            alignItems={'center'}
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
                w="30px"
                h="30px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="41px"
                h="30px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
            <Text color={'white'} mt="2px" fontSize="20px" align={'center'}>
              F
            </Text>
          </Flex>
          <Flex
            h="10%"
            flexDirection="column"
            backgroundColor={groupFocus === 'G' ? '#222D80' : 'transparent'}
            alignItems={'center'}
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
                w="30px"
                h="30px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="41px"
                h="30px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
            <Text color={'white'} mt="2px" fontSize="20px" align={'center'}>
              G
            </Text>
          </Flex>
          <Flex
            h="10%"
            flexDirection="column"
            backgroundColor={groupFocus === 'H' ? '#222D80' : 'transparent'}
            alignItems={'center'}
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
                w="30px"
                h="30px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                mt="10px"
                mx="-5.5px"
                w="41px"
                h="30px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
            <Text color={'white'} mt="2px" fontSize="20px" align={'center'}>
              H
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
            alignItems="center"
            direction={'row'}
            backgroundColor={groupFocus === 'A' ? '#222D80' : 'transparent'}
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
            <Text color={'white'} fontSize="2.7vh">
              Group A
            </Text>
            {allCountries?.slice(0, 4).map((el) => {
              return (
                <Image w="2.6vw" h="1.8vw" borderRadius={2} src={el.flag}></Image>
              );
            })}
            {groupAComplete ? (
              <Image
                
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
          </Flex>
          <Flex
            alignItems="center"
            h="14%"
            py={1}
            justifyContent={'space-evenly'}
            direction={'row'}
            backgroundColor={groupFocus === 'B' ? '#222D80' : 'transparent'}
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
            <Text color={'white'} fontSize="24px">
              Group B
            </Text>
            {allCountries?.slice(4, 8).map((el) => {
              return (
                <Image w="2.6vw" h="1.8vw" borderRadius={2} src={el.flag}></Image>
              );
            })}
            {groupBComplete ? (
              <Image
                
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
          </Flex>
          <Flex
            alignItems="center"
            h="14%"
            py={1}
            justifyContent={'space-evenly'}
            direction={'row'}
            backgroundColor={groupFocus === 'C' ? '#222D80' : 'transparent'}
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
            <Text color={'white'} fontSize="24px">
              Group C
            </Text>
            {allCountries?.slice(8, 12).map((el) => {
              return (
                <Image w="2.6vw" h="1.8vw" borderRadius={2} src={el.flag}></Image>
              );
            })}
            {groupCComplete ? (
              <Image
                
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
          </Flex>
          <Flex
            alignItems="center"
            h="14%"
            py={1}
            justifyContent={'space-evenly'}
            direction={'row'}
            backgroundColor={groupFocus === 'D' ? '#222D80' : 'transparent'}
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
            <Text color={'white'} fontSize="24px">
              Group D
            </Text>
            {allCountries?.slice(12, 16).map((el) => {
              return (
                <Image w="2.6vw" h="1.8vw" borderRadius={2} src={el.flag}></Image>
              );
            })}
            {groupDComplete ? (
              <Image
                
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
          </Flex>
          <Flex
            alignItems="center"
            h="14%"
            py={1}
            justifyContent={'space-evenly'}
            direction={'row'}
            backgroundColor={groupFocus === 'E' ? '#222D80' : 'transparent'}
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
            <Text color={'white'} fontSize="24px">
              Group E
            </Text>
            {allCountries?.slice(16, 20).map((el) => {
              return (
                <Image w="2.6vw" h="1.8vw" borderRadius={2} src={el.flag}></Image>
              );
            })}
            {groupEComplete ? (
              <Image
                
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
          </Flex>
          <Flex
            alignItems="center"
            h="14%"
            py={1}
            justifyContent={'space-evenly'}
            direction={'row'}
            backgroundColor={groupFocus === 'F' ? '#222D80' : 'transparent'}
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
            <Text color={'white'} fontSize="24px">
              Group F
            </Text>
            {allCountries?.slice(20, 24).map((el) => {
              return (
                <Image w="2.6vw" h="1.8vw" borderRadius={2} src={el.flag}></Image>
              );
            })}
            {groupFComplete ? (
              <Image
                
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
          </Flex>
          <Flex
            alignItems="center"
            h="14%"
            py={1}
            justifyContent={'space-evenly'}
            direction={'row'}
            backgroundColor={groupFocus === 'G' ? '#222D80' : 'transparent'}
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
            <Text color={'white'} fontSize="24px">
              Group G
            </Text>
            {allCountries?.slice(24, 28).map((el) => {
              return (
                <Image w="2.6vw" h="1.8vw" borderRadius={2} src={el.flag}></Image>
              );
            })}
            {groupGComplete ? (
              <Image
               
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
                
                mx="-5.5px"
                w="45px"
                h="34px"
                src="https://i.ibb.co/cFygpXg/matiii.png"
              ></Image>
            )}
          </Flex>
          <Flex
            alignItems="center"
            h="14%"
            py={1}
            justifyContent={'space-evenly'}
            direction={'row'}
            backgroundColor={groupFocus === 'H' ? '#222D80' : 'transparent'}
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
            <Text color={'white'} fontSize="24px">
              Group H
            </Text>
            {allCountries?.slice(28, 32).map((el) => {
              return (
                <Image w="2.6vw" h="1.8vw" borderRadius={2} src={el.flag}></Image>
              );
            })}
            {groupHComplete ? (
              <Image
                
                w="34px"
                h="34px"
                src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
              ></Image>
            ) : (
              <Image
               
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
