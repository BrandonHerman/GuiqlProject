import * as React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';


export default function RecruiterHomeView() {
    const [professors, setProfessors] = React.useState([{
        first_name: 'John', last_name: 'Lawrimore', email: 'jLawrimore@smu.edu', class: 'GUI'
    }]);

    const [students, setStudents] = React.useState([{
        first_name: 'Jane', last_name: 'Doe', email: 'JDoe@smu.edu', class: 'DB'
    }]);

    return (
        <>
            <Stack spacing={1}>
                <Box>
                    <h2>Professors</h2>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                >
                    <Toolbar />
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Class</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {professors.map((elem, index) => (
                                    <TableRow item key={professors.indexOf(elem)}>
                                        <TableCell><Skeleton variant="circular" width={40} height={40} /></TableCell>
                                        <TableCell>{elem.first_name}</TableCell>
                                        <TableCell>{elem.last_name}</TableCell>
                                        <TableCell>{elem.email}</TableCell>
                                        <TableCell>{elem.class}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Box>
                <Box>
                    <h2>Students</h2>
                 </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                >
                    <Toolbar />
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Class</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {students.map((elem, index) => (
                                    <TableRow item key={students.indexOf(elem)}>
                                        <TableCell><Skeleton variant="circular" width={40} height={40} /></TableCell>
                                        <TableCell>{elem.first_name}</TableCell>
                                        <TableCell>{elem.last_name}</TableCell>
                                        <TableCell>{elem.email}</TableCell>
                                        <TableCell>{elem.class}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Box>
            </Stack>
        </>

    );
}