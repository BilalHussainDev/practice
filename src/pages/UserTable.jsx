import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getAllUser } from "api/user";

const UserTable = () => {
  const { data: allUsersData, isLoading: allUsersLoading } = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: getAllUser,
  });

  return (
    <Container>
      {allUsersLoading ? (
        <Box>Loading...</Box>
      ) : !allUsersData ? (
        <Box>No Data Found</Box>
      ) : (
        <TableContainer component={Paper} sx={{mt: 2}}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="left">First Name</TableCell>
                <TableCell align="left">Last Name</TableCell>
                <TableCell align="left">Age</TableCell>
                <TableCell align="left">Gender</TableCell>
                <TableCell align="left">Blood Group</TableCell>
                <TableCell align="left">Birth Date</TableCell>
                <TableCell align="left">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsersData?.users?.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{user.id}</TableCell>
                  <TableCell align="left">{user.firstName}</TableCell>
                  <TableCell align="left">{user.lastName}</TableCell>
                  <TableCell align="left">{user.age}</TableCell>
                  <TableCell align="left">{user.gender}</TableCell>
                  <TableCell align="left">{user.bloodGroup}</TableCell>
                  <TableCell align="left">{user.birthDate}</TableCell>
                  <TableCell align="left">{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default UserTable;
