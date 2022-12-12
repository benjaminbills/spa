import {
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

const CalendarDate = () => {
  const [date, setDate] = useState(new Date());
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
        <FormLabel>Details:</FormLabel>
        <Textarea />
      </FormControl>
    </div>
  );
};

export default CalendarDate;
