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
import Avatar, { genConfig } from 'react-nice-avatar';
// import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import RecruiterProfile from '../utils/recruiterProfile.js';
import Alert from '@mui/material/Alert';
export default function RecruiterAccountEdit() {
    const [picture, setPicture] = useState("https://picsum.photos/200/300");
    const [configs, setConfig] = useState(RecruiterProfile.getConfig());
    const [success, setSuccess] = useState(false);
    const handlePicture = (url) => {
        setPicture(url);
    }

    const newAvatar = () => {
        const config = genConfig();
        setConfig(config);
        RecruiterProfile.setConfig(config);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setPicture(data.get('image'));
        RecruiterProfile.setBio(data.get('bio'));
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            passwordConfirm: data.get('passwordConfirm'),
            bio: data.get('bio'),
            image: data.get('image'),
            university: data.get('university')

        });
        setSuccess(true);
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
                        <Avatar style={{ width: 100, height: 100 }} {...configs}/>
                        {/* <Avatar alt="Recruiter" src={picture} sx={{ width: 100, height: 100 }}/> */}
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
                         

                            <Grid container justifyContent="center" alignItems="center" direction="column">
                                <Button onClick={() => newAvatar()} color="secondary">New Avatar</Button>
                            </Grid>
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
                    {success && <Alert>Succesfully updated account</Alert>}
                </Grid>
            </Grid>
        </>
    );
}

//FINISHING EDITING THE RECRUITER BUTTON
