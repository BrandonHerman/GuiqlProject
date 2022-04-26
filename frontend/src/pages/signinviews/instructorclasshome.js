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


export default function InstructorSignIn() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        console.log("setOpen boolean = " + open);
        setOpen(true);
    }

    const handleClickClose = () => {
        console.log("setOpen boolean = " + open);
        setOpen(false);
    }

    const data1 = {
        class: [
            { number: 1, enrollment: 24, teams: 3, time: "Monday 6:30pm - 8:20pm" },
            { number: 2, enrollment: 32, teams: 5, time: "Tuesday 4:30pm - 6:20pm" },
            { number: 3, enrollment: 13, teams: 2, time: "Tuesday 6:30pm - 8:20pm" },
            { number: 4, enrollment: 28, teams: 4, time: "Thursday 6:30pm - 8:20pm" },
            { number: 5, enrollment: 28, teams: 4, time: "Friday 2:30pm - 4:20pm" },
            { number: 6, enrollment: 28, teams: 4, time: "Friday 4:30pm - 6:20pm" },
            // { number: 7, enrollment: 28, teams: 4, time: "Friday 6:30pm - 8:20pm" },
        ],
        id: [1]
    };

    function addClassCard() {
        return (
                <Card id="createClassCard" raised="false" elevation="0" sx={{maxWidth: 262, maxHeight: 239 }} >

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
                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" sx={{flexWrap: 'wrap'}}>

                        {data1.class.map((elem) => (
                                <Grid item margin={2} xs={8} md={6} lg={4} justifyContent="center" alignItems="center">
                            <Card sx={{minWidth: "265px", maxWidth:"auto", height: "235px"}}>
                                <Link to="/instructorstudentsview">
                                        <CardHeader
                                            title={`Class ${elem.number}`}
                                            subheader={`Time: ${elem.time}`}
                                        />
                                        <CardContent>
                                            <Typography>Enrollment: {elem.enrollment} </Typography>
                                            <Typography>Teams: {elem.teams} </Typography>
                                        </CardContent>

                                        <CardActions >
                                            <IconButton aria-label="add-reaction">
                                                <AddReactionIcon></AddReactionIcon>
                                            </IconButton>
                                            <IconButton aria-label="delete">
                                                <GroupAddIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </CardActions>

                                </Link>
                            </Card>

                            </Grid>
                        ))}
                        <Grid item margin={2} justifyContent="center" alignItems="center" xs={8} md={6} lg={4}>
                        {addClassCard()}
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
        </Grid>
        // <Grid container component="main" sx={{ height: '100vh' }}>
        //     <Dialog open={open} onClose={handleClickClose} minWidth >

        //         <DialogTitle justify="center" align="center">Create Class</DialogTitle>
        //         <Grid
        //             container
        //             direction="row"
        //             justify="space-evenly"
        //             align="center"
        //         >
        //             <TableDemo />
        //         </Grid>
        //         <br></br>
        //         <br></br>
        //     </Dialog>

        //     <CssBaseline />

        //     <Grid container xs={12} sm={12} md={12} component={Paper} elevation={6} square>
        //         <Box
        //             sx={{
        //                 width: '100%',
        //                 mx: 4,
        //                 display: 'flex',
        //                 alignItems: 'center',
        //                 flexDirection: 'row',
        //             }}
        //         >
        //             <img src="https://i.imgur.com/uMa2apF.png" alt="Guiql Logo" />
        //             <br></br>
        //             <Typography display="absolute" id="headerName" component="h1" variant="h5">
        //                 My Classes
        //             </Typography>
        //             <SignOutButton></SignOutButton>
        //         </Box>


        //         <Grid
        //             container
        //             spacing={6}
        //             direction="row"
        //             justifyContent="center"
        //             justify="center"
        //             alignItems="center"
        //             align="center"
        //             id="dynamicClass"
        //         >
        //             {data1.class.map((elem) => (
        //                 <Grid item xs={5} mx={4} justifyContent="space-evenly" alignItems="center" key={data1.class.indexOf(elem)}>
        //                     <br></br>


        //                     <Card sx={{ display: 'flex', flexDirection: 'column', minWidth: 'calc(33%)', maxWidth: 500 }}>

        //                         <Link to="/instructorstudentsview">
        //                             <CardActionArea disableTouchRipple>
        //                                 <CardHeader
        //                                     title={`Class ${elem.number}`}
        //                                     subheader={`Time: ${elem.time}`}
        //                                 />
        //                                 <CardContent>
        //                                     <Typography>Enrollment: {elem.enrollment} </Typography>
        //                                     <Typography>Teams: {elem.teams} </Typography>
        //                                     <br></br>

        //                                 </CardContent>

        //                                 <CardActions justify="center" align="center">
        //                                     <IconButton aria-label="add-reaction">
        //                                         <AddReactionIcon></AddReactionIcon>
        //                                     </IconButton>
        //                                     <IconButton aria-label="delete">
        //                                         <GroupAddIcon />
        //                                     </IconButton>
        //                                     <IconButton aria-label="delete">
        //                                         <DeleteIcon />
        //                                     </IconButton>

        //                                 </CardActions>

        //                             </CardActionArea>
        //                         </Link>
        //                     </Card>

        //                     {/* TODO: conditional for last cell always being add class */}

        //                 </Grid>
        //             ))}
        //             {addClassCard()};
        //         </Grid>
        //         <br></br>
        //         <br></br>
        //         <br></br>
        //         <br></br>
        //     </Grid>
        // </Grid >

    );

}