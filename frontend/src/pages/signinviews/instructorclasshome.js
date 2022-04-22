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
            // { number: 6, enrollment: 28, teams: 4, time: "Friday 4:30pm - 6:20pm" },
            // { number: 7, enrollment: 28, teams: 4, time: "Friday 6:30pm - 8:20pm" },
        ],
        id: [1]
    };

    function addClassCard() {
        return (
            <Grid item xs={6} justifyContent="space-evenly" alignItems="center" key="Add class">
                <br></br>
                <Card id="createClassCard" raised="false" elevation="0" sx={{ maxWidth: 250, maxHeight: 239 }} >

                    <CardActionArea disableTouchRipple onClick={handleClickOpen}>
                        <CardContent>
                            <br></br>
                            <Typography variant="h1" >
                                +
                            </Typography>
                        </CardContent>

                    </CardActionArea>


                </Card >
            </Grid>
        );
    }



    return (

        <Grid container component="main" sx={{ height: '100vh' }}>

            <Dialog open={open} onClose={handleClickClose} maxWidth>

                <DialogTitle justify="center" align="center">Create Class</DialogTitle>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    align="center"
                >
                    <TableDemo />
                </Grid>
                <br></br>
                <br></br>
            </Dialog>

            <CssBaseline />

            <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 2,
                        mx: 4,
                        display: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <img src="https://i.imgur.com/uMa2apF.png" alt="Guiql Logo" />
                    <br></br>
                    <Typography id="headerName" component="h1" variant="h5">
                        My Classes
                    </Typography>
                </Box>


                <Grid
                    container
                    spacing={6}
                    direction="row"
                    justifyContent="center"
                    justify="center"
                    alignItems="center"
                    align="center"
                    id="dynamicClass"
                >
                    {data1.class.map((elem) => (
                        <Grid item xs={6} justifyContent="space-evenly" alignItems="center" key={data1.class.indexOf(elem)}>
                            <br></br>

                            <CardActionArea display="block" disableTouchRipple>
                                <Card display="block" sx={{ maxWidth: 545, minHeight: 250 }}>
                                    <CardHeader
                                        title={`Class ${elem.number}`}
                                        subheader={`Time: ${elem.time}`}
                                    />
                                    <CardContent>
                                        <Typography>Enrollement: {elem.enrollment} </Typography>
                                        <Typography>Teams: {elem.teams} </Typography>
                                        <br></br>

                                    </CardContent>

                                    <CardActions justify="center" align="center">
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

                                </Card>

                            </CardActionArea>
                            {/* TODO: conditional for last cell always being add class */}

                        </Grid>
                    ))}
                    {addClassCard()};
                </Grid>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </Grid>
        </Grid>

    );

}