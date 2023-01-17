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
import axios from 'axios';
import { useContext, useState } from 'react';
import { LoginContext } from './context';

const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const handleLogin = () => {
    // Perform login logic here
    const config = {
      headers: {
        'Content-type': 'application/json',
        RequestRefID: '{{$timestamp}}',
        Timestamp: '{{$timestamp}}',
        OperationVersion: '1',
        SourceSystem: 'WEB',
      },
    };
    axios
      .post(
        'localhost',
        {
          Data: [
            {
              Key: 'email',
              Value: email,
            },
            {
              Key: 'password',
              Value: password,
            },
          ],
        },
        config
      )
      .then(() => setIsLoggedIn(true))
      .catch((e) => console.log(e));
    console.log(email, password);
    setIsLoggedIn(true);
  };
  const registerHandler = (event) => {
    event.preventDefault();
    console.log('working');
  };
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
              <Input type='email' onChange={(e) => setEmail(e.target.value)} />
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleLogin} colorScheme={'cyan'} mt={4}>
                Submit
              </Button>
            </FormControl>
          </TabPanel>
          <TabPanel>
            <form onSubmit={registerHandler}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type='email' />
                <FormLabel>First Name</FormLabel>
                <Input onChange={(e) => setName(e.target.value)} type='text' />
                <FormLabel>Phone</FormLabel>
                <Input type='number' />
                <FormLabel>Last Name</FormLabel>
                <Input type='text' />
                <FormLabel>Password</FormLabel>
                <Input type='password' />
                <FormLabel>Confirm Password</FormLabel>
                <Input type='password' />
                <Button type='submit' colorScheme={'cyan'} mt={4}>
                  Submit
                </Button>
              </FormControl>
            </form>
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
