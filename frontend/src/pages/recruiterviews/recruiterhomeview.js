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
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SignOutButton from '../components/signOutButton';
import RecruiterProfile from '../utils/recruiterProfile';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import { Avatar } from '@mui/material';
import Avatar, { genConfig } from 'react-nice-avatar';
import JSONCalls from '../assets/JSONCalls';

export default function RecruiterHomeView() {


    var calls = new JSONCalls();
    const [professors, setProfessors] = React.useState(
        calls.getProfbyUni(RecruiterProfile.getUni())
    );

    const [students, setStudents] = React.useState(
        calls.getStudentsByUniversity(RecruiterProfile.getUni())
    );
        console.log(students);
    return (
        <>

            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
            >

                <Stack spacing={5}>
                    <Grid item xs={12}>
                        <Box>
                            <Typography sx={{ px: 5 }} component="h2" variant="h5">Professors</Typography>
                        </Box>
                        <br></br>
                        <Box
                            component="main"
                            sx={{ flexGrow: 1, bgcolor: 'background.default', px: 5 }}
                        >
                            {/* <Toolbar /> */}
                            <Paper>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell>First Name</TableCell>
                                            <TableCell>Last Name</TableCell>
                                            <TableCell>Email</TableCell>
                                            <TableCell>Role</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {professors.map((elem, index) => (
                                            <TableRow item key={professors.indexOf(elem)}>
                                                <TableCell>
                                                    {/* <Avatar alt="profIMG"  src="https://www.pngitem.com/pimgs/m/230-2302175_pointer-clipart-english-professor-professor-clipart-hd-png.png" width={40} height={40} /> */}
                                                    <Avatar style={{ width: 40, height: 40 }} />
                                                </TableCell>
                                                <TableCell>{elem.firstName}</TableCell>
                                                <TableCell>{elem.lastName}</TableCell>
                                                <TableCell>{(elem.firstName[0]+elem.lastName+"@smu.edu").toLowerCase()}</TableCell>
                                                <TableCell>Instructor</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box>
                            <Typography sx={{ px: 5 }} component="h2" variant="h5">Students</Typography>
                        </Box>

                        <br></br>
                        <Box
                            component="main"
                            sx={{ flexGrow: 1, bgcolor: 'background.default', px: 5 }}
                        >
                            {/* <Toolbar /> */}
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
                                        {students.map((elem) => (
                                            <TableRow item>
                                                <TableCell>
                                                    {/* <Avatar alt="studentIMG" src="https://i.pinimg.com/564x/11/5c/87/115c879e05b5add475c68f279729d7fc--volleyball-girls-cute-clipart.jpg" width={40} height={40} /> */}

                                                    <Avatar style={{ width: 40, height: 40 }} />
                                                </TableCell>
                                                <TableCell>{elem.firstName}</TableCell>
                                                <TableCell>{elem.lastName}</TableCell>
                                                <TableCell>{elem.email}</TableCell>
                                                <TableCell>{elem.class}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </Box>
                    </Grid>
                </Stack>
            </Grid>
        </>
    );
}