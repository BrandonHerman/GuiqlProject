import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './instructorsignin.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DeleteIcon from '@mui/icons-material/Delete';

export default function InstructorSignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    }

        const data1 = {
          class: [
            { number : 1, enrollment : 24, teams: 3},
            { number : 2, enrollment: 32, teams: 5},
            { number : 3, enrollment: 13, teams: 2},
            { number : 4, enrollment: 28, teams: 4}
          ],
          id: [1, 2, 3, 4]
    };
    

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          
          <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 2,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
                <img src="https://i.imgur.com/uMa2apF.png" alt="Guiql Logo"/>    
                <br></br>
              <Typography component="h1" variant="h5">
               My Classes 
              </Typography>
              {data1.id.map((elem) => (
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {data1.class.map((elem) => (
            <Grid item xs={3} key={data1.class.indexOf(elem)}>
              <Card>
                <CardHeader
                  title={`class: ${elem.number}`}
                  subheader={`enrollment: ${elem.enrollment}` + `\n` +
                              `teams: ${elem.teams}`}
                  
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                      <AddReactionIcon></AddReactionIcon>
                      <GroupAddIcon/>
                      <DeleteIcon/>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ))}
            </Box>
          </Grid>
        </Grid>
    );
           
          }