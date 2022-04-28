import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './instructorsignin.css'
import { Link } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RecruiterProfile from '../utils/recruiterProfile';
import { Repository } from '../../api/repository';



import {Navigate, useNavigate} from 'react-router-dom';

import Avatar, { genConfig } from 'react-nice-avatar'

export default function RecruiterSignIn() {
  var repository = new Repository();
  var navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });

    validateUser(username, password);
    username = data.get('username');
    console.log(username);
    RecruiterProfile.setName(username, username); 
    RecruiterProfile.setConfig(genConfig());
    //need all recruiter set info from API
    console.log(RecruiterProfile.getName());
    console.log("clicked recruiter sign in button");
    navigate("/recruiterhome");
  };

    //API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API 
    const validateUser = (inUsername, inPassword) => {
      var recruiter = repository.getRecruiterByUsername(inUsername);
      if(recruiter.username === null){
        alert("User does not exist");
      } else if(recruiter.password === inPassword && recruiter.username === inUsername){
        console.log("Successful Login");
        RecruiterProfile.setEmail(recruiter.email);
        RecruiterProfile.setName(recruiter.first_name, recruiter.last_name);
        RecruiterProfile.setID(recruiter.recruiter_id);
        RecruiterProfile.setUsername(recruiter.username);
        RecruiterProfile.setPassword(recruiter.password);
        //ADD PROPER NAVIGATE FOR RECRUITERS
        //navigate('/classeshome');
      }else{
        alert("Username or Password is incorrect, try again!");
      }
    }

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          // backgroundImage: 'url(https://www.smu.edu/-/media/Site/_Lyle/Academics/Departments/CS/CS-Home/CS_Home_Faculty.jpg?h=594&la=en&w=1056&hash=EB7823706804D039080FC55A16317B18)',
          backgroundImage: 'url(https://www.marketplace.org/wp-content/uploads/2021/04/CM4.png)',
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
          <img src="https://i.imgur.com/AxiNrn4.png" alt="Guiql Logo" />
          <Typography component="h1" variant="h5">
            Recruiter Sign In
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, alignItems: 'center', textAlign: 'center' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
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
              id="rememberMe"
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
                <br></br>
                <Link to="/recruitersignup">
                  <h3>
                    No account? Sign up as Recruiter 
                  </h3>
                </Link>
              </Grid>
            </Grid>
            <br></br>
            <Link to="/studentsignin">
              <h3>
                Return to Student Sign In Portal
              </h3>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}