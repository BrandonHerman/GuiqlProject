import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './instructorsignup.css'
import {Link} from "react-router-dom";
import { Select } from '@mui/material';

export default function InstructorSignUp() {
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

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              // background styling, i know bad practice but much easier to easily change background for each file (ssignin, isignin, isignout)
              // i want to have fontenot on the instructor sign in and sign out and some other picture for student
              backgroundImage: 'url(https://www.smu.edu/-/media/Site/_Lyle/Academics/Departments/CS/CS-Home/CS_Home_Faculty.jpg?h=594&la=en&w=1056&hash=EB7823706804D039080FC55A16317B18)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 5,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* for whatever reason the physical file wont load in assets so i uploaded it to imgur and its getting picture from imgur */}
                <img src="https://i.imgur.com/AxiNrn4.png"alt="Guiql Logo"/>    
              <Typography component="h1" variant="h5">
                Instructor Sign Up 
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
               <Grid container sx={{textAlign:'center'}}>
                    <Grid item xs>
                        <TextField margin="normal"
                        required
                        autoWidth
                        id="firstName"
                        label="First Name"
                        name="firstName"
                        autoComplete="firstName"
                        autoFocus/>
                        </Grid>
                        <Grid item xs>
                        <TextField margin="normal"
                        autoWidth
                        required
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lastName"
                        />
                        </Grid>
               </Grid>
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
                {/* planning on this to be typable dropdown box, with preloaded JSON of universities to select */}
                <br></br>
                <br></br>
                <Select
                margin="normal"
                required
                fullWidth
                name="univeristy"
                labelId="College or University"
                id="university"
                value=''
                // onChange={handleChange}; will implement
                />
                {/* inits the onSubmit function at top of file */}
                <Link to="/instructorsignin">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                </Link>
                <Grid container>
                  <Grid item xs>
                    <br></br>
                    <Link to="/instructorsignin">
                    <h3>
                      Have an account? Instructor Sign In Portal
                    </h3>
                    </Link>
                    </Grid>
                  </Grid>
                <br></br>
                      <Link to="/studentsignin">
                        <h3>
                         Not an Instructor? Student Sign In Portal 
                        </h3>
                        </Link> 
              </Box>
            </Box>
          </Grid>
        </Grid>
    );
}