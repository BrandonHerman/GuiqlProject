import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';

import CssBaseline from '@mui/material/CssBaseline';
import RecruiterProfile from '../utils/recruiterProfile';
import Avatar, { genConfig } from 'react-nice-avatar';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


export default function RecruiterBio() {
    const theme = useTheme();
    const [picture, setPicture] = React.useState("https://picsum.photos/200/300");
    const [configs, setConfigs] = React.useState(RecruiterProfile.getConfig());
    const [recruiter, setRecruiter] = React.useState([{
        first_name: "John",
        last_name: "Lawrimore",
        university: "Southern Methodist University",
        email: "JLaw@smu.edu",
        bio: "I hate students.",
        image: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRWObm4bybyX21o6Llr5MMNIP6uDpS1OGMWvBzbZrKcSYmgdS8QUU51PIgrIFKLKGCLu8HpW2RxbJ18IzIE1Ek"
    },]);

    //let navigate = useNavigate(); 
    /* HONESTLY NO CLUE HOW TO DO THIS */
    const pageChange = () => {
        //let path = `/recruiter/bio/edit`;
        //navigate(path);
    }



    return (
        <>
            <br></br>
            <Grid container justifyContent="center"
                alignItems="center" sx={{ justifyItems: 'center' }}>
                <CssBaseline />

                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ justifyItems: 'center' }}>
                    <Box
                        sx={{
                            my: 5,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h4">
                           {RecruiterProfile.getName()} 
                        </Typography>
                        <br></br>
                        {/* <Avatar alt="Recruiter" src={picture} sx={{ width: 100, height: 100 }} /> */}
                        <Avatar style={{ width: 100, height: 100 }} {...configs} />
                        <br></br>
                        <Box sx={{ mt: 1 }}>
                            <Typography variant="h6" component="h2">
                               Account Information 
                                <hr/>
                            </Typography>
                            <Typography variant="subtitle1" component="h2" >
                                University:
                            </Typography>
                            <Typography variant="body1" component="h2" >
                                {RecruiterProfile.getUni()}
                            </Typography>
                            <Typography variant="subtitle1" component="h2" >
                                <hr />
                                Email: {RecruiterProfile.getEmail()}
                                <hr /> </Typography>

                            <Typography variant="subtitle1" component="h2">
                                Bio:
                            </Typography>
                            <Typography variant="body1" component="h2">
                                {RecruiterProfile.getBio()}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>

    );
}
