import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './instructorsignin.css'
import { Tabs } from '@mui/material';
import { Tab } from '@mui/material';
import { spacing } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Card } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Column from '../components/Column'
import { useState, useEffect } from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Skeleton from '@mui/material/Skeleton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

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

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p:0 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function StudentHome() {
    const [myTeam, setStudents] = React.useState([{ first_name: "Josiah", last_name: "Castillo", comments: "fdasjlkdasnfrajkdfn"},
                                                  { first_name: "Brandon", last_name: "Herman", comments: ""},
                                                  { first_name: "Ariyan", last_name: "Kumaraswamy", comments: ""},
                                                  { first_name: "Grant", last_name: "Stoehr", comments: ""},
                                                  { first_name: "More", last_name: "People", comments: ""},
                                                  { first_name: "ImSo", last_name: "Stupid", comments: ""},]
    );

    const [open, setOpen] = React.useState(false);
    const [verify, setVerify] = React.useState(false);

    const handleRatingChange = (index, event) => {
      const newTeam = myTeam.slice();
      newTeam[index].myTeam = event.target.value;
      setStudents(newTeam);
    };

    const handleCommentsChange = (index, event) => {
      const newTeam = myTeam.slice();
      newTeam[index].comments = event.target.value;
      setStudents(newTeam);
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleClickOpen = () => {
      console.log("open boolean = " + open);
      setOpen(true);
    }
    const handleDeleteOpen = () => {
      console.log("setVerify boolean = " + verify);
      setVerify(true);
    }
    const handleClickClose = () => {
      console.log("open boolean = " + open);
      console.log("setVerify boolean = " + verify);
      setVerify(false);
      setOpen(false);
    }

    const deleteStories = () => {
      columns["Delete"].list = [];
      setColumns(columns);
      console.log(columns["Delete"]);
      handleClickClose();
    }
    const addStory = () => {
      handleClickOpen();
    }
    const submitStory = () => {
      /* columns["To Do"].list.push(
        {id:columns["To Do"].list.length + columns["In Progress"].list.length + columns["Delete"].list.length + 1,
         text:}
      ) */
    }

    const initialColumns = {
        "To Do": {
          id: "To Do",
          list: [
            { id: "1", text: "text1", desc:"", favorite:false, teamId:0 },
            { id: "2", text: "text2", desc:"", favorite:false, teamId:0 },
            { id: "3", text: "text3", desc:"", favorite:false, teamId:0 }
          ]
        },
        "In Progress": {
          id: "In Progress",
          list: [
            { id: "4", text: "text4", desc:"", favorite:false, teamId:0 },
            { id: "5", text: "text5", desc:"", favorite:false, teamId:0 },
            { id: "6", text: "text6", desc:"", favorite:false, teamId:0 }
          ]
        },
        "Done": {
          id: "Done",
          list: []
        },
        "Delete": {
            id: "Delete",
            list: []
        }
      };
    
    const [columns, setColumns] = useState(initialColumns);

    const onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    // Set start and end variables
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      console.log(start);
      const newList = start.list.filter((_, idx) => idx !== source.index);

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList
      };

      // Update the state
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter((_, idx) => idx !== source.index);

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList
      };

      // Make a new end list array
      const newEndList = end.list;

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);

      // Create a new end column
      const newEndCol = {
        id: end.id,
        list: newEndList
      };

      // Update the state
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol
      }));
      return null;
    }
};

const ratingArray = [];
    for (let i = 1; i <= 5; i++) {
        ratingArray.push(i);
    }
    const [date, setDate] = React.useState('');
    const [meetingPlace, setMeetingPlace] = React.useState('');
    const [meeting, setMeeting] = React.useState([{ date: "04/25/2001", meeting: "Our Zoom Link"},
                                                  { date: "04/25/2001", meeting: "Our Zoom Link"}]
    );
    function submitMeetingForm(e){
      e.preventDefault();
      console.log(date);
      console.log(meetingPlace);
    };
    const handleDeleteMeeting = (elem) => {
      console.log(elem);
    };
    const [sprint, setSprint] = React.useState('');
    const [report, setReport] = React.useState('');
    const [proReport, setProReport] = React.useState([{ sprint: "1", report: "Welp, I lost my job"},
                                                      { sprint: "2", report: "Welp, I lost my job, but twice"},]
    );
    function submitProgressForm(e){
      e.preventDefault();
      console.log(sprint);
      console.log(report);
      //setProReport([...proReport, { sprint: sprint, report: report}]);
    };
    const handleDeleteReport = (elem) => {
      console.log(elem);
      console.log("hello");
    };
    const [peerReview, showPeerReview] = React.useState(false);
    const [peerReviewLink, showPeerReviewLink] = React.useState('https://www.google.com/');
    //API CALL BELOW TO GRAB THE SHOW
    //showPeerReview(true);

  return (
    <Grid container component="main">
      <CssBaseline></CssBaseline>
      <Grid container>
        <AppBar
          position="fixed"
          sx={{ width: '100%', ml: `${drawerWidth}px` }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              <Tabs value={value} onChange={handleChange} aria-label="student page tabs">
                <Tab label="User Stories" {...a11yProps(0)}></Tab>
                <Tab label="Meetings" {...a11yProps(1)}></Tab>
                <Tab label="Progress Reports" {...a11yProps(2)}></Tab>
                <Tab label="Peer Reviews" {...a11yProps(3)}></Tab>
              </Tabs>
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>


      <Grid container sx={{ m: 9 }}>
        <TabPanel value={value} index={0}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Grid container direction={"row"} justify={"center"}>
              {Object.values(columns).map((column) => {
                console.log(column);
                return (
                  <Grid item sx={{mx:2, minWidth:'21%', maxWidth:'21%'}}>
                    <Column column={column} key={column.id} />
                  </Grid>
                );
              })}
            </Grid>
          </DragDropContext>
          <Button variant="outlined" color="error" onClick={handleDeleteOpen}>Delete</Button>
          <Button variant="contained" onClick={addStory}>Add Story</Button>
          <Dialog fullWidth maxWidth="md" open={open} onClose={handleClickClose}>
          <DialogContent>
            <Grid container>
            <Typography variant="h5">Add a User Story</Typography>
              <FormControl sx={{ m: 1, width: '100%' }} justify="center" align="left">
                <Grid item>
                  <TextField label="Title" id="title-field" sx={{my:2}}></TextField>
                </Grid>
                <Grid item>
                  <TextField label="Description" id="desc-field" multiline rows={4} fullWidth>Include your acceptance criteria!</TextField>
                </Grid>
                <Grid item sx={{mt:2}}>
                  <Button variant="contained" onClick={submitStory}>Add Story</Button>
                </Grid>
              </FormControl>
            </Grid>
          </DialogContent>
          </Dialog>
          <Dialog maxWidth="sm" open={verify} onClose={handleClickClose}>
            <DialogContent>
              <Typography variant="h6">Are you sure you want to delete these user stories?</Typography>
              <br></br>
              <Button variant="outlined" color="error" onClick={deleteStories}>Delete</Button>
            </DialogContent>
          </Dialog>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Box
              component="main"
              sx={{ width: '90%', p: 3, justifyContent: 'center' }}
            >
              <Stack 
                sx={{ m: 1, width: '100%' }}
                justify="center"
                align="center"
              >
                <FormControl 
                  sx={{ m: 1, width: '100%' }}
                  justify="center"
                  align="center"
                >
                  Meeting Form:
                  <br/>
                  <br/>
                  <TextField id="filled-basic" name="Date" label="Date" value={date} 
                            onChange={(e) => setDate(e.target.value)} 
                            variant="filled" sx={{ mb: 3 }}
                  />
                  <TextField id="outlined-multiline-static" name="MeetingPlace" label="Meeting Place: " 
                           multiline rows={4} value={meetingPlace} onChange={(e) => setMeetingPlace(e.target.value)}
                           sx={{ mb: 3 }}
                  />
                  <Button type="submit" variant="contained" color="primary" onClick={submitMeetingForm}>
                  Submit
                  </Button>
                </FormControl>
                <br/>
                <br/>
                <Table sx={{ width: '90%' }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Meeting Date</TableCell>
                      <TableCell>Meeting Place/Link</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {meeting.map((elem) => (
                      <TableRow>
                        <TableCell>{elem.date}</TableCell>
                        <TableCell>{elem.meeting}</TableCell>
                        <TableCell>
                          <Button variant="contained" color="success">
                            Edit
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Button variant="contained" color="error" onClick={() => handleDeleteMeeting(elem)}>
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Stack>
            </Box>
        </TabPanel>


        <TabPanel value={value} index={2}>
          <Box
            component="main"
            sx={{ width: '90%', p: 3, justifyContent: 'center' }}
          >
            <Stack 
              sx={{ m: 1, width: '100%' }}
              justify="center"
              align="center"
            >
              <FormControl 
                sx={{ m: 1, width: '100%' }}
                justify="center"
                align="center"
              >
                Progress Report Form:
                <br/>
                <br/>
                <TextField id="filled-basic" name="Sprint" label="Sprint" value={sprint} 
                            onChange={(e) => setSprint(e.target.value)} 
                            variant="filled" sx={{ mb: 3 }}
                />
                <TextField id="outlined-multiline-static" name="Report" label="Give your progress report: " 
                           multiline rows={4} value={report} onChange={(e) => setReport(e.target.value)}
                           sx={{ mb: 3 }}
                />
                <Button type="submit" variant="contained" color="primary" onClick={submitProgressForm}>
                  Submit
                </Button>
              </FormControl>
              <br/>
              <br/>
              <Table sx={{ width: '90%' }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Sprint</TableCell>
                    <TableCell>Report</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/*CREATE a meeting map that displays first_name*/}
                  {proReport.map((elem, index) => (
                    <TableRow>
                      <TableCell>{elem.sprint}</TableCell>
                      <TableCell>{elem.report}</TableCell>
                      <TableCell>
                        <Button variant="contained" color="error" onClick={() => handleDeleteReport(elem)}>
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Stack>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Box component="main" sx={{ minWidth: '90%', p: 3, justifyItems: 'left' }}>
              <h1>Peer Reviews</h1>
              {peerReview === false &&
                <>
                  <h2>Your professor has not made this link available to you yet.</h2>
                </>
              }
              {peerReview === true && 
                <>
                  <p>Please click the link below to submit a peer review for your project.</p>
                  <p>Be the first to add a review!</p>
                  <a href={peerReviewLink}>Click here to submit your peer review!</a>
                </>
              }
          </Box>
        </TabPanel>

      </Grid>

    </Grid>
  )
}
