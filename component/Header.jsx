import { Box, Stack, Text, HStack, Spacer } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box>
      <HStack>
        <Text>Spa Logo</Text>
        <Spacer />
        <HStack>
          <Text>Location</Text>
          <Text>Working hrs</Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
