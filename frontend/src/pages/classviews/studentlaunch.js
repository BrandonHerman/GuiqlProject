import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SignOutButton from '../components/signOutButton';
import RecruiterProfile from '../utils/recruiterProfile';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import StudentDND from './studentdnd';
import StudentMeet from './studentMeet';
import StudentHome from './studenthome';
import StudentPR from './studentPR';
import StudentProfile from '../utils/studentProfile';

export default function RecruiterPage() {


    var firstname = StudentProfile.getfirstName();
    var lastname = StudentProfile.getlastName();

    const [value, setValue] = React.useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleClick = (num) => {
        setPage(num);
    }

    const [page, setPage] = React.useState(1);



return (
    <>
        <Grid
            container
            sx={{ px: 4, py: 2 }}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
        >

            <img display="inline" src="https://i.imgur.com/RzmXLUB.png" alt="Guiql Logo" />

            <Typography display="absolute" id="headerName" component="h1" variant="h5">
                Howdy, {firstname} {lastname}!
            </Typography>

            <SignOutButton></SignOutButton>
        </Grid>
        <Tabs value={value} onChange={handleChange} fullWidth centered>
            <Tab sx={{  minWidth: 200,  width: 200}} name="dnd" onClick={() => handleClick(1)} disableRipple label="User Stories" />
            <Tab sx={{  minWidth: 200,  width: 200}} name="meetings" onClick={() => handleClick(2)} disableRipple label="Meetings" />
            <Tab sx={{  minWidth: 200,  width: 200}} name="progressReport" onClick={() => handleClick(3)} disableRipple label="Progress Report" />
            <Tab sx={{  minWidth: 200,  width: 200}} name="peerReviews" onClick={() => handleClick(4)} disableRipple label="Peer Review" />
        </Tabs>
        <br></br>
        {page == 1 && <><br/><br/><StudentDND/></>}
        {page == 2 && <StudentMeet/>}
        {page == 3 && <StudentPR/>}
        {page == 4 && <StudentHome/>}


        <br></br>
        <br></br>

    </>
);
}