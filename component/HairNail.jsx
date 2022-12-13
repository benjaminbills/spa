import { Box, Heading, Stack, Image, Text } from '@chakra-ui/react';
import CalendarDate from './CalendarDate';

const HairNail = () => {
  return (
    <Box pt={12}>
      <Stack
        spacing={['10%', '5%', '10%']}
        direction={['column', 'row', 'row']}
      >
        <Box maxW={['100%', '50%', '50%']}>
          <Heading>Hair and Nail</Heading>
          <Box pt={4}>
            <Text>
              The Olakira hair spa provides intensive hair treatments to fix
              challenges faced by women all around the world including damaged
              hair from over coloring to dealing with volume challenges on thin
              & limp hair.
            </Text>
            <Image pt={4} src='/images/hair1.jpg' />
          </Box>
        </Box>
        <Box maxW={['100%', '45%', '40%']}>
          <Text as={'h1'} fontSize='lg' fontWeight={'bold'}>
            Book An Appointment
          </Text>
          <Box>
            <CalendarDate />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default HairNail;
