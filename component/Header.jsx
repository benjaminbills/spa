import {
  Box,
  Stack,
  Text,
  HStack,
  Spacer,
  Icon,
  Show,
  Hide,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { CiLocationOn } from 'react-icons/ci';
import { GiClockwork } from 'react-icons/gi';
import { MdPhoneInTalk } from 'react-icons/md';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import Nav from './Nav';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <HStack pt={4} pb={4}>
        <Text fontSize={'xl'} textTransform='uppercase' fontWeight={'bold'}>
          Spa Logo
        </Text>
        <Spacer />
        <Hide below='md'>
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
        </Hide>
        <Show below='md'>
          <IconButton
            size={'md'}
            color={'#6ED4DD'}
            background={'none'}
            icon={
              isOpen ? (
                <CloseIcon width={5} h={5} />
              ) : (
                <HamburgerIcon width={8} h={8} />
              )
            }
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Show>

        {/* #4FC2D6 */}
        {/* #6ED4DD */}
        {/* #A0F3F6 */}
      </HStack>
      <Nav open={isOpen} />
    </Box>
  );
};

export default Header;
