import { renderMatches } from "react-router-dom"
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

export default function StudentPR() {

    const [sprint, setSprint] = React.useState('');
    const [report, setReport] = React.useState('');
    const [proReport, setProReport] = React.useState([{ id: 1, sprint: "1", report: "Welp, I lost my job" },
    { id: 2, sprint: "2", report: "Welp, I lost my job, but twice" },]
    );
    function submitProgressForm(e) {
        e.preventDefault();
        console.log(sprint);
        console.log(report);
        //setProReport([...proReport, { sprint: sprint, report: report}]);
    };
    const handleDeleteReport = (proReportId) => {
        const newProReports = [...proReport];

        const index = proReport.findIndex((proReports)=> proReports.id === proReportId);

        newProReports.splice(index, 1);

        setProReport(newProReports);
    };

    return (

        <Box
            component="main" sx={{width:"100%"}}
        >
            <Stack
                sx={{ width: '100%' }}
                justify="center"
                align="center"
            >
                <FormControl
                    sx={{width: '100%', justify:'center', alignContent:'center' }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography variant='h5'>Progress Report Form:</Typography>
                    <br />
                    <br />
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
                <br />
                <br />
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
                                    <Button variant="contained" color="error" onClick={() => handleDeleteReport(elem.id)}>
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