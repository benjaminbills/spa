import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <Box pt={12} pb={12}>
      <Box position={'relative'}>
        <Carousel
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          infiniteLoop={true}
          stopOnHover={true}
          swipeable={true}
          dynamicHeight={true}
          emulateTouch={true}
          transitionTime={500}
          interval={6000}
        >
          <Box position={'relative'}>
            <Image src={'/images/spa1.jpg'} />
          </Box>

          <Box position={'relative'}>
            <Image src={'/images/spa.jpg'} />
          </Box>
          <Box position={'relative'}>
            <Image src={'/images/spa3.jpg'} />
          </Box>
          <Box position={'relative'}>
            <Image src={'/images/spa4.jpg'} />
          </Box>
        </Carousel>
      </Box>
      <Box>
        <HStack pt={12}>
          <Card>
            <CardBody>
              <Image
                src='/images/hairdo.jpg'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Women's Corner</Heading>
                <Text>Dreads, weave,</Text>
              </Stack>
            </CardBody>
            <CardFooter display={'flex'} justifyContent='right'>
              <Button variant='outline' colorScheme='whatsapp'>
                Book now
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <Image
                src='/images/barber3.jpg'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Men's Corner</Heading>
                <Text>Men's Corner</Text>
              </Stack>
            </CardBody>
            <CardFooter display={'flex'} justifyContent='right'>
              <Button variant='outline' colorScheme='whatsapp'>
                Book now
              </Button>
            </CardFooter>
          </Card>
        </HStack>
        <HStack pt={12}>
          <Card>
            <CardBody>
              <Image
                src='/images/kids.jpg'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Kid's Corner</Heading>
                <Text>Dreads, weave,</Text>
              </Stack>
            </CardBody>
            <CardFooter display={'flex'} justifyContent='right'>
              <Button variant='outline' colorScheme='whatsapp'>
                Book now
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <Image
                src='/images/massage.jpg'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Massage</Heading>
                <Text>Men's Corner</Text>
              </Stack>
            </CardBody>
            <CardFooter display={'flex'} justifyContent='right'>
              <Button variant='outline' colorScheme='whatsapp'>
                Book now
              </Button>
            </CardFooter>
          </Card>
        </HStack>
      </Box>
    </Box>
  );
};

export default Home;
