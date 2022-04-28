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
import SignOutButton from '../components/signOutButton';
import { useLocation } from 'react-router-dom';

//import InboxIcon from '@mui/icons-material/MoveToInbox';
//import MailIcon from '@mui/icons-material/Mail';

import Skeleton from '@mui/material/Skeleton';
import { Student } from "../models/Student";
import { Team } from "../models/Team";
import JSONCalls from '../assets/JSONCalls';
const drawerWidth = 120;

//const tableWidth = 100%;



const InstructorTeamsView = (props) => {

    const calls = new JSONCalls;

        const location = useLocation();
    const data = location.state;
    console.log(data);
    const group_count = 8;
    console.log(data.studentsList);
    const [students, setStudents] = React.useState(data.studentsList);

    const [teams, setTeams] = React.useState([]);

    let numTeams = 0;
    const getNumTeams = students.map((student, index) =>{
        for (let i = 0; i < students.length; i++){
            if(student.teamID > numTeams){
                numTeams = student.teamID
            }
        }
    });


    let count = 0;
    const generateTeams = students.map((student, index) => {
        for (let i = 0; i < numTeams; i++){
            count = 0;
            for(let j = 0; j < students.length; j++){
                if(students.teamID === i+1){
                    count++;
                }
            }

        }
    });

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

        const newStudentData = { ...addStudent };
        newStudentData[fieldName] = fieldValue;

        setAddStudent(newStudentData);
    };

    const handleNewStudentSubmit = (event) => {
        event.preventDefault();

        const newStudent = new Student(students.length + 1, addStudent.first_name[0] + addStudent.last_name, addStudent.first_name, addStudent.last_name, addStudent.email);
        const newStudents = [...students, newStudent];
        setStudents(newStudents);
    };

    const [addTeam, setAddTeam] = React.useState({
        team_name: '',
        team_number: teams.length + 1,
        team_size: 0,

    });

    const handleNewTeam = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('id');
        const fieldValue = event.target.value;

        const newTeamData = { ...addTeam };
        newTeamData[fieldName] = fieldValue;

        setAddTeam(newTeamData);
    };

    const handleNewTeamSubmit = (event) => {
        event.preventDefault();

        const newTeam = new Team(teams.length + 1, addTeam.team_name, addTeam.team_number, addTeam.team_size);
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
            <div className="form-row" style={{ display: "flex" }}>
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
                    onChange={handleNewTeam}
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
        { id: 'username', label: 'Username', minWidth: 1 / 6, align: 'center', },
        { id: 'first_name', label: 'First Name', minWidth: 1 / 6, align: 'center', },
        { id: 'last_name', label: 'Last Name', minWidth: 1 / 6, align: 'center', },
        //{ id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
        {
            id: 'email',
            label: 'Email',
            minWidth: 1 / 6,
            align: 'center',
            //format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'team_id',
            label: 'Team',
            minWidth: 1 / 6,
            align: 'center',
            format: (value) => value.toLocaleString(),
        },
        {
            id: 'action',
            label: '',
            minWidth: 1 / 6,
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
            <TableCell><Skeleton variant="circular" width={40} height={40} /></TableCell>
            <TableCell>{student.username}</TableCell>
            <TableCell>{student.first_name}</TableCell>
            <TableCell>{student.last_name}</TableCell>
            <TableCell>{student.email}</TableCell>
            <TableCell>{student.team_id}</TableCell>
        </TableRow>

    );

    const navItems = ['Students', 'Teams', 'Assessments'].map((text, index) => {
        switch (text) {
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
            <Card sx={{ height: '32vh' }}>

                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Team Name:
                    </Typography>
                    <Typography variant="h5" component="div">
                        {team.team_name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Number: {index + 1}
                    </Typography>
                    <Typography variant="body2">
                        Number of students:
                        <br />
                        {team.team_size}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleViewOpen} type="text">
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

                    <img display="inline" src="https://i.imgur.com/RzmXLUB.png" alt="Guiql Logo" />

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


                    {/* <Typography variant="h1" component="h1"> */}
                    {/* CS 3345 */}
                    {/* </Typography> */}

                    <Link to="/instructorstudentsview">
                        <Button>Students</Button>
                    </Link>

                    <Link to="/instructorteamsview">
                        <Button>Teams</Button>
                    </Link>

                </Grid>
            </AppBar>



     

            <Box
                component="main"
                sx={{ width: 1, bgcolor: '#ffffff', pt: 15 }}
            >
       <br />
            <br />
            <br />
                <Grid container sx={{align:'center', justifyContent:'center'}} spacing={2} alignItems="center" justifyContext="center">
                    {gridItems}
                    <Grid item xs={12} md={8} lg={4} justifyContent="space-between" >

                        <Card sx={{ height: '32vh' }}>
                            <CardContent>
                                <Typography variant="h3" sx={{ fontSize: '100', width: '100%', top: '50%', pt:'10'}} color="text.secondary">
                                    <br></br>
                                    <br></br>
                                    <Button style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}}onClick={handleAddOpen} type="text">

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
        </Grid>
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
