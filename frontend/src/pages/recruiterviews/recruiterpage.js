import * as React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SignOutButton from '../components/signOutButton';
import RecruiterProfile from '../utils/recruiterProfile';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import RecruiterHomeView from './recruiterhomeview';
import RecruiterAccountEdit from './recruiteraccountedit';
import RecruiterBio from './recruiterbio';
export default function RecruiterPage() {


    var firstname, lastname = RecruiterProfile.getName();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
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
                    Hello, Recruiter {lastname}!
                </Typography>

                <SignOutButton></SignOutButton>
            </Grid>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab name="home" onClick={() => handleClick(1)}  disableRipple label="Home" />
                <Tab name="account" onClick= {() => handleClick(2)} disableRipple label="Account" />
                <Tab name="bio" onClick={() => handleClick(3)} disableRipple label="Edit" />
            </Tabs>
            <br></br>
            {page==1 && <RecruiterHomeView/>}
            {page==3 && <RecruiterAccountEdit/> }
            {page==2 && <RecruiterBio/>}


            <br></br>
            <br></br>
         
            </>
    );
}