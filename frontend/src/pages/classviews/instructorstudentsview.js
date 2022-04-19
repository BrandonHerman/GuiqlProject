import * as React from 'react';
import { withStyles } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//import '.instructorstudentsview.css';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


//import InboxIcon from '@mui/icons-material/MoveToInbox';
//import MailIcon from '@mui/icons-material/Mail';

import Skeleton from '@mui/material/Skeleton';

const drawerWidth = 240;
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
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ViewStudents() {

    const [students, setStudents] = React.useState([{ first_name: "Josiah", last_name: "Castillo", email: "jCastillo@smu.edu", team_id: 3 },
                                                    { first_name: "Brandon", last_name: "Herman", email: "BHerman@smu.edu", team_id: 2 },
                                                    { first_name: "Ariyan", last_name: "Kumaraswamy", email: "aKumaraswamy@smu.edu", team_id: 1 },
                                                    { first_name: "Grant", last_name: "Stoehr", email: "GSTOEHR@smu.edu", team_id: 4 },
                                                    { first_name: "ImSo", last_name: "Stupid", email: "IStupid@smu.edu", team_id: 4 },
                                                    { first_name: "More", last_name: "People", email: "MPeople@smu.edu", team_id: 8 },
                                                    { first_name: "Brandon", last_name: "Herman", email: "BHerman@smu.edu", team_id: 1 },
                                                    { first_name: "Ariyan", last_name: "Kumaraswamy", email: "aKumaraswamy@smu.edu", team_id: 1 },
                                                    { first_name: "Grant", last_name: "Stoehr", email: "GSTOEHR@smu.edu", team_id: 1 },
                                                    { first_name: "ImSo", last_name: "Stupid", email: "IStupid@smu.edu", team_id: 1 },]
                                                    );
    const group_count = 8;
    const teamsArray = [];
    for (let i = 1; i <= group_count; i++) {
        teamsArray.push(i);
    }

    const [open, setOpen] = React.useState(false);

    // const handleClickOpen = (index) => {
    //   setOpen(true);
    //   deletionIndex = index;
    // };
    // var deletionIndex = -1;

    const handleClose = () => {
      setOpen(false);
    };

    const handleChange = (index, event) => {
        const newTeam = students.slice();
        newTeam[index].students = event.target.value;
        setStudents(newTeam);
    };


    return (
        <Box sx={{ display: 'flex', mb: 2 }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Students
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {['Students', 'Teams', 'Assignments', 'Files'].map((text, index) => (
                        <ListItem button key={text}>

                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Discussions', 'Messages', 'Zoom'].map((text, index) => (
                        <ListItem button key={text}>

                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Stack spacing={1}>
                    <Box
                        component="main"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, 
                        display: 'inline', mt: 7, mb: 1, maxHeight: 300, overflowX: 'auto' }}
                    >
                        {teamsArray.map((team, index) => (
                            <Card sx={{ maxWidth: 250, display: 'inline-flex', m: 3, minHeight: 150, minWidth: 250}} >
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Team {team}
                                    </Typography>
                                    <Typography variant="body2">
                                        {students.map((item) => (item.team_id === team ? 
                                            <p>{item.first_name} {item.last_name}</p> : null))}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}

                    </Box>

                    <Box
                        component="main"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                    >
                        <Toolbar />
                        <Paper>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell>First Name</TableCell>
                                        <TableCell>Last Name</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Team</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {students.map((elem, index) => (
                                        <TableRow item key={students.indexOf(elem)}>
                                            <TableCell><Skeleton variant="circular" width={40} height={40}/></TableCell>
                                            <TableCell>{elem.first_name}</TableCell>
                                            <TableCell>{elem.last_name}</TableCell>
                                            <TableCell>{elem.email}</TableCell>
                                            <TableCell>
                                            
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
                                            
                                            </TableCell>
                                            <TableCell>
                                                <Button variant="contained" sx={{ backgroundColor: 'red'}}
                                                /*onClick={handleClickOpen(index)}*/>
                                                Delete Student
                                                </Button>
                                            </TableCell>
                                            
                                        </TableRow>
                                    ))}
                                    <TableCell></TableCell>
                                </TableBody>
                            </Table>
                        </Paper>
                    </Box>
                    <Box container justify="center">
                        <Button variant="contained" sx={{ backgroundColor: 'green', m: .5, width: '50%'}}
                            /*onClick={handleClickOpen(index)}*/>
                            Apply Changes
                        </Button>
                    </Box>
            </Stack>

        </Box>


    );
}

export default ViewStudents;

