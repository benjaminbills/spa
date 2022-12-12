import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Flex,
  Hide,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  StackDivider,
  Text,
  Button,
  MenuItem,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const Nav = ({ open }) => {
  return (
    <Box
      fontSize={['lg', 'lg', 'sm']}
      textTransform='uppercase'
      fontWeight={'bold'}
    >
      <Flex justifyContent={'space-between'}>
        <Hide below='md'>
          <HStack
            spacing={'auto'}
            divider={<StackDivider />}
            align='stretch'
            width={'container.xl'}
            height={'58'}
            alignItems='center'
            backgroundColor={'#4FC2D6'}
            color={'white'}
          >
            <NextLink href={'/'} passHref>
              <Text ml={2}>Home</Text>
            </NextLink>
            <NextLink href={'/contact'}>
              <Text px={2} py={1} rounded={'md'}>
                About us
              </Text>
            </NextLink>
            <NextLink href={'/contact'}>
              <Text px={2} py={1} rounded={'md'}>
                Hair & Nail
              </Text>
            </NextLink>
            <NextLink href={'/contact'}>
              <Text px={2} py={1} rounded={'md'}>
                Skin care & Facials
              </Text>
            </NextLink>
            <NextLink href={'/contact'}>
              <Text px={2} py={1} rounded={'md'}>
                Body Treatment
              </Text>
            </NextLink>
            <NextLink href={'/contact'}>
              <Text px={2} py={1} rounded={'md'}>
                Contact
              </Text>
            </NextLink>
          </HStack>
        </Hide>
        {open ? (
          <Box
            pb={4}
            display={{ md: 'none' }}
            backgroundColor={'#4FC2D6'}
            width={'100%'}
            color='white'
          >
            <Stack as={'nav'}>
              <NextLink href={'/'}>
                <Box
                  px={2}
                  py={1}
                  rounded={'md'}
                  _active={'black'}
                  _hover={{
                    textDecoration: 'none',
                    bg: '#6ED4DD',
                  }}
                >
                  Home
                </Box>
              </NextLink>
              <NextLink href={'/about'}>
                <Box
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: '#6ED4DD',
                  }}
                >
                  About
                </Box>
              </NextLink>
              <NextLink href={'/catalog'}>
                <Box
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: '#6ED4DD',
                  }}
                >
                  Catalog
                </Box>
              </NextLink>
              <NextLink href={'/contact'}>
                <Box
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: '#6ED4DD',
                  }}
                >
                  Contact us
                </Box>
              </NextLink>
              {/* <Menu>
                <MenuButton
                  textAlign={'left'}
                  alignContent={'right'}
                  as={Button}
                  backgroundColor={'gray.300'}
                  rightIcon={<ChevronDownIcon />}
                >
                  Affiliates
                </MenuButton>
                <MenuList>
                  <NextLink
                    target='_blank'
                    rel='noreferrer'
                    href={'https://fenghmedical.nl/'}
                  >
                    <MenuItem minW={'100%'}>
                      <Text px={2} py={1}>
                        Fengh Medical
                      </Text>
                    </MenuItem>
                  </NextLink>
                  <NextLink
                    target='_blank'
                    rel='noreferrer'
                    href={'http://www.fulbrightmed.com/'}
                  >
                    <MenuItem>
                      <Text
                        px={2}
                        py={1}
                        rounded={'md'}
                        _hover={{
                          textDecoration: 'none',
                          bg: 'gray.200',
                        }}
                      >
                        Fulbright
                      </Text>
                    </MenuItem>
                  </NextLink>
                  <NextLink
                    target='_blank'
                    rel='noreferrer'
                    href={'http://en.hocermed.com/'}
                  >
                    <MenuItem>
                      <Text
                        px={2}
                        py={1}
                        rounded={'md'}
                        _hover={{
                          textDecoration: 'none',
                          bg: 'gray.200',
                        }}
                      >
                        Hocer Med
                      </Text>
                    </MenuItem>
                  </NextLink>
                  <NextLink
                    target='_blank'
                    rel='noreferrer'
                    href={'https://www.rbt.global/'}
                  >
                    <MenuItem>
                      <Text
                        px={2}
                        py={1}
                        rounded={'md'}
                        _hover={{
                          textDecoration: 'none',
                          bg: 'gray.200',
                        }}
                      >
                        Residual Barrier Technology
                      </Text>
                    </MenuItem>
                  </NextLink>
                </MenuList>
              </Menu> */}
            </Stack>
          </Box>
        ) : null}
      </Flex>
    </Box>
  );
};

export default Nav;
