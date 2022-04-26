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
import Box from '@mui/material/Box';


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


export default function RecruiterBioOtherView() {
    const theme = useTheme();
    const [recruiter, setRecruiter] = React.useState([{
        first_name: "John",
        last_name: "Lawrimore",
        email: "JLaw@smu.edu",
        bio: "I hate students.",
        image: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRWObm4bybyX21o6Llr5MMNIP6uDpS1OGMWvBzbZrKcSYmgdS8QUU51PIgrIFKLKGCLu8HpW2RxbJ18IzIE1Ek"
    },]);

    return (
        <>
            <Typography gutterBottom variant="h1" component="div" sx={{ fontWeight: 'bold' }}>
                    Recruiter Bio
            </Typography>
        <Paper
            sx={{ p: 2, margin: 'auto', maxWidth: 900,
                flexGrow: 1, backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff' }}
        >
            {recruiter.map((elem) => (
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase sx={{ width: 400, height: 400 }}>
                            <Img alt="Professor Image" src={elem.image} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h2" component="div" sx={{ fontWeight: 'bold' }}>
                                    {elem.first_name} {elem.last_name}
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    <hr/>
                                    Email: {elem.email}
                                    <hr/>
                                </Typography>
                                <Typography variant="body2">
                                    Bio:
                                </Typography>
                                <Typography variant="body2">
                                    {elem.bio}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
        </Paper>
        </>

    );
}