import * as React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import '.instructorstudentsview.css';
import {
    Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer,
    Box, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItem,
    ListItemText, Button, Modal, TextField, Select, OutlinedInput, colors, MenuItem, Grid, Icon
} from "@mui/material"
import SignOutButton from '../components/signOutButton';

//import InboxIcon from '@mui/icons-material/MoveToInbox';
//import MailIcon from '@mui/icons-material/Mail';

import Skeleton from '@mui/material/Skeleton';
import { Student } from "../models/Student";
import FormControl from "@material-ui/core/FormControl";
import JSONCalls from '../assets/JSONCalls';
import InputLabel from "@material-ui/core/InputLabel";
import { useLocation } from 'react-router-dom';
import InstructorProfile from "../utils/instructorProfile";

const drawerWidth = 120;

//const tableWidth = 100%;
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const InstructorStudentsView = (props) => {

    // const {cID, pID} = useLocation();

    const calls = new JSONCalls;
    const location = useLocation();
    const data = location.state;
    console.log(data);
    const [students, setStudents] = React.useState(calls.getStudentsByClassId(data.userID, data.classID));

    const group_count = 8;
    const teamsArray = [];

    for (let i = 1; i <= group_count; i++) {
        teamsArray.push(i);
    }



    const handleTeamChange = (index, event) => {
        
        const newTeam = students.slice();
        newTeam[index].students = event.target.value;
        setStudents(newTeam);

    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        display: 'flex',
        width: '75%',
        // height: '75%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
        pl: 8,
        flexDirection: 'column'
    };

    const [addStudent, setAddStudent] = React.useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: '',
        university:"Southern Methodist University",
        inTeam: false,
        class: '',
        teamID: 0
    });

    //let newStudents = students;
    const handleNewStudent = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('id');
        const fieldValue = event.target.value;

        const newStudentData = { ...addStudent };
        newStudentData[fieldName] = fieldValue;
        setAddStudent(newStudentData);
    };

    const handleNewStudentSubmit = (event) => {
        event.preventDefault();

        //const newStudent = new Student(students.length + 1, addStudent.first_name[0] + addStudent.last_name, addStudent.first_name, addStudent.last_name, addStudent.email);
        addStudent.username = addStudent.firstName[0] + addStudent.lastName;
        {
            if(addStudent.teamID !== 0){
                addStudent.inTeam = true;
            }
        }

        const newStudent = { ...addStudent };
        const newStudents = [...students, newStudent];
        setStudents(newStudents);
    };


    const handleDeleteStudent = (studentId) => {
        const newStudents = [...students];

        const index = students.findIndex((student) => student.id === studentId);

        newStudents.splice(index, 1);

        setStudents(newStudents);
    };


    const studentForm =
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                justifyContent: 'center',
                alignContent: 'center',
                p: 5
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="firstName"
                    label="First Name"
                    variant="outlined"
                    //defaultValue="Hello World"
                    onChange={handleNewStudent}
                />
                <TextField
                    required
                    id="lastName"
                    label="Last Name"
                    variant="outlined"
                    //defaultValue="Hello World"
                    onChange={handleNewStudent}
                />
                <TextField
                    required
                    id="email"
                    label="Email Address"
                    variant="outlined"
                    onChange={handleNewStudent}

                />
                <TextField
                    optional
                    id="teamID"
                    label="Team ID"
                    variant="outlined"
                //defaultValue="Hello World"

                />

            </div>
            <Box item justifyContent="center" alignItems="center">
                <Button disableTouchRipple variant="contained" color="primary"
                    onClick={handleNewStudentSubmit}
                    justifyContent="center"
                    alignItems="center"
                    pl='10'
                >
                    Submit
                </Button>
            </Box>
        </Box>
        ;



    const columns = [
        //{ id: 'profilePic', label: '', minWidth: 100, align: 'center', },
        { id: 'username', label: 'Username', minWidth: 1 / 6, align: 'center', },
        { id: 'firstName', label: 'First Name', minWidth: 1 / 6, align: 'center', },
        { id: 'lastName', label: 'Last Name', minWidth: 1 / 6, align: 'center', },
        //{ id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
        {
            id: 'email',
            label: 'Email',
            minWidth: 1 / 6,
            align: 'center',
            //format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'teamID',
            label: 'Team',
            minWidth: 1 / 6,
            align: 'center',
        },
        {
            id: 'action',
            label: '',
            minWidth: 1 / 8,
            align: 'center',
        },
    ];



    const newListItems = students.map((student, index) =>
        <TableRow hover role="checkbox" tabIndex={-1} key={students.indexOf(student)}>

            {columns.map((column) => {

                switch (column.id) {
                    case 'team_id':
                        return (
                            <TableCell key={column.id} align={column.align}>
                                <FormControl
                                    sx={{ m: 1, width: 150 }}
                                    justify="center"
                                    align="center"
                                >
                                    {/* <InputLabel id="demo-multiple-name-label" justify="center" align="center">Team Number</InputLabel> */}
                                    <Select
                                        sx={{ width: '75px' }}
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        value={student.team_id}
                                        onChange={handleTeamChange.bind(this, index)}
                                        input={<OutlinedInput />}
                                        MenuProps={MenuProps}
                                    >
                                        {teamsArray.map((team, i) => (
                                            <MenuItem
                                                key={i}
                                                value={team}
                                            >
                                                {team}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </TableCell>
                        );
                    case 'action':
                        return (
                            <TableCell key={column.id} align={column.align}>
                                <Button variant="contained" sx={{ backgroundColor: 'red', maxWidth: 1 / 8 }}
                                    onClick={() => handleDeleteStudent(student.id)}>
                                    X
                                </Button>
                            </TableCell>
                        );
                    default:
                        const value = student[column.id];
                        return (
                            <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                            </TableCell>
                        );


                }

            })}

        </TableRow>

    );

return (
    <Grid container>

        <CssBaseline />

        <AppBar
            sx={{ width: `100%`, bgcolor: '#ffffff' }}
        >
            <Grid
                container
                sx={{ px: 4, py: 2 }}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Link to="/classeshome">
                    <img display="inline" src="https://i.imgur.com/RzmXLUB.png" alt="Guiql Logo" />
                </Link>
                <Typography display="absolute" id="headerName" component="h1" variant="h5">
                    Good evening, Prof. lastname!
                </Typography>

                <SignOutButton></SignOutButton>
            </Grid>


            <Grid container
                sx={{ px: 4, py: 2 }}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center">





            </Grid>
        </AppBar >


        <Box
            component="main"
            sx={{ width: 1, height: '100vh', bgcolor: '#eeeeee', p: 3 }}
        >

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Paper maxHeight sx={{ width: '100%' }}>
                <TableContainer sx={{ overflow: 'auto' }}>
                    <Table stickyHeader aria-label="sticky table" >
                        <TableHead >
                            <TableRow >
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        sx={{ bgcolor: '#ffffff' }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {newListItems}
                        </TableBody>
                    </Table>
                </TableContainer>


                <div>
                    <Button onClick={handleOpen} type="submit"
                        fullWidth
                        variant="contained" sx={{ bgcolor: '#eeeeee' }}>Add Student</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        alignItems="center"
                        jutsifyContent="center"
                        direction="column"
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Enter Student Info
                            </Typography>

                            {studentForm}

                        </Box>

                    </Modal>

                </div>
            </Paper>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


        </Box>

    </Grid >
);
}
// flexGrow: 1,

//#9c27b0 dark

//#ee99fc light

/*
<Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >



                <List>
                    <ListItem>
                        <Link to="/classeshome">
                            <img src="https://i.imgur.com/AxiNrn4.png" alt="Guiql Logo" width={40} height={40}/>
                        </Link>

                    </ListItem>

                    {navItems}

                </List>

            </Drawer>
 */


export default InstructorStudentsView;
