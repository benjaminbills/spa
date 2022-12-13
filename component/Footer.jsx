import { Box, Container, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box h={12} mt='30%' backgroundColor={'#4FC2D6'} position={'relative'}>
      <Text pt={2} color={'white'}>
        Copyright © 2022 SPA
      </Text>
    </Box>
  );
};

export default Footer;
