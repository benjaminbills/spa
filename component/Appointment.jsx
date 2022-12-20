import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from '@chakra-ui/react';
const Appointment = () => {
  return (
    <Box pt={12}>
      <TableContainer>
        <Table variant='striped' colorScheme='teal'>
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Cost(ksh)</Th>
              <Th>Time</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>10-12-2022</Td>
              <Td>2000</Td>
              <Td>10pm</Td>
              <Td>Confirmed</Td>
            </Tr>
            <Tr>
              <Td>11-12-2022</Td>
              <Td>4500</Td>
              <Td>10pm</Td>

              <Td>Confirmed</Td>
            </Tr>
            <Tr>
              <Td>13-12-2022</Td>
              <Td>5000</Td>
              <Td>10pm</Td>

              <Td>Confirmed</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Appointment;
