import * as React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import '.instructorteamsview.css';
import {
    Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer,
    Box, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItem,
    ListItemText, Button, Modal, TextField, Select, OutlinedInput, MenuItem, Grid,
    Card, CardContent, CardActions, CardActionArea, ButtonBase, Alert
} from "@mui/material"


//import InboxIcon from '@mui/icons-material/MoveToInbox';
//import MailIcon from '@mui/icons-material/Mail';

import Skeleton from '@mui/material/Skeleton';
import {Student} from "../models/Student";
import {Team} from "../models/Team";

const drawerWidth = 120;

//const tableWidth = 100%;



function InstructorTeamsView() {
    const [teams, setTeams] = React.useState([new Team(1, 'teamsters', 1), new Team(2, 'teamers', 2), new Team(3,'teamthreestar', 3)]
    );

    const [students, setStudents] = React.useState([new Student('1', 'jcastillo', 'Josiah', 'Castillo', 'captaincrunch404@gmail.com', 0, 1, 3),
            new Student('2', 'josterman', 'Jon', 'osterman', 'blueboi420@hotmail.com')
        ]
    );

    const group_count = 8;
    const teamsArray = [];
    for (let i = 1; i <= group_count; i++) {
        teamsArray.push(i);
    }

    /*
    const handleTeamChange = (index, event) => {
        const newTeam = students.slice();
        newTeam[index].students = event.target.value;
        const newStudentChange = { ...students};
        //newStudentChange.at(index).team_id =
        setStudents(newTeam);
    };
    */

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

    const [addTeam, setAddTeam] = React.useState({
        team_name: '',
        team_number: teams.length+1,
        team_size: 0,

    });

    const handleNewTeam = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('id');
        const fieldValue = event.target.value;

        const newTeamData = { ...addTeam};
        newTeamData[fieldName] = fieldValue;

        setAddTeam(newTeamData);
    };

    const handleNewTeamSubmit = (event) => {
        event.preventDefault();

        const newTeam = new Team(teams.length+1, addTeam.team_name, addTeam.team_number, addTeam.team_size);
        const newTeams = [...teams, newTeam];
        setTeams(newTeams);
    };





    /*
    const handleDeleteStudent = (studentId) => {
        const newStudents = [...students];

        const index = students.findIndex((student)=>)
    };



     */


    //NEED GET STUDENTS BY TEAM ID
    const viewForm =
        <form>
            <div className="form-row" style={{display:"flex"}}>
                <h1>List of Students:</h1>


            </div>
        </form>
    ;




    const teamForm =
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="team_name"
                    label="Team Name"
                    variant="outlined"
                    //defaultValue="Hello World"
                    onChange={ handleNewTeam }
                />
            </div>


            <button type="submit"
                    className="btn btn-primary"
                    onClick={handleNewTeamSubmit}
            >
                Submit
            </button>

        </Box>
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
            minWidth: 1/6,
            align: 'center',
        },
    ];




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

    const navItems = ['Students', 'Teams', 'Assessments'].map((text, index) => {
        switch(text){
            case 'Students':
                return (
                    <ListItem button key={text}>

                        <Link to="/instructorstudentsview">
                            <ListItemText primary={text} />
                        </Link>

                    </ListItem>
                );
            case 'Teams':
                return (
                    <ListItem button key={text}>

                        <Link to="/instructorteamsview">
                            <ListItemText primary={text} />
                        </Link>

                    </ListItem>
                );
            case 'Assignments':
                return (
                    <ListItem button key={text}>

                        <Link to="/classeshome">
                            <ListItemText primary={text} />
                        </Link>

                    </ListItem>
                );
        }
    });

    const [addOpen, setAddOpen] = React.useState(false);
    const handleAddOpen = () => setAddOpen(true);
    const handleAddClose = () => setAddOpen(false);

    const [viewOpen, setViewOpen] = React.useState(false);
    const handleViewOpen = () => setViewOpen(true);
    const handleViewClose = () => setViewOpen(false);

    const gridItems = teams.map((team, index) =>
        <Grid item xs={4}>
            <Card sx={{height: '32vh'}}>

                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Team Name:
                        </Typography>
                        <Typography variant="h5" component="div">
                            {team.team_name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Number: {index+1}
                        </Typography>
                        <Typography variant="body2">
                            Number of students:
                            <br />
                            {team.team_size}
                        </Typography>
                    </CardContent>
                <CardActions>
                    <Button onClick={ handleViewOpen} type="text">
                        View Members
                    </Button>
                    <Modal
                        open={viewOpen}
                        onClose={handleViewClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Enter Team Info
                            </Typography>

                            {viewForm}

                        </Box>

                    </Modal>
                </CardActions>

            </Card>
        </Grid>
    );

    /*

     */



    return (

        <Box sx={{ width: '100vw', height: '100vh', bgcolor: '#ee99fc', overflow: 'auto'}}>

            <CssBaseline />

            <AppBar
                position="fixed"
                sx={{ width: `100%`, height: `10%`, bgcolor: '#9c27b0' }}
            >

                <Toolbar>

                    <Link to="/classeshome" >
                        <img src="https://i.imgur.com/AxiNrn4.png" alt="Guiql Logo" width={40} height={40}/>
                    </Link>

                    <Typography variant="h6" noWrap component="div">
                        CS 3345
                    </Typography>

                    <Link to="/instructorstudentsview">
                        <ListItemText primary="Students" />
                    </Link>

                    <Link to="/instructorteamsview">
                        <ListItemText primary="Teams" />
                    </Link>

                    <Button variant="text">
                        text button
                    </Button>

                </Toolbar>
            </AppBar>


            <Box
                component="main"
                sx={{ width: 1 , bgcolor: '#ee99fc', p: 3 }}
            >
                <Toolbar />

                <Grid container spacing={2} alignItems="center" justify="center">
                    {gridItems}
                    <Grid item xs={4} >

                        <Card sx={{height: '32vh'}}>
                            <CardContent>
                                <Typography sx={{ fontSize: '10rem', width: '100%' }} color="text.secondary">
                                    <Button onClick={handleAddOpen} type="text">
                                        ADD TEAMS
                                    </Button>
                                    <Modal
                                        open={addOpen}
                                        onClose={handleAddClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                Enter Team Info
                                            </Typography>

                                            {teamForm}

                                        </Box>

                                    </Modal>

                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>

                </Grid>

            </Box>

        </Box>

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


export default InstructorTeamsView;
