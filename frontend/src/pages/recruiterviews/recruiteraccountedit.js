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
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';


export default function RecruiterAccountEdit() {
    const [picture, setPicture] = useState("https://picsum.photos/200/300");

    const handlePicture = (url) => {
        setPicture(url);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setPicture(data.get('image'));
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
                        <Typography component="h1" variant="h5">
                            Account Editor
                        </Typography>
                        <br></br>
                        <Avatar alt="Recruiter" src={picture} sx={{ width: 100, height: 100 }}/>
                        <br></br>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>


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
        </>
    );
}

//FINISHING EDITING THE RECRUITER BUTTON
