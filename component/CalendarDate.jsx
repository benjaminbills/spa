import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import FlutterWavePayment from './FlutterWavePayment';

const CalendarDate = () => {
  const [date, setDate] = useState(new Date());
  const onSubmit = () => {
    console.log('successful');
  };
  return (
    <div>
      <Calendar
        onChange={setDate}
        defaultActiveStartDate={new Date()}
        value={date}
      />
      <Text pt={'2'} pb={'2'} fontWeight={'bold'}>
        Time Slots*:
      </Text>
      <Wrap spacing={'2'} pb='2'>
        <WrapItem>
          <Button>8am-9am</Button>
        </WrapItem>
        <WrapItem>
          <Button>9am-10am</Button>
        </WrapItem>
        <WrapItem>
          <Button>10am-11am</Button>
        </WrapItem>
        <WrapItem>
          <Button>11am-12pm</Button>
        </WrapItem>
        <WrapItem>
          <Button>12pm-1pm</Button>
        </WrapItem>
        <WrapItem>
          <Button>1pm-2pm</Button>
        </WrapItem>
        <WrapItem>
          <Button>2pm-3pm</Button>
        </WrapItem>
        <WrapItem>
          <Button>3pm-4pm</Button>
        </WrapItem>
        <WrapItem>
          <Button>4pm-5pm</Button>
        </WrapItem>
      </Wrap>
      <FormControl>
        <Select>
          <option>Select Service</option>
        </Select>
        <FormLabel>Phone number</FormLabel>
        <Input placeholder='070700000' />
        <FormLabel>Amount</FormLabel>
        <Input readOnly placeholder='070700000' value={'3500'} />
        <FormLabel>Details:</FormLabel>
        <Textarea />
      </FormControl>
      <Box display={'flex'} justifyContent='right' pt='2'>
        <FlutterWavePayment
          onSubmit={onSubmit}
          amount={'1000'}
          name='benjamin'
          phone='0743156011'
          email={'obafemibenjamins@gmail.com'}
        />

        {/* <Button colorScheme={'cyan'}>Submit</Button> */}
      </Box>
    </div>
  );
};

export default CalendarDate;
