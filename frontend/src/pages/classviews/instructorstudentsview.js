import * as React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import '.instructorstudentsview.css';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer,
    Box, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItem,
    ListItemText, Button, Modal, TextField, Select, OutlinedInput, MenuItem} from "@mui/material"


//import InboxIcon from '@mui/icons-material/MoveToInbox';
//import MailIcon from '@mui/icons-material/Mail';

import Skeleton from '@mui/material/Skeleton';
import {Student} from "../models/Student";
const drawerWidth = 120;

//const tableWidth = 100%;



export default function InstructorStudentsView() {
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
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '75%',
        height: '75%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [addStudent, setAddStudent] = React.useState({
        first_name: '',
        last_name: '',
        email: '',

    });

    //let newStudents = students;
    const handleNewStudent = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('id');
        const fieldValue = event.target.value;

        const newStudentData = { ...addStudent};
        newStudentData[fieldName] = fieldValue;

        setAddStudent(newStudentData);
    };

    const handleNewStudentSubmit = (event) => {
        event.preventDefault();

        const newStudent = new Student(students.length+1, addStudent.first_name[0] + addStudent.last_name, addStudent.first_name, addStudent.last_name, addStudent.email);
        const newStudents = [...students, newStudent];
        setStudents(newStudents);
    };

    /*
    const handleDeleteStudent = (studentId) => {
        const newStudents = [...students];

        const index = students.findIndex((student)=>)
    };

     */
    const studentForm =
    <form>
        <div className="form-row" style={{display:"flex"}}>
            <div className="col-4">
                <TextField id="first_name" label="First Name" variant="outlined" onChange={ handleNewStudent }/>
            </div>
            <div className="col-2">
                <TextField id="last_name" label="Last Name" variant="outlined" onChange={ handleNewStudent }/>
            </div>
            <div className="col-2">
                <TextField id="email" label="Email" variant="outlined" onChange={ handleNewStudent }/>
            </div>
            <button type="submit"
                    className="btn btn-primary"
                    onClick={handleNewStudentSubmit}
            >
                Submit
            </button>
        </div>
    </form>
    ;



    const columns = [
        //{ id: 'profilePic', label: '', minWidth: 100, align: 'center', },
        { id: 'username', label: 'Username', minWidth: 1/6, align: 'center', },
        { id: 'first_name', label: 'First Name', minWidth: 1/6, align: 'center', },
        { id: 'last_name', label: 'Last Name', minWidth: 1/6, align: 'center', },
        //{ id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
        {
            id: 'email',
            label: 'Email',
            minWidth: 1/6,
            align: 'center',
            //format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'team_id',
            label: 'Team',
            minWidth: 1/6,
            align: 'center',
            format: (value) => value.toLocaleString(),
        },
        {
            id: 'action',
            label: '',
            minWidth: 1/8,
            align: 'center',
        },
    ];


    const [students, setStudents] = React.useState([new Student('1', 'jcastillo', 'Josiah', 'Castillo', 'captaincrunch404@gmail.com', 0, 1, 3),
        new Student('2', 'josterman', 'Jon', 'osterman', 'blueboi420@hotmail.com')
        ]
    );

    /*
    let students = [
        new Student('1', 'jcastillo', 'Josiah', 'Castillo', 'captaincrunch404@gmail.com'),
        new Student('2', 'josterman', 'Jon', 'osterman', 'blueboi420@hotmail.com'),
        new Student('3', 'jcastillo', 'Josiah', 'Castillo', 'captaincrunch404@gmail.com'),
        new Student('4', 'josterman', 'Jon', 'osterman', 'blueboi420@hotmail.com'),
        new Student('5', 'jcastillo', 'Josiah', 'Castillo', 'captaincrunch404@gmail.com'),
        new Student('6', 'josterman', 'Jon', 'osterman', 'blueboi420@hotmail.com'),
        new Student('7', 'jcastillo', 'Josiah', 'Castillo', 'captaincrunch404@gmail.com'),
        new Student('8', 'josterman', 'Jon', 'osterman', 'blueboi420@hotmail.com'),
        new Student('9', 'jcastillo', 'Josiah', 'Castillo', 'captaincrunch404@gmail.com'),
        new Student('10', 'josterman', 'Jon', 'osterman', 'blueboi420@hotmail.com')
    ];
    */


    const listItems = students.map((student, index) =>
        <TableRow hover role="checkbox" tabIndex={-1} item key={students.indexOf(student)}>
            <TableCell><Skeleton variant="circular" width={40} height={40}/></TableCell>
            <TableCell>{student.username}</TableCell>
            <TableCell>{student.first_name}</TableCell>
            <TableCell>{student.last_name}</TableCell>
            <TableCell>{student.email}</TableCell>
            <TableCell>{student.team_id}</TableCell>
        </TableRow>

    );

    const newListItems = students.map((student, index) =>
                    <TableRow hover role="checkbox" tabIndex={-1} key={students.indexOf(student)}>

                        {columns.map((column) => {

                            switch(column.id){
                                case 'team_id':
                                    return(
                                        <TableCell key={column.id} align={column.align}>
                                            <Select
                                                labelId="demo-simple-select-autowidth-label"
                                                id="demo-simple-select-autowidth"
                                                value={column.id}
                                                onChange={handleTeamChange.bind(this, index)}
                                                width={1/6}
                                            >
                                                {teamsArray.map((team) => (
                                                    <MenuItem
                                                        key={team}
                                                        value={team}
                                                    >
                                                        {team}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </TableCell>
                                    );
                                case 'action':
                                    return(
                                        <TableCell key={column.id} align={column.align}>
                                            <Button variant="contained" sx={{ backgroundColor: 'red', maxWidth: 1/8}}
                                                /*onClick={handleClickOpen(index)}*/>
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

        <Box sx={{ display: 'flex' }}>

            <CssBaseline />

            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >

                <Toolbar>

                    <Typography variant="h6" noWrap component="div">
                        CS 3345
                    </Typography>
                </Toolbar>
            </AppBar>
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

                    {['Students', 'Teams', 'Assessments'].map((text, index) => (
                        <ListItem button key={text}>

                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>

            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />

                <Paper sx={{ width: 1}}>
                    <TableContainer sx={{ maxHeight: 500, overflow: 'auto'}}>
                        <Table stickyHeader stickyFooter aria-label="sticky table" >
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
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
                                variant="contained">Add Student</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
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




            </Box>


        </Box>
    );
}



// export default InstructorStudentsView;
