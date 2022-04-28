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
import '../signinviews/instructorsignin.css'
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
import { Repository } from '../../api/repository';

export default function StudentTabs() {

    const [date, setDate] = React.useState('');
    const [meetingPlace, setMeetingPlace] = React.useState('');
    const [meeting, setMeeting] = React.useState([{id: 1, date: "04/25/2001", meeting: "Our Zoom Link" },
    { id: 2, date: "04/25/2001", meeting: "Our Zoom Link" }]
    );
    function submitMeetingForm(e) {
        e.preventDefault();
        console.log(date);
        console.log(meetingPlace);
    };
    const handleDeleteMeeting = (meetingId) => {
        const newMeetings = [...meeting];

        const index = meeting.findIndex((meetings)=> meetings.id === meetingId);

        newMeetings.splice(index, 1);

        setMeeting(newMeetings);
    };

    return (

        <Box
            component="main"
            sx={{ width: '100%' }}
        >
            <Stack
                sx={{ width: '100%' }}
                justify="center"
                align="center"
            >
                <FormControl
                    sx={{ width: '100%', justify: 'center', alignContent: 'center' }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography variant="h5">Meeting Form:</Typography>
                    <br />
                    <br />
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
                <br />
                <br />
                <Table justifyContent="space-evenly" sx={{ width: '100%' }}>
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
                                    
                                </TableCell>
                                <TableCell>
                                    <Button variant="contained" color="error" onClick={() => handleDeleteMeeting(elem.id)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Stack>
        </Box>
    );
}