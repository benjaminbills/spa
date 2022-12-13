import { Box, Heading, Stack, Image, Text, Divider } from '@chakra-ui/react';
import CalendarDate from './CalendarDate';

const Kids = () => {
  return (
    <Box pt={12}>
      <Stack
        spacing={['10%', '5%', '10%']}
        direction={['column', 'row', 'row']}
      >
        <Box maxW={['100%', '50%', '50%']}>
          <Heading>Kids Corner</Heading>
          <Box pt={4}>
            <Text>
              The Olakira hair spa provides intensive hair treatments to fix
              challenges faced by women all around the world including damaged
              hair from over coloring to dealing with volume challenges on thin
              & limp hair.
            </Text>
            <Image pt={4} src='/images/kids.jpg' />
            <Text pt={4} fontWeight={'bold'} fontSize={'xl'}>
              Hair Therapy (60 mins)
            </Text>
            <Text pt={4}>HAIR TREATMENT ~ Kes 3500</Text>
            <Text pb={4}>
              Your hair stylist will consult with you and recommend the best
              treatment for your needs.
            </Text>
            <Divider />
            <Text pt={4}>BLOW OUT w/ LEAVE-IN TREATMENT ~ Kes 2500</Text>
            <Text>
              Wash and brush blow-dry with a leave-in treatment to keep your
              hair healthy.
            </Text>
            <Text pt={4} fontWeight={'bold'} fontSize={'xl'}>
              SPA Therapy (60 mins) ~ Kes 3500
            </Text>
            <Text>Unwind Body Massage</Text>
            <Text>Prenatal Massage</Text>
            <Text>Pamper Me Pedicure</Text>
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

export default Kids;
