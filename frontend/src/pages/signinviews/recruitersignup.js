import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { Autocomplete, InputLabel } from '@mui/material';
import unis from '../assets/universities.js';

import { Repository } from '../../api/repository';

// parse university list for sign in
// remove state from name
var universitiesPreSlice = unis.split(/\r\n|\r|\n/);
var universitiesArray = [];
universitiesPreSlice.map((university) => {
  universitiesArray.push(university.slice(0, -4));
})


export default function RecruiterSignUp() {

  var repository = new Repository();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const college_id = repository.getCollegeByName(data.get('university'));
    const username = data.get('firstName')[0] + data.get('lastName');
    repository.createRecruiter(
      data.get('firstName'),
      data.get('lastName'),
      username,
      data.get('password'),
      data.get('email'),
      college_id
    );
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      username: data.get('username'),
      password: data.get('password'),
      // passwordConfirm: data.get('passwordConfirm'),
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
          // backgroundImage: 'url(https://www.smu.edu/-/media/Site/_Lyle/Academics/Departments/CS/CS-Home/CS_Home_Faculty.jpg?h=594&la=en&w=1056&hash=EB7823706804D039080FC55A16317B18)',
          backgroundImage: 'url(https://www.marketplace.org/wp-content/uploads/2021/04/CM4.png)',
        
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
          <img src="https://i.imgur.com/AxiNrn4.png" alt="Guiql Logo" />
          <Typography component="h1" variant="h5">
            Recruiter Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Grid container sx={{ textAlign: 'center' }}>
              <Grid item xs>
                <TextField margin="normal"
                  required
                  autoWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="firstName"
                  autoFocus />
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
              label="Email"
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
            {/* <TextField
              margin="normal"
              required
              fullWidth
              name="passwordConfirm"
              type="password"
              label="Confirm Password"
              id="passwordConfirm"
            /> */}
            {/* planning on this to be typable dropdown box, with preloaded JSON of universities to select */}
            {/* the p is for weird spacing with <br>, <p>'s new line works */}
            <p></p>
            <Autocomplete
              // margin="normal"
              options={universitiesArray}
              required
              fullWidth
              renderInput={(params) => <TextField {...params} label="College or University *" variant="outlined" />}
              id="university"
            >
            </Autocomplete>
            {/* inits the onSubmit function at top of file */}
            <Link to="/recruitersignup">
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
                <Link to="/recruitersignin">
                  <h3>
                    Have an account? Recruiter Sign In Portal
                  </h3>
                </Link>
              </Grid>
            </Grid>
            <br></br>
            <Link to="/studentsignin">
              <h3>
                Not an Recruiter? Return 
              </h3>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}