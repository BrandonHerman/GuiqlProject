import * as React from 'react';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader
} from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 45,
    backgroundColor: "#f5f5f5"
  }
}));
//MAKE SURE TO REPLACE THIS WITH A DB CALL FOR NUM TEAMS and STUDENT NAMES
const numTeams = 3;
const teamsArray = [];
for (let i = 1; i <= numTeams; i++) {
  teamsArray.push(i);
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

//Load up api info and call set state 
//SET BIG ASS ARRAY OF STUDENT NAMES INTO setTeam



export default function CreateTeamPage() {

  const handleDeleteAccount = (index) => {
    if(window.confirm(`Are you sure you want to delete '${teamNumber[index].student}'?`)){
      var student = teamNumber.splice(index, index+1);
    }
  }

  const classes = useStyles();
  const theme = useTheme();
  const [teamNumber, setTeam] = React.useState([{ student: "dsa", teamNumber: null },
                                                { student: "sads", teamNumber: 2 },
                                                { student: "sadsadwe", teamNumber: 1 },
                                                { student: "dsadeafda", teamNumber: 3 },
                                                { student: "grant", teamNumber: 3 },
                                                { student: "Brandon", teamNumber: 2 },
                                                { student: "Ariyan", teamNumber: 3 },
                                                { student: "Josiah", teamNumber: 1 },]
                                                );
  const handleChange = (index, event) => {
    const newTeam = teamNumber.slice();
    newTeam[index].teamNumber = event.target.value;
    setTeam(newTeam);
  };
  //MAKE SURE TO REPLACE THIS WITH A DB CALL FOR STUDENT NAMES and NUMBER OF STUDENTS IN CLASS
  


  return (

    <div className={classes.root}>
      <Grid
        container
        padding={2}
        spacing={8}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {teamNumber.map((elem, index) => (
          <Grid item xs={3} key={teamNumber.indexOf(elem)}>
            <Card>
              <CardHeader
                title={`NAME : ${elem.student}`}
                subheader={`TEAM NUMBER : ${elem.teamNumber}`}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  <Box sx={{ minWidth: 300 }}>
                    <div>
                      <FormControl 
                        sx={{ m: 1, width: 150 }}
                        justify="center"
                        align="center"
                      >
                        <InputLabel id="demo-multiple-name-label" justify="center" align="center">Team Number</InputLabel>
                        <Select
                          justify="center"
                          align="center"
                          labelId="demo-multiple-name-label"
                          id="demo-multiple-name"
                          value={elem.teamNumber}
                          onChange={handleChange.bind(this, index)}
                          input={<OutlinedInput label="Team Number" />}
                          MenuProps={MenuProps}
                        >
                          {teamsArray.map((team) => (
                            <MenuItem
                              key={team}
                              value={team}
                            >
                              {team}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </Box>
                  <Box>
                    <button type="button" 
                      className="btn btn-danger" 
                      onClick={ () => handleDeleteAccount(index)}>
                      Delete Student
                    </button>
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
