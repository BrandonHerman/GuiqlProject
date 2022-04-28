import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './instructorclasshome.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardActions, Button } from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Dialog, DialogTitle } from '@mui/material';
import TableDemo from '../components/createClassTable';
import SignOutButton from '../components/signOutButton';
import { Link } from "react-router-dom";
import { left } from '@popperjs/core';
import StudentGeneration from '../utils/studentgeneration';
import InstructorProfile from '../utils/instructorProfile';
import { Navigate, useNavigate } from 'react-router-dom';

// import { Repository } from '../../api/repository';
import JSONCalls from '../assets/JSONCalls';

import green from "@material-ui/core/colors/green";
import purple from "@material-ui/core/colors/purple";


export default function InstructorClassHome() {

    var calls = new JSONCalls();

    const [open, setOpen] = React.useState(false);
    StudentGeneration("brandon", "herman");
    const handleClickOpen = () => {
        console.log("setOpen boolean = " + open);
        setOpen(true);
    }
    var username = InstructorProfile.getUsername();
    var password = InstructorProfile.getPassword();
    console.log("hello ");
    console.log(username);
    console.log(password);
    const handleClickClose = () => {
        console.log("setOpen boolean = " + open);
        setOpen(false);
    }

    const navigate = useNavigate();
    

    //GET CLASS BY PROF ID HERE API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API 
    //class_name, class_time, size, group_count
    // const classes = repository.getClassesByProfessorId(this.profID);
    // const classes = {

    // class: [
    //     { number: 1, enrollment: 24, teams: 3, time: "Monday 6:30pm - 8:20pm" },
    //     { number: 2, enrollment: 32, teams: 5, time: "Tuesday 4:30pm - 6:20pm" },
    //     { number: 3, enrollment: 13, teams: 2, time: "Tuesday 6:30pm - 8:20pm" },
    //     { number: 4, enrollment: 28, teams: 4, time: "Thursday 6:30pm - 8:20pm" },
    //     { number: 5, enrollment: 28, teams: 4, time: "Friday 2:30pm - 4:20pm" },
    //     { number: 6, enrollment: 28, teams: 4, time: "Friday 4:30pm - 6:20pm" },
    //     // { number: 7, enrollment: 28, teams: 4, time: "Friday 6:30pm - 8:20pm" },
    // ],
    // id: [1]
    // };
    const classes = calls.getClassesByProfId(InstructorProfile.getID());

    function addClassCard() {
        return (

            <Card id="createClassCard" raised="false" elevation="0" sx={{ minWidth: 100, maxHeight: 239 }} >

                <CardActionArea disableTouchRipple onClick={handleClickOpen}>
                    <CardContent>
                        <br></br>
                        <Typography variant="h1" >
                            +
                        </Typography>
                    </CardContent>

                </CardActionArea>


            </Card >
        );
    }



    return (
        <Grid container component="main" sx={{ height: '100vh' }}>

            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <CssBaseline />
            <Dialog open={open} onClose={handleClickClose} fullWidth maxWidth="100%">

                <DialogTitle justify="center" align="center">Create Class</DialogTitle>
                <Grid
                    container
                // justify="space-evenly"
                // align="center"
                >
                    <TableDemo />
                </Grid>
                <br></br>
                <br></br>
            </Dialog>


            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Grid
                    container
                    sx={{ px: 4, py: 2 }}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <img display="inline" src="https://i.imgur.com/RzmXLUB.png" alt="Guiql Logo" />
                    <Typography display="absolute" id="headerName" component="h1" variant="h5">
                        My Classes
                    </Typography>

                    <SignOutButton></SignOutButton>
                </Grid>
                {/* TITLE END */}
                {/* CLASSES START */}
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >


                    <br></br>
                    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>

                        {classes.map((elem, i) => 
                                (
                                    <Grid item margin={2} xs={8} md={6} lg={4} justifyContent="center" alignItems="center">
                                        <Card sx={{ minWidth: "265px", maxWidth: "auto", height: "235px" }}>
                                            <Link to="/instructorstudentsview" state={{
                                                userID: InstructorProfile.getID(),
                                                classID: elem.id
                                            }}>
                                                {/* <CardActionArea onClick={() => navigateLink(elem.id, InstructorProfile.getID())}> */}
                                                <CardHeader
                                                    title={`Class ${elem.id}`}
                                                    subheader={`Time: ${elem.time}`}
                                                />
                                                <CardContent>
                                                    <Typography>Enrollment: {elem.size} </Typography>
                                                    <Typography>Teams: {elem.groupCount} </Typography>
                                                </CardContent>
                                                {/* </CardActionArea> */}
                                            </Link>
                                            {/* <CardActions >
                                            <IconButton 
                                                aria-label="add-reaction">
                                                <AddReactionIcon></AddReactionIcon>
                                            </IconButton>
                                            <IconButton  aria-label="delete">
                                                <GroupAddIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </CardActions> */}

                                        </Card>

                                    </Grid>
                                ))};
                        <Grid item margin={2} justifyContent="center" alignItems="center" xs={8} md={6} lg={4}>
                            {addClassCard()}
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
        </Grid>

    );

}