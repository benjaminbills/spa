import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

const Login = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} pt={14}>
      <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab>Login</Tab>
          <Tab>Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type='email' />
              <FormLabel>Password</FormLabel>
              <Input type='password' />
              <Button colorScheme={'cyan'} mt={4}>
                Submit
              </Button>
            </FormControl>
          </TabPanel>
          <TabPanel>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type='text' />
              <FormLabel>Email</FormLabel>
              <Input type='email' />
              <FormLabel>Password</FormLabel>
              <Input type='password' />
              <FormLabel>Confirm Password</FormLabel>
              <Input type='password' />
              <Button colorScheme={'cyan'} mt={4}>
                Submit
              </Button>
            </FormControl>
          </TabPanel>
        </TabPanels>
      </Tabs>
      {/* <Button>Create an account</Button>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type='email' />
        <FormLabel>Password</FormLabel>
        <Input type='password' />
        <Button mt={4}>Submit</Button>
      </FormControl> */}
    </Box>
  );
};

export default Login;
