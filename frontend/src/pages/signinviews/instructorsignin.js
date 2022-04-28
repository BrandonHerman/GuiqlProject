import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './instructorsignin.css'
import { Link, Navigate, useNavigate } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InstructorProfile from '../utils/instructorProfile';
import Alert from '@material-ui/lab/Alert';
import JSONCalls from '../assets/JSONCalls';

export default function InstructorSignIn() {


  var navigate = useNavigate();
  var calls = new JSONCalls();
  const [error, setError] = React.useState(false);

  const onHandleSubmit = function(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');
    console.log({
      username, password
    });
    validateUser(username, password);
  };



  //API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API API 
  const validateUser = (inUsername, inPassword) => {
    //get prof by username
    let prof = calls.profSignIn(inUsername, inPassword);
    console.log(prof);
    if (prof.username == inUsername) {
      console.log("Successful Login");
      InstructorProfile.setEmail(prof.email);
      InstructorProfile.setName(prof.firstName, prof.last_name);
      InstructorProfile.setID(prof.id);
      InstructorProfile.setUsername(prof.username);
      InstructorProfile.setPassword(prof.password);
      console.log(InstructorProfile.getID());
      navigate('/classeshome');
    } else {
      setError(true);
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
            Instructor Sign In
          </Typography>
          <Box component="form" noValidate onSubmit={onHandleSubmit} sx={{ mt: 1, alignItems: 'center', textAlign: 'center' }}>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }
              }
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <br></br>
                <Link to="/instructorsignup">
                  <h3>
                    No account? Sign up as Instructor
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

          {error &&
            <>
            <br></br>
              <Alert sx={{ m: 5 }} onClose={() => setError(false)} severity="error">Username or Password is incorrect</Alert>
            </>}
        </Box>

      </Grid>
    </Grid>
  );
}