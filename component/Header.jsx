import { Box, Stack, Text, HStack, Spacer, Icon } from '@chakra-ui/react';
import { CiLocationOn } from 'react-icons/ci';
import { GiClockwork } from 'react-icons/gi';
import { MdPhoneInTalk } from 'react-icons/md';
const Header = () => {
  return (
    <Box pt={2} pb={2}>
      <HStack>
        <Text>Spa Logo</Text>
        <Spacer />
        <HStack>
          <HStack>
            <Icon color={'#4FC2D6'} w={7} h={7} as={CiLocationOn} />
            <Text>
              Chaka Place, 3rd Floor <br /> Nairobi
            </Text>
          </HStack>
          <HStack>
            <Icon color={'#4FC2D6'} w={7} h={7} as={GiClockwork} />
            <Text>
              Mon - Sat: 8am - 6pm <br /> Sun & Holidays: 10am - 5pm
            </Text>
          </HStack>
          <HStack>
            <Icon color={'#4FC2D6'} w={7} h={7} as={MdPhoneInTalk} />
            <Text>070000-00-000</Text>
          </HStack>
        </HStack>
        {/* #4FC2D6 */}
        {/* #6ED4DD */}
        {/* #A0F3F6 */}
      </HStack>
    </Box>
  );
};

export default Header;
