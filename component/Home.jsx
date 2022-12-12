import { Box, Image } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <Box pt={12}>
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
    </Box>
  );
};

export default Home;
