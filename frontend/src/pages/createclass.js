import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import './createclass.css'
import {Link} from "react-router-dom";
import { FormControlLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { Checkbox } from '@mui/material';

export default function CreateClass() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
            passwordConfirm: data.get('passwordConfirm'),
            university: data.get('university')

        });
    };

    return(
        <Grid container component="main">
            <CssBaseline />
            <Box component="form" noValidate onSubmit={handleSubmit}>
                <Typography component="h1" variant="h5">Hello</Typography>
            </Box>
        </Grid>
    );
}