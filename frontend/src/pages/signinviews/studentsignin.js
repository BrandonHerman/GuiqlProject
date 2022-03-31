import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import './studentsignin.css'
import {Link} from "react-router-dom";
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';

export default function StudentSignIn() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://www.smu.edu/-/media/Site/StudentAffairs/NewStudent/New-Website-Photos/AARO-TAARO-JARRO-Page/AAROTARROJARROHeroImage1optimized.jpg?h=1706&la=en&w=2563&hash=5BACD211ABBDE8EFC08ECC0E58100D81)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
                <img src="https://i.imgur.com/AxiNrn4.png"alt="Guiql Logo"/>    
              <Typography component="h1" variant="h5">
                Student Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address or Username"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                 /> 
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                  Sign In
                </Button>
                <Grid container> 
                <Grid item xs>
                    <Tooltip 
                    title="Student accounts are created by their instructor in each class.
                     Please contact your instructor for your account information.">
                        <h3>
                         Where is my student account?
                        </h3>
                    </Tooltip>    
                </Grid>
                </Grid>
                <br></br>
                <br></br> 
             <Typography component="h1" variant="h5">
                Instructors 
              </Typography>
              <br></br>
                <Grid container>
                     <Grid item xs>
                    <Link to="/instructorsignin">
                      <Button variant="contained">
                      Instructor Sign In  
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item xs>
                    <Link to="/instructorsignup">
                      <Button variant="contained">
                      Instructor Sign Up
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
    );
}