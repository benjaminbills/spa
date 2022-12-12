import { Box, Button, Container, Text } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

const Page = ({ children }) => {
  return (
    <Container color={'#555555'} maxW={'container.xl'}>
      <Header />
      {/* <Nav /> */}
      {children}
      <Footer />
    </Container>
  );
};

export default Page;
