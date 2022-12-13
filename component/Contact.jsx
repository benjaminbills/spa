import { Box, Heading, HStack, Icon, Text } from '@chakra-ui/react';
import { CiLocationOn } from 'react-icons/ci';
import { GiClockwork } from 'react-icons/gi';
import { MdPhoneInTalk } from 'react-icons/md';
const Contact = () => {
  return (
    <Box
      pt={12}
      display={'flex'}
      justifyContent='center'
      alignContent={'center'}
      justifyItems='center'
      alignItems={'center'}
      flexDir={'column'}
    >
      <Heading>Contact Info</Heading>
      <HStack>
        <Icon color={'#4FC2D6'} w={7} h={7} as={CiLocationOn} />
        <Text>Chaka Place, 3rd Floor Nairobi</Text>
      </HStack>

      <HStack>
        <Icon color={'#4FC2D6'} w={7} h={7} as={MdPhoneInTalk} />
        <Text>070000-00-000</Text>
      </HStack>
    </Box>
  );
};

export default Contact;
