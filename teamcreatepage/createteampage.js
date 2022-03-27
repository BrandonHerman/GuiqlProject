import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import './createteampage.css'
import { Link } from "react-router-dom";
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import {Select, MenuItem, FormControl, InputLabel} from "@mui/material";

//create our style
const styles = {
    paper: {
        height: 140,
        width: 100,
        backgroundColor: "black"
    }
};
var arr_new = [1,2,3,4];

export default function CreateTeamPage() {
    
    return (
        <Grid container component="main">
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '10h' }}
            >
                This is where the NavBar would go...
            </Grid>
            <CssBaseline />

            <Paper>
                <div>
                    {/* Show user's chosen spacing value*/}
                    <FormControl>
                        <InputLabel>How many teams would you like to create?</InputLabel>
                        <Select
                            name="numberOfTeams"
                            aria-label="numberOfTeams"
                            //value={spacing.toString()}
                            //onChange={handleChange}
                            row
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                    </FormControl>
                    
                </div>
            </Paper>
        </Grid>
    );
}

//{/*Render multiple spacing values in a form */}
//{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
    //<FormControlLabel
       // key={value}
        //value={value.toString()}
        //control={<Radio />}
        //label={value.toString()}
    ///>
//))}



//https://www.youtube.com/watch?v=7MpvrG5c3A0&ab_channel=bonsaiilabs