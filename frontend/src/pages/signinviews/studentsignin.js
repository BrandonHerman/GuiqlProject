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
import { Link } from "react-router-dom";
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import StudentProfile from '../utils/studentProfile';
import { Repository } from '../../api/repository';

export default function StudentSignIn() {

  var repository = new Repository();

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
  };

    //API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API 
    const validateUser = (inUsername, inPassword) => {
      var student = repository.getStudentByUsername(inUsername);
      if(student.username === null){
        alert("User does not exist");
      } else if(student.password === inPassword && student.username === inUsername){
        console.log("Successful Login");
        StudentProfile.setEmail(student.email);
        StudentProfile.setName(student.first_name, student.last_name);
        StudentProfile.setID(student.recruiter_id);
        StudentProfile.setUsername(student.username);
        StudentProfile.setPassword(student.password);
        //ADD PROPER NAVIGATE FOR STUDENTS
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
          <img src="https://i.imgur.com/AxiNrn4.png" alt="Guiql Logo" />
          <Typography component="h1" variant="h5">
            Student Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
            <Link to="/recruitersignin">
              <h3>
                Recruiter Sign In
              </h3>
            </Link>
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