import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import { Autocomplete, InputLabel } from '@mui/material';
import Box from '@mui/material/Box';
import unis from '../assets/universities.js';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from "react-router-dom";



export default function RecruiterAccountEdit() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            passwordConfirm: data.get('passwordConfirm'),
            bio: data.get('bio'),
            image: data.get('image'),
            university: data.get('university')

        });
    };

    return (
        <Grid container component="main" justifyContent="center"
            alignItems="center" sx={{ height: '100vh', justifyItems: 'center' }}>
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
                    <Typography component="h1" variant="h5">
                        Account Editor
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                        />
                        {/* password confirm will need some sort of check that password==passwordCheck */}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="passwordConfirm"
                            type="password"
                            label="Confirm Password"
                            id="passwordConfirm"
                        />
                        <TextField
                            margin="normal"
                            multiline
                            required
                            fullWidth
                            id="bio"
                            label="Bio"
                            name="bio"
                            minRows={3}
                            maxRows={3}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="image"
                            label="New Profile Image"
                            id="image"
                        />
                        {/* planning on this to be typable dropdown box, with preloaded JSON of universities to select */}
                        {/* the p is for weird spacing with <br>, <p>'s new line works */}
                        <p></p>
                        {/* inits the onSubmit function at top of file */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update Info
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

//FINISHING EDITING THE RECRUITER BUTTON
