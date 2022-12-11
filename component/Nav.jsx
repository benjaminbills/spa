import { Box, Center, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

const Nav = ({ open }) => {
  return (
    <Box>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={4} alignItems={'center'}>
          <NextLink href={'/'} passHref>
            Home
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
      </Flex>
    </Box>
  );
};

export default Nav;
