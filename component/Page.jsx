import { Box, Button, Container, Text } from '@chakra-ui/react';
import Header from './Header';
import Nav from './Nav';

const Page = ({ children }) => {
  return (
    <Container maxW={'container.xl'}>
      <Header />
      <Nav open={true} />
      {children}
    </Container>
  );
};

export default Page;
