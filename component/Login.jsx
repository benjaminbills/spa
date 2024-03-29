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
import { useRouter } from 'next/dist/client/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLogin = () => {
    // Perform login logic here
    const data = {
      ServiceRequest: {
        Header: {
          RequestRefID: '{{$timestamp}}',
          Timestamp: '{{$timestamp}}',
          OperationVersion: '1',
          SourceSystem: 'WEB',
        },
        Body: {
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
      },
    };
    axios
      .post('http://localhost:8090/api/spa/useroperations/login', data)
      .then(() => {
        router.push('/');
        setIsLoggedIn(true);
      })
      .catch((e) => console.log(e));
  };
  //   Access to XMLHttpRequest at 'http://localhost:8090/api/spa/useroperations/login' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.

  // Access-Control-Allow-Origin: *
  const registerHandler = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Password does not match');
    }
    const data = {
      ServiceRequest: {
        Header: {
          RequestRefID: '{{$timestamp}}',
          Timestamp: '{{$timestamp}}',
          OperationVersion: '1',
          SourceSystem: 'WEB',
        },
        Body: {
          Data: [
            {
              Key: 'email',
              Value: email,
            },
            {
              Key: 'first_name',
              Value: name,
            },
            {
              Key: 'last_name',
              Value: lastName,
            },
            {
              Key: 'contact_no',
              Value: phone,
            },
            {
              Key: 'permission_id',
              Value: '2',
            },
            {
              Key: 'password',
              Value: password,
            },
          ],
        },
      },
    };

    axios
      .post('http://localhost:8082/api/spa/useronboarding/register', data)
      .then(() => {
        alert('Successfully registered.');
        setActiveIndex(0);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Box display={'flex'} justifyContent={'center'} pt={14}>
      <Tabs
        index={activeIndex}
        onChange={setActiveIndex}
        isFitted
        variant='enclosed'
      >
        <TabList mb='1em'>
          <Tab onClick={() => setActiveIndex(0)}>Login</Tab>
          <Tab onClick={() => setActiveIndex(1)}>Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel hidden={activeTab !== 0}>
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
          <TabPanel hidden={activeTab !== 1}>
            <form onSubmit={registerHandler}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type='email'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel>First Name</FormLabel>
                <Input
                  required
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                />
                <FormLabel>Phone</FormLabel>
                <Input
                  required
                  type='number'
                  onChange={(e) => setPhone(e.target.value)}
                />
                <FormLabel>Last Name</FormLabel>
                <Input
                  required
                  type='text'
                  onChange={(e) => setLastName(e.target.value)}
                />
                <FormLabel>Password</FormLabel>
                <Input
                  required
                  type='password'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  required
                  type='password'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
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
